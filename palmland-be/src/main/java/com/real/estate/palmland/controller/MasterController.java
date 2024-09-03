package com.real.estate.palmland.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.real.estate.palmland.entity.OurService;
import com.real.estate.palmland.model.OurServiceDto;
import com.real.estate.palmland.service.MasterService;

import io.swagger.v3.oas.annotations.tags.Tag;

@RestController
@RequestMapping("/api/v1/master")
@Tag(name = "Master")
public class MasterController {

	@Autowired
	private MasterService masterService;

	@PostMapping("/create-our-service")
	public OurServiceDto createOurService(@RequestBody OurServiceDto ourServiceDto) {
		return masterService.createOurService(ourServiceDto);
	}

	@GetMapping("/get-all-our-services")
	public ResponseEntity<List<OurService>> getAllOurServices() {
		List<OurService> ourServices = masterService.getAllOurServices();
		return new ResponseEntity<>(ourServices, HttpStatus.OK);
	}
}
