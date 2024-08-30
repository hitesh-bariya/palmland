package com.real.estate.palmland.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.real.estate.palmland.entity.OurService;
import com.real.estate.palmland.model.OurServiceDto;
import com.real.estate.palmland.repository.OurServiceRepository;
import com.real.estate.palmland.service.MasterService;


@Service
public class MasterServiceImpl implements MasterService {

	@Autowired
	private OurServiceRepository ourServiceRepository;

	@Override
	public OurServiceDto createOurService(OurServiceDto ourServiceDto) {
		OurService ourService =new OurService();
		ourService.setServiceName(ourServiceDto.getServiceName());
		ourService.setDescription(ourServiceDto.getDescription());
		ourService = ourServiceRepository.save(ourService);
		ourServiceDto.setId(ourService.getId());
		return ourServiceDto;
	}

	@Override
	public List<OurService> getAllOurServices() {
		return ourServiceRepository.findAll();
	}

}
