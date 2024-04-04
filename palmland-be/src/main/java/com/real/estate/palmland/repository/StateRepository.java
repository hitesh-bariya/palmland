package com.real.estate.palmland.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.real.estate.palmland.entity.State;

@Repository
public interface StateRepository extends JpaRepository<State, Long>{
	
	List<State> findByCountryId(Long countryId);
	
	List<State> findByCountryIdAndStateNameContaining(Long countryId, String stateName);

}
