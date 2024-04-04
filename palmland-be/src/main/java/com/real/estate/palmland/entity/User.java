package com.real.estate.palmland.entity;

import java.io.Serializable;
import java.util.Collection;
import java.util.List;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.real.estate.palmland.enums.Role;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString(exclude = { "tokens", "properties" })
@EqualsAndHashCode
@NoArgsConstructor
@Entity
@Table(name = "user")
public class User implements UserDetails, Serializable {

	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;

	private String firstName;

	private String lastName;

	private String email;

	private String password;

	private String phoneNo;

	private boolean isAccountNonExpired = true;

	private boolean isAccountNonLocked = true;

	private boolean isCredentialsNonExpired = true;

	private boolean isEnabled = true;

	@Enumerated(EnumType.STRING)
	private Role role;

	@OneToMany(mappedBy = "user", orphanRemoval = true, cascade = CascadeType.ALL)
	@JsonIgnore
	private List<Token> tokens;

	@OneToMany(mappedBy = "user", orphanRemoval = true, cascade = CascadeType.ALL)
	@JsonIgnore
	private List<Property> properties;

	public User(String firstName, String lastName, String email, String password, String phoneNo, Role role,
			List<Token> tokens, List<Property> properties, boolean isAccountNonExpired, boolean isAccountNonLocked,
			boolean isCredentialsNonExpired, boolean isEnabled) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.password = password;
		this.phoneNo = phoneNo;
		this.role = role;
		this.tokens = tokens;
		this.properties = properties;
		this.isAccountNonExpired = isAccountNonExpired;
		this.isAccountNonLocked = isAccountNonLocked;
		this.isCredentialsNonExpired = isCredentialsNonExpired;
		this.isEnabled = isEnabled;
	}

	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		return role.getAuthorities();
	}

	@Override
	public String getPassword() {
		return password;
	}

	@Override
	public String getUsername() {
		return email;
	}

}
