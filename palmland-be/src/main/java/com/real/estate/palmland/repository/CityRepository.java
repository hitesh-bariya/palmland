package com.real.estate.palmland.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.real.estate.palmland.entity.City;

@Repository
public interface CityRepository extends JpaRepository<City, Long> {

}
