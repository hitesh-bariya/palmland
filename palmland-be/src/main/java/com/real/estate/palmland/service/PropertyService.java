package com.real.estate.palmland.service;

import java.util.List;

import org.springframework.data.jpa.domain.Specification;
import org.springframework.web.multipart.MultipartFile;

import com.real.estate.palmland.entity.Image;
import com.real.estate.palmland.entity.Property;
import com.real.estate.palmland.entity.User;
import com.real.estate.palmland.model.PropertyDto;
import com.real.estate.palmland.model.ResponseVO;

public interface PropertyService {

	public PropertyDto createProperty(PropertyDto propertyDto, User user, MultipartFile[] files);

	public List<PropertyDto> getAllProperties();

	public ResponseVO<List<PropertyDto>> findBySearchCriteria(Specification<Property> spec);
	
	public ResponseVO<List<Image>> findImagiesByName(String propertyName);
	
	public ResponseVO<PropertyDto> findProperyById(Integer id);
	
	public ResponseVO<List<PropertyDto>> findAllProperties();
	
	public String deleteProperty(Integer id);
	
	public PropertyDto updateProperty(PropertyDto propertyDto, User user, MultipartFile[] files);
}
