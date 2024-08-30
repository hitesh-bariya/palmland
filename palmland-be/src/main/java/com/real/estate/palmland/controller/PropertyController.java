package com.real.estate.palmland.controller;

import java.io.IOException;
import java.net.URISyntaxException;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.real.estate.palmland.Search.PropSpecificationBuilder;
import com.real.estate.palmland.Search.PropertySearchDto;
import com.real.estate.palmland.Search.SearchCriteria;
import com.real.estate.palmland.Search.SearchResponse;
import com.real.estate.palmland.entity.Image;
import com.real.estate.palmland.entity.Property;
import com.real.estate.palmland.model.PropertyDto;
import com.real.estate.palmland.model.ResponseVO;
import com.real.estate.palmland.repository.UserRepository;
import com.real.estate.palmland.service.PropertyService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/v1/property")
@CrossOrigin("*")
public class PropertyController {
    private static final Logger LOGGER = LoggerFactory.getLogger(PropertyController.class);
    
    @Autowired
    private PropertyService propertyService;

    @Autowired
    private ObjectMapper objectMapper;

    @Autowired
    private UserRepository repository;

    @PostMapping(value = "/create", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseVO<PropertyDto> createProperty(@RequestParam(value = "jsondata", required = true) @Valid String jsondata,
                                                      @RequestParam(value = "files", required = true) @Valid MultipartFile[] files) throws URISyntaxException, IOException {
    	ResponseVO<PropertyDto> response=new ResponseVO<PropertyDto>();
    	LOGGER.info("Creating the new Property!!!");
        PropertyDto propertyDto = objectMapper.readValue(jsondata, PropertyDto.class);
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
        LOGGER.info("Processing and Mapping the PropertyDto to Property event!!!");
        
        PropertyDto propertyData = propertyService.createProperty(propertyDto, user.get(),files);
        response.setStatus(200);
        response.setData(propertyData);
        response.setMessage("Created the property successfully!!!");
        LOGGER.info("Created the property successfully!!!");
        return response;
    }
    
    @PutMapping(value = "/update", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseVO<PropertyDto> updateProperty(@RequestParam(value = "jsondata", required = true) @Valid String jsondata,
                                                      @RequestParam(value = "files", required = true) @Valid MultipartFile[] files) throws URISyntaxException, IOException {
    	ResponseVO<PropertyDto> response=new ResponseVO<PropertyDto>();
    	LOGGER.info("update Property!!!");
        PropertyDto propertyDto = objectMapper.readValue(jsondata, PropertyDto.class);
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
        LOGGER.info("Processing and Mapping the PropertyDto to Property event!!!");
        PropertyDto propertyData = propertyService.updateProperty(propertyDto, user.get(),files);
        LOGGER.info("updated the property successfully!!!");
        response.setMessage("updated the property successfully!!!");
        response.setStatus(200);
        response.setData(propertyData);
        return response;
    }


    @GetMapping(value = "/all")
    public ResponseVO<List<PropertyDto>> getAllProperty() {
        return propertyService.findAllProperties();
    }

    @GetMapping(value = "/images")
    public ResponseVO<List<Image>> getImagesBasedOnPropertyName(String propertyName){
    	ResponseVO<List<Image>> imageList=new ResponseVO<List<Image>>();
        try{
            LOGGER.info("reading images/videos from uploads folder!!");
            imageList = propertyService.findImagiesByName(propertyName);
        }catch(Exception ex){
            LOGGER.error("Images/Video not found for the property");
        }
        return imageList;
    }
    @PostMapping("/search")
    public ResponseVO<List<PropertyDto>> searchProperty(@RequestParam(name = "pageNum", defaultValue = "0") int pageNum,
                                                          @RequestParam(name = "pageSize", defaultValue = "10") int pageSize,
                                                          @RequestParam(defaultValue = "id") String sortBy,
                                                          @RequestBody PropertySearchDto propertySearchDto){
        PropSpecificationBuilder builder = new PropSpecificationBuilder();
        List<SearchCriteria> criteriaList = propertySearchDto.getSearchCriteriaList();
        if(criteriaList != null){
            criteriaList.forEach(x-> {x.setDataOption(propertySearchDto.getDataOption());
                builder.with(x);
            });

        }
        Pageable page = PageRequest.of(pageNum, pageSize, Sort.by("propertyName")
                .ascending().and(Sort.by("propertyType"))
                .ascending().and(Sort.by("location")).ascending());


        return propertyService.findBySearchCriteria(builder.build(), page);
    }
    
    @DeleteMapping(value = "/delete")
    public ResponseEntity<String> deleteProperty(Integer id){
    	String response="";
        try{
            response = propertyService.deleteProperty(id);
            LOGGER.info("Successfully deleted property record");
        }catch(Exception ex){
            LOGGER.error("Error in deleteProperty");
        }
        return new ResponseEntity<>(response, HttpStatus.OK);
    }
    
}
