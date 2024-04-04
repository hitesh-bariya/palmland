package com.real.estate.palmland.controller;

import java.io.IOException;
import java.net.URISyntaxException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.real.estate.palmland.entity.Image;
import com.real.estate.palmland.model.PropertyDto;
import com.real.estate.palmland.repository.UserRepository;
import com.real.estate.palmland.service.PropertyService;
import com.real.estate.palmland.service.StorageService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/v1/property1")
public class PropertyController1 {
    private static final Logger LOGGER = LoggerFactory.getLogger(PropertyController1.class);
    @Autowired
    private PropertyService propertyService;

    @Autowired
    private ObjectMapper objectMapper;

    @Autowired
    private UserRepository repository;

    @Autowired
    private StorageService storageService;

    @PostMapping(value = "/createProperty", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<PropertyDto> createProperty(@RequestParam(value = "jsondata", required = true) @Valid String jsondata,
                                                      @RequestParam(value = "files", required = true) @Valid MultipartFile[] files) throws URISyntaxException, IOException {
        LOGGER.info("Creating the new Property!!!");
        PropertyDto readValue = objectMapper.readValue(jsondata, PropertyDto.class);
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        Object authenticationPrincipal = authentication.getPrincipal();
        String userName = null;
        if (authenticationPrincipal instanceof UserDetails) {
            userName = ((UserDetails) authenticationPrincipal).getUsername();
            LOGGER.info("Logged in user", userName);
        } else {
            userName = authenticationPrincipal.toString();
            LOGGER.info("Logged in user", userName);
        }
        LOGGER.info("Called findByEmail");
        var user = repository.findByEmail(userName);
        var image =new Image();
        List<Image> images=composePathFromRequestData(files, readValue,image,userName);

return null;
    }

    private List<Image> composePathFromRequestData(MultipartFile[] files, PropertyDto readValue, Image image,String userName) {
        List<Image> imageList=new ArrayList<>();
        if(userName !=null && readValue !=null && readValue.getPropertyName()!=null){

        }
        Arrays.asList(files).stream().forEach(file ->{
            String storagePath=userName+"\\"+readValue.getPropertyName()+"\\"+readValue.getPropertyMarquee();
            image.setPath(storagePath);
            image.setName(file.getOriginalFilename());
            image.setType(file.getOriginalFilename().substring(file.getOriginalFilename().lastIndexOf('.')));
            imageList.add(image);
        });
        return imageList;
    }
}
