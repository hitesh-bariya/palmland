package com.real.estate.palmland.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.real.estate.palmland.entity.City;
import com.real.estate.palmland.entity.Country;
import com.real.estate.palmland.entity.State;
import com.real.estate.palmland.model.ResponseVO;
import com.real.estate.palmland.service.CommonService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/v1/common")
@CrossOrigin("*")
public class CommonController {

	@Autowired
	private CommonService commonService;
	
	@PostMapping(value = "/syncCountry", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
	public ResponseVO<String> syncCountry(@RequestParam(value = "file", required = true) @Valid MultipartFile file) {
		return commonService.syncCountry(file);
	}
	
	@DeleteMapping(value = "deleteCountryStateCityData")
	public ResponseVO<String> deleteCountryStateCityData() {
		return commonService.deleteCountryStateCityData();
	}
	
	@PostMapping(value = "/syncState", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
	public ResponseVO<String> syncState(@RequestParam(value = "file", required = true) @Valid MultipartFile file) {
		return commonService.syncState(file);
	}
	
	@PostMapping(value = "/syncCity", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
	public ResponseVO<String> syncCity(@RequestParam(value = "file", required = true) @Valid MultipartFile file) {
		return commonService.syncCity(file);
	}
	
	
	@GetMapping(value = "/country")
	public ResponseVO<List<Country>> getAllCountry() {
		return commonService.findAllCountry();
	}
	
	
	@GetMapping(value = "/country/{countryName}")
	public ResponseVO<List<Country>> findStateByCountryIdAndStateName(@PathVariable("countryName") String countryName) {
		return commonService.findCountryByName(countryName);
	}
	
	
	@GetMapping(value = "/state/{countryId}")
	public ResponseVO<List<State>> findAllStateByCountryId(@PathVariable("countryId") Long countryId) {
		return commonService.findAllStateByCountryId(countryId);
	}
	
	@GetMapping(value = "/state/{countryId}/{stateName}")
	public ResponseVO<List<State>> findStateByCountryIdAndStateName(@PathVariable("countryId") Long countryId,@PathVariable("stateName") String stateName) {
		return commonService.findStateByCountryIdAndStateName(countryId, stateName);
	}
	
	@GetMapping(value = "/city/{stateId}")
	public ResponseVO<List<City>> findAllCityByStateId(@PathVariable("stateId") Long stateId) {
		return commonService.findAllCityByStateId(stateId);
	}
	
	@GetMapping(value = "/city/{stateId}/{cityName}")
	public ResponseVO<List<City>> findCityByStateIdAndCityName(@PathVariable("stateId") Long stateId,@PathVariable("cityName") String cityName) {
		return commonService.findCityByStateIdAndCityName(stateId, cityName);
	}
	

}
