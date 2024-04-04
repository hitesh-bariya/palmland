package com.real.estate.palmland.controller;

import java.io.IOException;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.real.estate.palmland.entity.User;
import com.real.estate.palmland.model.AuthenticationRequest;
import com.real.estate.palmland.model.AuthenticationResponse;
import com.real.estate.palmland.model.PasswordForgotRequest;
import com.real.estate.palmland.model.RegisterRequest;
import com.real.estate.palmland.model.ResponseVO;
import com.real.estate.palmland.service.AuthenticationService;
import com.real.estate.palmland.service.UserService;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/v1/auth")
@RequiredArgsConstructor
public class AuthenticationController {

	private static final Logger logger = LoggerFactory.getLogger(AuthenticationController.class);

	private final AuthenticationService service;

	private final UserService userService;

	@PostMapping("/register")
	public ResponseVO<User> register(@RequestBody RegisterRequest request) {
		logger.info("register end point gets triggered!!");
		return service.register(request);
	}

	@PostMapping("/login")
	public ResponseEntity<AuthenticationResponse> authenticate(@RequestBody AuthenticationRequest request) {
		logger.info("login endpoint gets triggered!!");
		return ResponseEntity.ok(service.authenticate(request));
	}

	@PostMapping("/refresh-token")
	public void refreshToken(HttpServletRequest request, HttpServletResponse response) throws IOException {
		service.refreshToken(request, response);
	}
	
	@GetMapping("/userByEmail/{emailId}")
	public ResponseVO<User> getUserByEmail(@PathVariable(name = "emailId") String emailId) throws IOException {
		return service.getByEmail(emailId);
	}

	@PostMapping("/change-password/{email}")
	public ResponseEntity<?> changePassword(@Validated @RequestBody PasswordForgotRequest password,
			@PathVariable(name = "email") String email) {
		boolean isChanged = userService.changePassword(email, password);
		if (isChanged) {
			return ResponseEntity.ok("Password updated successfully!!");
		} else {
			return ResponseEntity.internalServerError().body("Password mismatched!!");
		}
	}
}
