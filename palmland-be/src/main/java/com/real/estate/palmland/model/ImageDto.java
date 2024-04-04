package com.real.estate.palmland.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ImageDto {

	private Integer id;

	private String name;

	private String type;

	private String path;
}
