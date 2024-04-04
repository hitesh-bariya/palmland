package com.real.estate.palmland.entity;
import jakarta.persistence.*;
import lombok.*;

import java.io.Serializable;

@Getter
@Setter
@ToString
@EqualsAndHashCode
@NoArgsConstructor
@Entity
@Table(name = "agent")
public class Agent implements Serializable {

	private static final long serialVersionUID = 1L;
	
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
	
    private String firstName;
    
    private String lastName;
    
    private String email;
    
    private String phoneNo;
    
    private String imageKey;

    public Agent(String firstName, String lastName, String email, String phoneNo,String imageKey) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phoneNo = phoneNo;
        this.imageKey = imageKey;
    }
}
