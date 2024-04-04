package com.real.estate.palmland.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class LocationDto {

	private Integer id;

	private String addressLine1;

	private String addressLine2;

	private Integer pinCode;

	private String landMark;

	private String city;

	private String state;

	private String country;
}
