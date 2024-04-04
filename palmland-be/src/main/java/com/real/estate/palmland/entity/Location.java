package com.real.estate.palmland.entity;

import java.io.Serializable;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data
@ToString
@EqualsAndHashCode
@NoArgsConstructor
@Table(name = "location")
@Entity
public class Location implements Serializable {

	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;

	private String addressLine1;

	private String addressLine2;

	private Integer pinCode;

	private String landMark;

	private String city;

	private String state;

	private String country;

	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "property_id", referencedColumnName = "id")
	@JsonIgnore
	private Property property;

	public Location(String addressLine1, String addressLine2, Integer pinCode, String landMark, String city,
			String state, String country, Property property) {
		this.addressLine1 = addressLine1;
		this.addressLine2 = addressLine2;
		this.pinCode = pinCode;
		this.landMark = landMark;
		this.city = city;
		this.state = state;
		this.country = country;
		this.property = property;
	}
}
