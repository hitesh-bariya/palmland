package com.real.estate.palmland.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class CountryRequestDto {

	private Long id;
	
	private String name;
	
	private String iso2;
}
