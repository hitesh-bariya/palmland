package com.real.estate.palmland.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.real.estate.palmland.entity.User;
import com.real.estate.palmland.model.UpdateAccountDto;
import com.real.estate.palmland.service.AuthenticationService;

import io.swagger.v3.oas.annotations.Hidden;

@RestController
@RequestMapping("/api/v1/admin")
//@PreAuthorize("hasRole('ADMIN')")
public class AdminController {
	
	@Autowired
	private AuthenticationService authenticationService;
	
    @GetMapping
    @PreAuthorize("hasAuthority('admin:read')")
    public String get() {
        return "GET:: admin controller";
    }
    
    @PostMapping
    @PreAuthorize("hasAuthority('admin:create')")
    @Hidden
    public String post() {
        return "POST:: admin controller";
    }
    @PutMapping
    @PreAuthorize("hasAuthority('admin:update')")
    @Hidden
    public String put() {
        return "PUT:: admin controller";
    }
    
    @DeleteMapping
    @PreAuthorize("hasAuthority('admin:delete')")
    @Hidden
    public String delete() {
        return "DELETE:: admin controller";
    }
    
    @PutMapping("/update-account")
    public ResponseEntity<User> updateProperty(@RequestBody UpdateAccountDto updateAccountDto) {
    	 return new ResponseEntity<>(authenticationService.updateUserAccount(updateAccountDto), HttpStatus.CREATED);
    }
    
    @GetMapping("/get-user")
    public ResponseEntity<List<User>> getUser() {
    	 return new ResponseEntity<>(authenticationService.getAllUser(), HttpStatus.CREATED);
    }
    
}
