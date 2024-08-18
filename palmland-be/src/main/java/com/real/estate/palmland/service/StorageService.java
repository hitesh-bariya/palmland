package com.real.estate.palmland.service;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.model.CannedAccessControlList;
import com.amazonaws.services.s3.model.DeleteObjectRequest;
import com.amazonaws.services.s3.model.ObjectListing;
import com.amazonaws.services.s3.model.PutObjectRequest;
import com.amazonaws.services.s3.model.S3ObjectSummary;
import com.real.estate.palmland.entity.Agent;
import com.real.estate.palmland.entity.Blog;
import com.real.estate.palmland.entity.Image;
import com.real.estate.palmland.entity.Property;
import com.real.estate.palmland.repository.AgentRepository;
import com.real.estate.palmland.repository.BlogRepository;

@Service
public class StorageService {
	private static final Logger LOGGER = LoggerFactory.getLogger(StorageService.class);

	@Value("${application.bucket.name}")
	private String bucketName;

	private AmazonS3 s3Client;
	
	/*@Value("${upload.path}")
	private String uploadPath;
	
	@Value("${upload.awsflag}")
	private String uploadAwsflag;*/

	@Autowired
	private com.real.estate.palmland.repository.ImageRepository imageRepository;
	
	@Autowired
	BlogRepository blogRepository;
	
	@Autowired
	AgentRepository agentRepository;

	@Autowired
	public StorageService(AmazonS3 s3Client) {
		this.s3Client = s3Client;
	}


	public List<Image> upload(MultipartFile multipartFiles[], String userName, Property dbProperty) {
		List<Image> imageList = new ArrayList<>();
		try {
			int count = 0;
			for (MultipartFile multipartFile : multipartFiles) {

				File file = convertMultiPartToFile(multipartFile);
				String fileName = generateFileName(multipartFile, count, userName, dbProperty);
				//uploadFileToServert(multipartFile,fileName);
				uploadFileTos3bucket(fileName, file);
				file.delete();
				Image image = new Image();
				image.setName(dbProperty.getPropertyName());
				image.setPath(fileName);
				image.setProperty(dbProperty);
				image.setType(dbProperty.getPropertyType());
				imageList.add(image);
				count++;
			}
			imageRepository.saveAll(imageList);

		} catch (Exception e) {
			e.printStackTrace();
		}

		return imageList;
	}
	
	public void uploadBlog(MultipartFile multipartFile, Blog blog) {
		List<Image> imageList = new ArrayList<>();
		try {
			File file = convertMultiPartToFile(multipartFile);
			String fileName = generateFileNameForBlog(multipartFile, 1, blog);
			//uploadFileToServert(multipartFile,fileName);
			uploadFileTos3bucket(fileName, file);
			file.delete();
			blog.setImageKey(fileName);
			blogRepository.save(blog);

		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	public void uploadAgent(MultipartFile multipartFile, Agent agent) {
		try {
			File file = convertMultiPartToFile(multipartFile);
			String fileName = generateFileNameForAgent(multipartFile, 1, agent);
			uploadFileTos3bucket(fileName, file);
			file.delete();
			agent.setImageKey(fileName);
			agentRepository.save(agent);

		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	
	public List<Image> updateImage(MultipartFile multipartFiles[], String userName, Property dbProperty) {

		List<Image> imageList = new ArrayList<>();
		try {
			removeOldImages(userName, dbProperty);
			int count = 0;
			for (MultipartFile MultipartFile : multipartFiles) {
				File file = convertMultiPartToFile(MultipartFile);
				String fileName = generateFileName(MultipartFile, count, userName, dbProperty);
				uploadFileTos3bucket(fileName, file);
				file.delete();
				Image image = new Image();
				image.setName(dbProperty.getPropertyName());
				image.setPath(fileName);
				image.setProperty(dbProperty);
				image.setType(dbProperty.getPropertyType());
				imageList.add(image);
				count++;
			}
			imageRepository.saveAll(imageList);
		} catch (Exception e) {
			e.printStackTrace();
		}

		return imageList;
	}

	private void removeOldImages(String userName, Property dbProperty) {
		String deleteDirectory = userName + "/" + dbProperty.getPropertyType() + "/" + dbProperty.getPropertyMarquee()+"/"+dbProperty.getPropertyName();
		ObjectListing objectListing = s3Client.listObjects(bucketName, deleteDirectory);
		for (S3ObjectSummary objectSummary : objectListing.getObjectSummaries()) {
			String key = objectSummary.getKey();
			s3Client.deleteObject(new DeleteObjectRequest(bucketName, key));
			LOGGER.info("Deleted object:{} ", key);
		}
		s3Client.deleteObject(bucketName, deleteDirectory);
		imageRepository.deleteByPropertyId(dbProperty);
	}

	private String generateFileName(MultipartFile multiPart, int count, String userName, Property dbProperty) {
		Date date = Calendar.getInstance().getTime();
		DateFormat dateFormat = new SimpleDateFormat("yyyy_MM_dd_hh_mm_ss");
		String extension = multiPart.getOriginalFilename().substring(multiPart.getOriginalFilename().lastIndexOf('.'));
		return userName + "/" + dbProperty.getPropertyType() + "/" + dbProperty.getPropertyMarquee() + "/"
				+ dbProperty.getPropertyName() + "/image_" + count + "_" + dateFormat.format(date) + "_" + extension;
	}

	private String generateFileNameForBlog(MultipartFile multiPart, int count,Blog blog) {
		Date date = Calendar.getInstance().getTime();
		DateFormat dateFormat = new SimpleDateFormat("yyyy_MM_dd_hh_mm_ss");
		String extension = multiPart.getOriginalFilename().substring(multiPart.getOriginalFilename().lastIndexOf('.'));
		return "Blog/" + blog.getId() + "/image_" + count + "_" + dateFormat.format(date) + "_" + extension;
	}
	
	private String generateFileNameForAgent(MultipartFile multiPart, int count,Agent agent) {
		Date date = Calendar.getInstance().getTime();
		DateFormat dateFormat = new SimpleDateFormat("yyyy_MM_dd_hh_mm_ss");
		String extension = multiPart.getOriginalFilename().substring(multiPart.getOriginalFilename().lastIndexOf('.'));
		return "Agent/" + agent.getId() + "/image_" + count + "_" + dateFormat.format(date) + "_" + extension;
	}
	
	private File convertMultiPartToFile(MultipartFile file) throws IOException {
		File convFile = new File(file.getOriginalFilename());
		FileOutputStream fos = new FileOutputStream(convFile);
		fos.write(file.getBytes());
		fos.close();
		return convFile;
	}

	private void uploadFileTos3bucket(String fileName, File file) {
		s3Client.putObject(
				new PutObjectRequest(bucketName, fileName, file));
	}

	private void uploadFileToServert(MultipartFile multipartFile,String fileName) {
		Path uploadPath = Paths.get("src/main/resources/images");

		try {
			
			File file = new File(uploadPath+ fileName);
			file.createNewFile();
			
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

	}

}
