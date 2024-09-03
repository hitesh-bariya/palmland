package com.real.estate.palmland.entity;

import java.io.Serializable;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString(exclude = { "user", "location", "amenities", "images" })
@EqualsAndHashCode
@NoArgsConstructor
@Entity
@Table(name = "property")

public class Property implements Serializable {

	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;

	private String carpetArea;

	private String price;

	private String propertyDesc;

	private String propertyMarquee;

	private String propertyName;

	private String propertyType;

	private boolean active = false;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "user_id")
	@JsonIgnore
	public User user;

	@OneToOne(cascade = CascadeType.ALL, fetch = FetchType.LAZY, mappedBy = "property")
	private Location location;

	@OneToOne(cascade = CascadeType.ALL, fetch = FetchType.LAZY, mappedBy = "property")
	private Amenities amenities;

	public Property(String carpetArea, String propertyName, String propertyDesc, String price, String propertyMarquee,
			String propertyType, User user, Location location, Amenities amenities, List<Image> images) {
		this.carpetArea = carpetArea;
		this.propertyName = propertyName;
		this.propertyDesc = propertyDesc;
		this.price = price;
		this.propertyMarquee = propertyMarquee;
		this.propertyType = propertyType;
		this.user = user;
		this.location = location;
		this.amenities = amenities;
	}
}
