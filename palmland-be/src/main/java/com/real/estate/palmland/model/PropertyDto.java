package com.real.estate.palmland.model;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@JsonIgnoreProperties(ignoreUnknown = true)
@JsonInclude(JsonInclude.Include.NON_NULL)
public class PropertyDto {

	private Integer id;

	private String carpetArea;

	private String propertyName;

	private String propertyDesc;

	private String price;
	
	private String propertyMarquee;

	private String propertyType;

	private List<ImageDto> imgData;

	private AmenitiesDto amenities;

	private LocationDto location;

}
