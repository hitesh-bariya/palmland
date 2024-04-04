package com.real.estate.palmland.model;

import com.real.estate.palmland.enums.Role;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class RegisterRequest {

	private String firstName;

	private String lastName;

	private String email;

	private String password;

	private String phoneNo;

	private Role role;

}
