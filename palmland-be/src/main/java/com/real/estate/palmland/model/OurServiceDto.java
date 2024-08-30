package com.real.estate.palmland.model;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@EqualsAndHashCode
@NoArgsConstructor
public class OurServiceDto {

	private Long id;

	private String serviceName;
	
	private String description;

	private String serviceUrl;
	
}
