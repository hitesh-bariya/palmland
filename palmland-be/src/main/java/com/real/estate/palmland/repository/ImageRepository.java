package com.real.estate.palmland.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.real.estate.palmland.entity.Image;
import com.real.estate.palmland.entity.Property;

import jakarta.transaction.Transactional;

@Repository
public interface ImageRepository extends JpaRepository<Image, Integer> {

	List<Image> findByProperty(Property property);

	List<Image> findByName(String propertyName);
	
	@Transactional
	@Modifying
	@Query("DELETE FROM Image WHERE property=:property")
	Integer deleteByPropertyId(Property property);
}
