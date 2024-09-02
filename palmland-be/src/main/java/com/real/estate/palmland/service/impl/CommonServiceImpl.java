package com.real.estate.palmland.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.real.estate.palmland.entity.City;
import com.real.estate.palmland.entity.Country;
import com.real.estate.palmland.entity.State;
import com.real.estate.palmland.model.CityRequestDto;
import com.real.estate.palmland.model.CountryRequestDto;
import com.real.estate.palmland.model.ResponseVO;
import com.real.estate.palmland.model.StateRequestDto;
import com.real.estate.palmland.repository.CityRepository;
import com.real.estate.palmland.repository.CountryRepository;
import com.real.estate.palmland.repository.StateRepository;
import com.real.estate.palmland.service.CommonService;

@Service
public class CommonServiceImpl implements CommonService {

	@Autowired
	CountryRepository countryRepository;

	@Autowired
	StateRepository stateRepository;

	@Autowired
	CityRepository cityRepository;

	@Autowired
	private ObjectMapper objectMapper;

	@Override
	public ResponseVO<List<Country>> findAllCountry() {
		ResponseVO<List<Country>> reponse = new ResponseVO<List<Country>>();
		reponse.setStatus(200);
		reponse.setData(countryRepository.findAll());
		return reponse;
	}

	@Override
	public ResponseVO<List<Country>> findCountryByName(String countryName) {
		ResponseVO<List<Country>> reponse = new ResponseVO<List<Country>>();
		List<Country> countryList = countryRepository.findByCountryNameContaining(countryName);
		if (!countryList.isEmpty()) {
			reponse.setStatus(200);
			reponse.setData(countryList);
		} else {
			reponse.setStatus(200);
			reponse.setMessage("Country is not available");
		}
		return reponse;
	}

	@Override
	public ResponseVO<List<State>> findAllStateByCountryId(Long countryId) {
		ResponseVO<List<State>> reponse = new ResponseVO<List<State>>();

		List<State> stateList = stateRepository.findByCountryId(countryId);
		if (!stateList.isEmpty()) {
			reponse.setStatus(200);
			reponse.setData(stateList);
		} else {
			reponse.setStatus(200);
			reponse.setMessage("State not available");
		}

		return reponse;
	}

	@Override
	public ResponseVO<List<State>> findStateByCountryIdAndStateName(Long countryId, String stateName) {
		ResponseVO<List<State>> reponse = new ResponseVO<List<State>>();
		List<State> stateList = stateRepository.findByCountryIdAndStateNameContaining(countryId, stateName);
		if (!stateList.isEmpty()) {
			reponse.setStatus(200);
			reponse.setData(stateList);
		} else {
			reponse.setStatus(200);
			reponse.setMessage("State not available");
		}
		return reponse;
	}

	@Override
	public ResponseVO<List<City>> findAllCityByStateId(Long stateId) {
		ResponseVO<List<City>> reponse = new ResponseVO<List<City>>();
		List<City> cityList = cityRepository.findByStateId(stateId);
		if (!cityList.isEmpty()) {
			reponse.setStatus(200);
			reponse.setData(cityList);
		} else {
			reponse.setStatus(200);
			reponse.setMessage("city not available");
		}
		return reponse;
	}

	@Override
	public ResponseVO<List<City>> findCityByStateIdAndCityName(Long stateId, String cityName) {
		ResponseVO<List<City>> reponse = new ResponseVO<List<City>>();
		List<City> cityList = cityRepository.findByStateIdAndCityNameContaining(stateId, cityName);
		if (!cityList.isEmpty()) {
			reponse.setStatus(200);
			reponse.setData(cityList);
		} else {
			reponse.setStatus(200);
			reponse.setMessage("city not available");
		}
		return reponse;
	}

	@Override
	public ResponseVO<String> syncCountry(MultipartFile file) {
		ResponseVO<String> response=new ResponseVO<String>();
		try {
			List<Country> countryList=countryRepository.findAll();
			if(countryList.isEmpty()) {
				List<CountryRequestDto> requestData=objectMapper.readValue(file.getBytes(),new TypeReference<List<CountryRequestDto>>() {});
				for(CountryRequestDto countryRequestDto:requestData) {
					Country country=new Country();
					country.setId(countryRequestDto.getId());
					country.setCountryName(countryRequestDto.getName());
					country.setCountryCode(countryRequestDto.getIso2());
					countryList.add(country);
				}
				List<Country> savedList=countryRepository.saveAll(countryList);
				response.setStatus(200);
				response.setMessage("Country Saved Successfully.......");
				response.setData("Total Country :: "+savedList.size());
			}else {
				response.setStatus(200);
				response.setMessage("Country already sync (If you want sync again then remove all country........)");
			}
		} catch (Exception e) {
			response.setStatus(500);
			response.setMessage(e.getMessage());
		}
		return response;
	}

	@Override
	public ResponseVO<String> syncState(MultipartFile file) {
		ResponseVO<String> response=new ResponseVO<String>();
		try {
			List<State> stateList=stateRepository.findAll();
			if(stateList.isEmpty()) {
				List<StateRequestDto> requestData=objectMapper.readValue(file.getBytes(),new TypeReference<List<StateRequestDto>>() {});
				for(StateRequestDto stateRequestDto:requestData) {
					Country country=new Country();
					country.setId(stateRequestDto.getCountry_id());
					State state=new State();
					state.setCountry(country);
					state.setId(stateRequestDto.getId());
					state.setStateName(stateRequestDto.getName());
					stateList.add(state);
				}
				List<State> savedList=stateRepository.saveAll(stateList);
				response.setStatus(200);
				response.setMessage("State Saved Successfully.......");
				response.setData("Total State :: "+savedList.size());
			}else {
				response.setStatus(200);
				response.setMessage("State already sync (If you want sync again then remove all state........)");
			}
		} catch (Exception e) {
			response.setStatus(500);
			response.setMessage(e.getMessage());
		}
		return response;
	}

	@Override
	public ResponseVO<String> syncCity(MultipartFile file) {
		ResponseVO<String> response=new ResponseVO<String>();
		try {
			List<City> cityList=cityRepository.findAll();
			if(cityList.isEmpty()) {
				List<CityRequestDto> requestData=objectMapper.readValue(file.getBytes(),new TypeReference<List<CityRequestDto>>() {});
				for(CityRequestDto cityRequestDto:requestData) {
					State state=new State();
					state.setId(cityRequestDto.getState_id());
					City city=new City();
					city.setId(cityRequestDto.getId());
					//city.setState(state);
					city.setCityName(cityRequestDto.getName());
					cityList.add(city);
				}
				List<City> savedList=cityRepository.saveAll(cityList);
				response.setStatus(200);
				response.setMessage("City Saved Successfully.......");
				response.setData("Total State :: "+savedList.size());
			}else {
				response.setStatus(200);
				response.setMessage("city already sync (If you want sync again then remove all city........)");
			}
		} catch (Exception e) {
			response.setStatus(500);
			response.setMessage(e.getMessage());
		}
		return response;
	}

	@Override
	public ResponseVO<String> deleteCountryStateCityData() {
		ResponseVO<String> response=new ResponseVO<String>();
		cityRepository.deleteAll();
		stateRepository.deleteAll();
		countryRepository.deleteAll();
		response.setStatus(200);
		response.setMessage("All data deleted successfully......");
		return response;
	}

}
