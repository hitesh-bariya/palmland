package com.real.estate.palmland.service.impl;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.modelmapper.ModelMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import com.real.estate.palmland.entity.Amenities;
import com.real.estate.palmland.entity.Image;
import com.real.estate.palmland.entity.Location;
import com.real.estate.palmland.entity.Property;
import com.real.estate.palmland.entity.User;
import com.real.estate.palmland.helper.PropertyHelper;
import com.real.estate.palmland.model.AmenitiesDto;
import com.real.estate.palmland.model.ImageDto;
import com.real.estate.palmland.model.LocationDto;
import com.real.estate.palmland.model.PropertyDto;
import com.real.estate.palmland.model.ResponseVO;
import com.real.estate.palmland.repository.ImageRepository;
import com.real.estate.palmland.repository.PropertyRepository;
import com.real.estate.palmland.service.PropertyService;

@Service
@Transactional
public class PropertyServiceImpl implements PropertyService {

	private static final Logger LOGGER = LoggerFactory.getLogger(PropertyServiceImpl.class);

	@Autowired
	private PropertyRepository propertyRepository;

	@Autowired
	private ModelMapper modelMapper;

	@Autowired
	private PropertyHelper propertyHelper;

	@Autowired
	private ImageRepository imageRepository;

	@Value("${aws.cloud.credentials.url}")
	private String awsURL;

	@Override
	public PropertyDto createProperty(PropertyDto propertyDto, User user, MultipartFile[] files) {
		Property dbProperty = prepareDbObject(propertyDto, user);
		propertyHelper.processPropertyData(files, user, dbProperty);
		PropertyDto savedPropertyDto = modelMapper.map(dbProperty, PropertyDto.class);
		return savedPropertyDto;
	}

	@Override
	public PropertyDto updateProperty(PropertyDto propertyDto, User user, MultipartFile[] files) {
		Property dbProperty = prepareDbObject(propertyDto, user);
		propertyHelper.processForUpdatePropertyData(files, user, dbProperty);
		PropertyDto savedPropertyDto = modelMapper.map(dbProperty, PropertyDto.class);
		return savedPropertyDto;
	}

	private Property prepareDbObject(PropertyDto propertyDto, User user) {
		LOGGER.info("Preparing the data base object !!!");
		Property property = new Property();
		if (null != propertyDto.getId()) {
			property.setId(propertyDto.getId());
		}
		property.setPropertyDesc(propertyDto.getPropertyDesc());
		property.setPropertyName(propertyDto.getPropertyName());
		property.setPropertyType(propertyDto.getPropertyType());
		property.setPropertyMarquee(propertyDto.getPropertyMarquee());
		property.setPrice(propertyDto.getPrice());
		property.setCarpetArea(propertyDto.getCarpetArea());
		property.setActive(true);
		property.setUser(user);

		Location location = new Location();
		location.setCity(propertyDto.getLocation().getCity());
		location.setCountry(propertyDto.getLocation().getCountry());
		location.setState(propertyDto.getLocation().getState());
		location.setAddressLine1(propertyDto.getLocation().getAddressLine1());
		location.setAddressLine2(propertyDto.getLocation().getAddressLine2());
		location.setLandMark(propertyDto.getLocation().getLandMark());
		location.setPinCode(propertyDto.getLocation().getPinCode());
		location.setProperty(property);
		Amenities amenities = new Amenities(); //
		amenities.setRooms(propertyDto.getAmenities().getRooms());
		amenities.setProperty(property);
		property.setLocation(location);
		property.setAmenities(amenities);
		Property dbProperties = propertyRepository.save(property);
		return dbProperties;
	}

	@Override
	public List<PropertyDto> getAllProperties() {
		LOGGER.info("Getting all properties from db !!!");
		List<Property> properties = propertyRepository.findAll();
		List<PropertyDto> propertyDtoList = new ArrayList<>();
		convertToPropertyDto(properties, propertyDtoList);
		return propertyDtoList;
	}

