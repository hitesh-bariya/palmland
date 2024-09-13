package com.real.estate.palmland.service;

import java.util.List;

import org.springframework.web.multipart.MultipartFile;

import com.real.estate.palmland.entity.OurService;
import com.real.estate.palmland.model.OurServiceDto;

public interface MasterService {

	OurServiceDto createOurService(MultipartFile files,OurServiceDto ourServiceDto);
	
	List<OurService> getAllOurServices();
}
