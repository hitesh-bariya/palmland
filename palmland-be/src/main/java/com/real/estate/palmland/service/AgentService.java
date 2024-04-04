package com.real.estate.palmland.service;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import com.real.estate.palmland.entity.Agent;
import com.real.estate.palmland.model.AgentRequest;
import com.real.estate.palmland.model.ResponseVO;
import com.real.estate.palmland.repository.AgentRepository;


@Service
@Transactional
public class AgentService {
	
    private static final Logger LOGGER = LoggerFactory.getLogger(AgentService.class);
    
    @Autowired
    private AgentRepository agentRepository;
    
    @Autowired
    private StorageService storageService;

    public ResponseVO<Agent> saveAgent(AgentRequest agentRequest, MultipartFile file) throws IOException {
    	ResponseVO<Agent> response=new ResponseVO<Agent>();
        if(agentRequest !=null){
            LOGGER.info("Saving agent method triggered!!");
            Optional<Agent> dbAgent=agentRepository.findAgentByEmailId(agentRequest.getEmail());
            if(!dbAgent.isEmpty()){
            	response.setStatus(200);
            	response.setMessage("Agent is already registered with given email id!!");
            	return response;
            }
            Agent agent=prepareDbRequest(agentRequest,file);
            Agent savedDb= agentRepository.save(agent);
            storageService.uploadAgent(file,agent);
            response.setStatus(200);
            response.setData(savedDb);
            response.setMessage("Agent created successfully");
           return response;
        }
        LOGGER.error("Unable to save agent records in DB, returned null!!");
        return null;
    }

    private Agent prepareDbRequest(AgentRequest agentRequest,MultipartFile file) throws IOException {
        Agent agent=new Agent();
        agent.setFirstName(agentRequest.getFirstName());
        agent.setLastName(agentRequest.getLastName());
        agent.setEmail(agentRequest.getEmail());
        agent.setPhoneNo(agentRequest.getPhoneNo());
        return agent;
    }

    public ResponseVO<Agent> updateAgent(AgentRequest agentRequest,String emailId){
    	ResponseVO<Agent> response=new ResponseVO<Agent>();
        Optional<Agent> agent=agentRepository.findAgentByEmailId(emailId);
        if(agent.isEmpty()){
        	response.setStatus(200);
        	response.setMessage("Agent is not available");
        }else{
            Agent existingAgent = updateAgentDataInDb(agent.get(), agentRequest);
            Agent updatedAgent=agentRepository.save(existingAgent);
            response.setStatus(200);
            response.setData(updatedAgent);
        }
        return response;
    }
    private Agent updateAgentDataInDb(Agent agent, AgentRequest agentRequest) {
        agent.setEmail(agentRequest.getEmail());
        agent.setFirstName(agentRequest.getFirstName());
        agent.setLastName(agentRequest.getPhoneNo());
        agent.setPhoneNo(agentRequest.getPhoneNo());
        return agent;
    }
    public List<Agent> getAllAgent(){
        return agentRepository.findAll();
    }
    public Sort.Direction getSortDirection(String direction) {
        if (direction.equals("asc")) {
            return Sort.Direction.ASC;
        } else if (direction.equals("desc")) {
            return Sort.Direction.DESC;
        }
        return Sort.Direction.ASC;
    }


    public void deleteAgent(Integer id){
        agentRepository.deleteById(id);
    }

    public ResponseVO<List<Agent>> findAllAgent(Integer pageNo, Integer pageSize, String sortBy){
    	ResponseVO<List<Agent>> response=new ResponseVO<List<Agent>>();
        Pageable paging= PageRequest.of(pageNo,pageSize,Sort.by(sortBy));
        Page<Agent> agentEntity=agentRepository.findAll(paging);
        response.setStatus(200);
        if(agentEntity.hasContent()) {
        	response.setData(agentEntity.getContent());
        } else {
        	response.setData(new ArrayList<Agent>());
        }
        return response;
    }
    
    public ResponseVO<Agent> getAgentByEmailId(String emailId){
    	ResponseVO<Agent> response=new ResponseVO<Agent>();
        Optional<Agent> agent=agentRepository.findAgentByEmailId(emailId);
        response.setStatus(200);
        if(agent.isEmpty()){
        	response.setMessage("Agent is not available");
        }else{
        	response.setData(agent.get());
        }
        return response;
    }
}
