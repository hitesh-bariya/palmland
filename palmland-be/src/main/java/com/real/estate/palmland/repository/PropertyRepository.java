package com.real.estate.palmland.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

import com.real.estate.palmland.entity.Property;

public interface PropertyRepository extends JpaRepository<Property, Integer>, JpaSpecificationExecutor<Property> {

    public Property getPropertyById(Property id);
    
    public Property getPropertyById(Integer id);
}
