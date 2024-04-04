package com.real.estate.palmland.controller;

import java.io.IOException;
import java.net.URISyntaxException;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.real.estate.palmland.entity.Agent;
import com.real.estate.palmland.model.AgentRequest;
import com.real.estate.palmland.model.ResponseVO;
import com.real.estate.palmland.service.AgentService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/v1/agent")
@Tag(name = "Agent")
public class AgentController {

	private static final Logger LOGGER = LoggerFactory.getLogger(AgentController.class);

	@Autowired
	private AgentService agentService;

	@Autowired
	private ObjectMapper objectMapper;

	@Operation(description = "Get endpoint for Agents", summary = "This is a summary for agents get endpoint", responses = {
			@ApiResponse(description = "Success", responseCode = "200"),
			@ApiResponse(description = "Unauthorized / Invalid Token", responseCode = "403") }

	)
	@GetMapping("/{emailId}")
	public ResponseVO<Agent> getAgentByEmailId(@PathVariable(name = "emailId") String emailId) {
		return agentService.getAgentByEmailId(emailId);
	}

	@PostMapping(value = "/create", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
	public ResponseVO<Agent> createAgent(@RequestParam(value = "json", required = true) @Valid String json,
			@RequestParam(value = "pic", required = false) @Valid MultipartFile file)
			throws URISyntaxException, IOException {
		AgentRequest agentRequest = objectMapper.readValue(json, AgentRequest.class);
		return agentService.saveAgent(agentRequest, file);
	}

	@PutMapping("/update/{emailId}")
	public ResponseVO<Agent> updateAgentDetails(@PathVariable("emailId") String emailId,
			@RequestBody @Valid AgentRequest agentRequest) {
		return agentService.updateAgent(agentRequest, emailId);
	}

	@GetMapping("/all")
	public ResponseVO<List<Agent>> getAllAgents(@RequestParam(defaultValue = "0") Integer pageNo,
			@RequestParam(defaultValue = "10") Integer pageSize, @RequestParam(defaultValue = "id") String sortBy) {
		return agentService.findAllAgent(pageNo, pageSize, sortBy);
	}

	@DeleteMapping("/{id}")
	public ResponseVO<String> deleteAgent(@PathVariable(name = "id") Integer id) {
		ResponseVO<String> response = new ResponseVO<String>();
		agentService.deleteAgent(id);
		response.setStatus(200);
		return response;
	}

}
