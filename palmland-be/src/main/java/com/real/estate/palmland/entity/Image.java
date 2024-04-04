package com.real.estate.palmland.entity;

import java.io.Serializable;

import org.hibernate.annotations.Cascade;
import org.hibernate.annotations.CascadeType;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString(exclude = "property")
@EqualsAndHashCode
@NoArgsConstructor
@Entity
@Table(name = "image")
public class Image implements Serializable {

	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;

	private String name;

	private String type;

	private String path;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "property_id")
	@JsonIgnore
	@Cascade({ CascadeType.ALL, CascadeType.DELETE_ORPHAN })
	public Property property;

	public Image(String name, String type, String path, Property property) {
		this.name = name;
		this.type = type;
		this.path = path;
		this.property = property;
	}

}
