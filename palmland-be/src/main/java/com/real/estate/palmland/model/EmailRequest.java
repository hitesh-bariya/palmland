package com.real.estate.palmland.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class EmailRequest {

	private String to;

	private String subject;

	private String body;

	private byte[] attachment;
}
