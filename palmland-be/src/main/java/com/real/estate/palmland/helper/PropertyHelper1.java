package com.real.estate.palmland.helper;

import com.real.estate.palmland.entity.Image;
import com.real.estate.palmland.entity.User;
import com.real.estate.palmland.enums.PropertyMarquee;
import com.real.estate.palmland.model.PropertyDto;
import com.real.estate.palmland.repository.ImageRepository;
import jakarta.validation.Valid;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Arrays;
import java.util.Date;
import java.util.Optional;
import java.util.concurrent.atomic.AtomicInteger;

@Component
public class PropertyHelper1 {

	private static final Logger logger = LoggerFactory.getLogger(PropertyHelper1.class);

	private static final String DIR_TO_UPLOAD = System.getProperty("user.dir");

	@Autowired
	private ImageRepository imageRepository;

	public void processPropertyData1(@Valid MultipartFile[] files, Optional<User> dbUser, PropertyDto readValue) {
		logger.info("processing the image file to store data in to respected folder!!!");
		File uploadDirectory = new File(DIR_TO_UPLOAD + File.separator + "Uploads");
		String directoryName = null;
		if (!uploadDirectory.exists()) {
			uploadDirectory.mkdir();
			directoryName = uploadDirectory + File.separator + (dbUser.get().getUsername());
			File directory = new File(directoryName);
			if (!directory.exists()) {
				directory.mkdir();
			}
		} else {
			directoryName = uploadDirectory + File.separator + (dbUser.get().getUsername());
		}
		File createDirectoryForUser = new File(directoryName);
		if (!createDirectoryForUser.exists())
			createDirectoryForUser.mkdir();
		String feaName = directoryName + File.separator + "FEATURED";
		String recName = directoryName + File.separator + "RECENT";
		String upcName = directoryName + File.separator + "UPCOMING";
		Arrays.asList(files).stream().forEach(file -> {
			AtomicInteger atomicInteger = new AtomicInteger(0);
			String timeStamp = new SimpleDateFormat("yyyyMMddHHmm").format(new Date());
			String extension = file.getOriginalFilename().substring(file.getOriginalFilename().lastIndexOf('.'));
			String filename = readValue.getPropertyName() + "_" + atomicInteger.getAndIncrement() + "_" + timeStamp
					+ extension;
			if (readValue.getPropertyMarquee().contains(PropertyMarquee.FEATURED.name())) {
				try {
					File feaDirectory = new File(feaName);
					if (!feaDirectory.exists()) {
						feaDirectory.mkdir();
					}
					File folder = new File(feaDirectory + File.separator + filename);
					boolean isSaved = saveImageData(file, folder, readValue);
					if (isSaved) {
						file.transferTo(folder);
					}
				} catch (IOException e) {
					throw new RuntimeException(e);
				}

			}
			if (readValue.getPropertyMarquee().contains(PropertyMarquee.RECENT.name())) {
				try {
					File recDirectory = new File(recName);
					if (!recDirectory.exists()) {
						recDirectory.mkdir();
					}
					File folder = new File(recDirectory + File.separator + filename);
					boolean isSaved = saveImageData(file, folder, readValue);
					if (isSaved) {
						file.transferTo(folder);
					}
				} catch (IOException e) {
					throw new RuntimeException(e);
				}
			}
			if (readValue.getPropertyMarquee().contains(PropertyMarquee.UPCOMING.name())) {
				try {
					File upcomDirectory = new File(upcName);
					if (!upcomDirectory.exists()) {
						upcomDirectory.mkdir();
					}
					File folder = new File(upcomDirectory + File.separator + filename);
					boolean isSaved = saveImageData(file, folder, readValue);
					if (isSaved) {
						file.transferTo(folder);
					}
				} catch (IOException e) {
					throw new RuntimeException(e);
				}
			}
		});
	}

	private boolean saveImageData(MultipartFile file, File folder, PropertyDto propertyDto) {
		if (!file.isEmpty()) {
			Image image = new Image();
			image.setName(file.getOriginalFilename());
			image.setType(file.getOriginalFilename().substring(file.getOriginalFilename().lastIndexOf('.')));
			image.setPath(folder.getPath());
			imageRepository.save(image);
			return true;
		} else {
			return false;
		}
	}
}
