package com.real.estate.palmland.service;

import java.util.List;

import org.springframework.web.multipart.MultipartFile;

import com.real.estate.palmland.entity.City;
import com.real.estate.palmland.entity.Country;
import com.real.estate.palmland.entity.State;
import com.real.estate.palmland.model.ResponseVO;


public interface CommonService {
	
	ResponseVO<List<Country>> findAllCountry();

	ResponseVO<List<Country>> findCountryByName(String countryName);
	
	ResponseVO<List<State>> findAllStateByCountryId(Long countryId);
	
	ResponseVO<List<State>> findStateByCountryIdAndStateName(Long countryId, String stateName);
	
	ResponseVO<List<City>> findAllCityByStateId(Long stateId);
	
	ResponseVO<List<City>> findCityByStateIdAndCityName(Long stateId,String cityName);
	
	ResponseVO<String> syncCountry(MultipartFile file);
	
	ResponseVO<String> syncState(MultipartFile file);
	
	ResponseVO<String> syncCity(MultipartFile file);
	
	ResponseVO<String> deleteCountryStateCityData();
}
