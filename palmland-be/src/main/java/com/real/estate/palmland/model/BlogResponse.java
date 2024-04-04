package com.real.estate.palmland.model;

import java.util.Date;

import jakarta.persistence.Column;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class BlogResponse {

	private Integer id;

	private String author;

	private String heading;

	private String content;

	private Date postedDate;
	
	private String imageKey;
}
