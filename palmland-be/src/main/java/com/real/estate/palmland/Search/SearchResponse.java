package com.real.estate.palmland.Search;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.http.HttpStatus;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class SearchResponse {
	
	private Object data;
	
	private String message;
	
	private HttpStatus responseCode;
}
