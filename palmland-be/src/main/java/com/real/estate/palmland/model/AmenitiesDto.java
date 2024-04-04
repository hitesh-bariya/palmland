package com.real.estate.palmland.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class AmenitiesDto {

	private Integer id;

	private Integer rooms;
	/*
	 * //@Enumerated(EnumType.STRING) private String facing;
	 * //@Enumerated(EnumType.STRING) private boolean wifi;
	 */
}
