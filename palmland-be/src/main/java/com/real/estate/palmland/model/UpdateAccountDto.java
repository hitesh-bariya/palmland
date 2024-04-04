package com.real.estate.palmland.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class UpdateAccountDto {
	
	private Integer userId;
	
	private Boolean isAccountNonExpired;

	private Boolean isAccountNonLocked;

	private Boolean isCredentialsNonExpired;

	private Boolean isEnabled;


}
