package com.real.estate.palmland.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.real.estate.palmland.entity.OurService;
import com.real.estate.palmland.model.OurServiceDto;
import com.real.estate.palmland.repository.OurServiceRepository;
import com.real.estate.palmland.service.MasterService;
import com.real.estate.palmland.service.StorageService;


@Service
public class MasterServiceImpl implements MasterService {

	@Autowired
	private OurServiceRepository ourServiceRepository;
	
	@Autowired
	private StorageService storageService;

	@Override
	public OurServiceDto createOurService(MultipartFile files,OurServiceDto ourServiceDto) {
		OurService ourService =new OurService();
		ourService.setServiceName(ourServiceDto.getServiceName());
		ourService.setDescription(ourServiceDto.getDescription());
		ourService = ourServiceRepository.save(ourService);
		storageService.uploadOurService(files, ourService);
		ourServiceDto.setId(ourService.getId());
		return ourServiceDto;
	}

	@Override
	public List<OurService> getAllOurServices() {
		return ourServiceRepository.findAll();
	}

}
