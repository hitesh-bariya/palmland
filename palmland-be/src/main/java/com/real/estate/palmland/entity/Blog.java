package com.real.estate.palmland.entity;

import java.io.Serializable;
import java.util.Date;

import org.springframework.data.annotation.CreatedDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@EqualsAndHashCode
@NoArgsConstructor
@Entity
@Table(name = "blog")
public class Blog implements Serializable {

	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)

	private Integer id;

	private String author;

	private String heading;

	private Integer likeCount = 0;
	
	private String imageKey;

	@Column(columnDefinition = "TEXT")
	private String content;

	@Temporal(TemporalType.TIMESTAMP)
	@Column(name = "postedDate", nullable = false, updatable = false)
	@CreatedDate
	private Date postedDate;

	public Blog(String author, String heading, String content, byte[] imageData, Date postedDate) {
		this.author = author;
		this.heading = heading;
		this.content = content;
		this.postedDate = postedDate;
	}
}
