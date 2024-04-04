package com.real.estate.palmland.model;

import java.util.Date;

import lombok.Getter;

@Getter
public class ErrorDetails {

	private Date timestamp;

	private String message;

	private String details;

	public ErrorDetails(Date timestamp, String message, String details) {
		this.timestamp = timestamp;
		this.message = message;
		this.details = details;
	}

}
