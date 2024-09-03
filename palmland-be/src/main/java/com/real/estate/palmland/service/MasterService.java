package com.real.estate.palmland.service;

import java.util.List;

import com.real.estate.palmland.entity.OurService;
import com.real.estate.palmland.model.OurServiceDto;

public interface MasterService {

	OurServiceDto createOurService(OurServiceDto ourServiceDto);
	
	List<OurService> getAllOurServices();
}
