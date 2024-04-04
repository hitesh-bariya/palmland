package com.real.estate.palmland.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.real.estate.palmland.enums.Role;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class AuthenticationResponse {

	@JsonProperty("access_token")
	private String accessToken;

	@JsonProperty("refresh_token")
	private String refreshToken;

	private String firstName;

	private String email;

	private Role role;

}