	private void convertToPropertyDto(List<Property> properties, List<PropertyDto> propertyDtoList) {
		for (Property property : properties) {
			PropertyDto propertyDto = convertPropertyDTO(property);
			propertyDtoList.add(propertyDto);
		}
	}

	private PropertyDto convertPropertyDTO(Property property) {
		PropertyDto propertyDto = new PropertyDto();
		LocationDto locationDto = new LocationDto();
		AmenitiesDto amenitiesDto = new AmenitiesDto();
		propertyDto.setPropertyName(property.getPropertyName());
		propertyDto.setPropertyDesc(property.getPropertyDesc());
		propertyDto.setPropertyType(property.getPropertyType());
		propertyDto.setPropertyMarquee(property.getPropertyMarquee());
		propertyDto.setPrice(property.getPrice());
		propertyDto.setId(property.getId());
		List<ImageDto> imageData = new ArrayList<>();
		List<Image> imageList = imageRepository.findByProperty(property);

		if ((null != imageList) && imageList.size() > 0) {
			for (Image image : imageList) {
				ImageDto img = new ImageDto();
				img.setId(image.getId());
				img.setName(image.getName());
				img.setType(image.getType());
				img.setPath(awsURL + "/" + image.getPath().replaceAll("@", "%40"));
				imageData.add(img);
			}

		}
		if (!imageData.isEmpty()) {
			propertyDto.setImgData(imageData);
		}

		if (property.getLocation() != null) {
			locationDto.setId(property.getLocation().getId());
			locationDto.setAddressLine1(property.getLocation().getAddressLine1());
			locationDto.setAddressLine2(property.getLocation().getAddressLine2());
			locationDto.setCity(property.getLocation().getCity());
			locationDto.setState(property.getLocation().getState());
			locationDto.setCountry(property.getLocation().getCountry());
			locationDto.setPinCode(property.getLocation().getPinCode());
			locationDto.setLandMark(property.getLocation().getLandMark());
			propertyDto.setLocation(locationDto);
		}
		if (property.getAmenities() != null) {
			amenitiesDto.setId(property.getAmenities().getId());
			amenitiesDto.setRooms(property.getAmenities().getRooms());
			propertyDto.setAmenities(amenitiesDto);
		}
		return propertyDto;
	}

	@Override
	public ResponseVO<List<PropertyDto>> findBySearchCriteria(Specification<Property> spec) {
		ResponseVO<List<PropertyDto>> response = new ResponseVO<List<PropertyDto>>();
		List<Property> searchResult = propertyRepository.findAll(spec);
		if (!searchResult.isEmpty()) {
			List<PropertyDto> propertyDtoList = new ArrayList<>();
			convertToPropertyDto(searchResult, propertyDtoList);
			response.setStatus(200);
			response.setData(propertyDtoList);
		}
		return response;
	}

	@Override
	public ResponseVO<List<Image>> findImagiesByName(String propertyName) {
		ResponseVO<List<Image>> response = new ResponseVO<List<Image>>();
		response.setStatus(200);
		response.setData(imageRepository.findByName(propertyName));
		return response;
	}

	@Override
	public ResponseVO<List<PropertyDto>> findAllProperties() {
		ResponseVO<List<PropertyDto>> response = new ResponseVO<List<PropertyDto>>();
		response.setStatus(200);
		response.setData(getAllProperties());
		return response;
	}

	@Override
	public String deleteProperty(Integer id) {
		Property dbProperty = propertyRepository.getPropertyById(id);
		dbProperty.setActive(false);
		return "Property deleted successfully for id :: " + id;
	}

	@Override
	public ResponseVO<PropertyDto> findProperyById(Integer id) {
		ResponseVO<PropertyDto> response = new ResponseVO<PropertyDto>();
		Optional<Property> propertyData = propertyRepository.findById(id);
		if (propertyData.isPresent()) {
			Property property = propertyData.get();
			PropertyDto propertyDto = convertPropertyDTO(property);
			response.setData(propertyDto);
		}
		return response;
	}

}
