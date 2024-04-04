package com.real.estate.palmland.model;

import lombok.Data;

@Data
public class PasswordForgotRequest {

	private String newPassword;

	private String reNewPassword;

	private String oldPassword;
}
