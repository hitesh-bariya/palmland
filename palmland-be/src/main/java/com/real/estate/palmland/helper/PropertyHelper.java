package com.real.estate.palmland.helper;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;

import org.apache.commons.io.IOUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

import com.real.estate.palmland.entity.Property;
import com.real.estate.palmland.entity.User;
import com.real.estate.palmland.service.StorageService;

import jakarta.validation.Valid;
@Component
public class PropertyHelper {
	
	@Autowired
	private StorageService storageService;
	
    private static final Logger logger = LoggerFactory.getLogger(PropertyHelper.class);
    
    private static final String DIR_TO_UPLOAD = System.getProperty("user.dir");

    public void processPropertyData(@Valid MultipartFile[] files,User dbUser,Property dbProperty)  {
    	storageService.upload(files, dbUser.getEmail(),dbProperty); 
    }
    
    public void processForUpdatePropertyData(@Valid MultipartFile[] files,User dbUser,Property dbProperty)  {
    	storageService.updateImage(files, dbUser.getEmail(),dbProperty); 
    }
    
    public List<byte[]> getImagesByUserAndPropertyTypeWithName(String email, String propertyType,String propertyName)throws Exception{
       List<byte[]> imageList=new ArrayList<>();
        String path=DIR_TO_UPLOAD+File.separator+"Uploads";
        listAllFiles(path,imageList,propertyName);
        if(propertyType!=null){
           // String path=DIR_TO_UPLOAD+File.separator+"Uploads"+File.separator+email+File.separator+propertyType;
            File file=new File(path);
            if(file.isDirectory()){
                for(File images:file.listFiles()){
                    imageList.add(  IOUtils.toByteArray(images.toURI()));
                }
            }
        }else{
            String path1=DIR_TO_UPLOAD+File.separator+"Uploads"+File.separator+email+File.separator+"UPCOMING";
            File file=new File(path1);
            if(file.isDirectory()){
                if(file.listFiles()!=null && file.listFiles().length>0)
                for(File images:file.listFiles()){
                    if(images.getName().contains(propertyName)){
                        imageList.add( IOUtils.toByteArray(images.toURI()));
                    }
                }
            }
            String path2=DIR_TO_UPLOAD+File.separator+"Uploads"+File.separator+email+File.separator+"FEATURED";
            File file1=new File(path2);
            if(file1.isDirectory()){
                if(file1.listFiles()!=null && file1.listFiles().length>0)
                for(File images:file1.listFiles()){
                    if(images.getName().contains(propertyName)){
                        imageList.add(IOUtils.toByteArray(images.toURI()));
                    }
                }
            }
            String path3=DIR_TO_UPLOAD+File.separator+"Uploads"+File.separator+email+File.separator+"RECENT";
            File file2=new File(path3);
            if(file2.isDirectory()){
                if(file2.listFiles()!=null && file2.listFiles().length>0)
                for(File images:file2.listFiles()){
                    if(images.getName().contains(propertyName)){
                        imageList.add(IOUtils.toByteArray(images.toURI()));
                    }
                }
            }
        }
        return imageList;
    }

    public void listAllFiles(String path,List<byte[]> imageList,String propertyName) throws IOException{
        File root = new File(path);
        File[] list = root.listFiles();
        if (list != null) {  // In case of access error, list is null
            for (File f : list) {
                if (f.isDirectory()) {
                    logger.info("File path is {}{}",f.getAbsoluteFile().getAbsolutePath());
                    listAllFiles(f.getAbsolutePath(),imageList,propertyName);
                } else {
                    if(f.getName().contains(propertyName)) {
                        Path paths = Paths.get(f.getAbsoluteFile().toURI());
                        InputStream in =new FileInputStream(paths.toString());
                        //byte[] arr = Files.readAllBytes(paths);
                        byte[] arr = IOUtils.toByteArray(in);
                        imageList.add(arr);
                        logger.info("File path is {}{}",f.getAbsoluteFile().getAbsolutePath());
                    }
                }
            }
        }

    }

}
