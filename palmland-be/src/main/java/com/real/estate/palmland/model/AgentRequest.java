package com.real.estate.palmland.model;

import jakarta.validation.constraints.Email;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class AgentRequest {
	
    private String firstName;
    
    private String lastName;
    
    @Email
    private String email;
    
    private String phoneNo;
}
