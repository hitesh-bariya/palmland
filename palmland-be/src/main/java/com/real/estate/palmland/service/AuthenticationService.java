package com.real.estate.palmland.service;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

import org.springframework.http.HttpHeaders;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.real.estate.palmland.entity.Token;
import com.real.estate.palmland.entity.User;
import com.real.estate.palmland.enums.TokenType;
import com.real.estate.palmland.exception.AuthenticationException;
import com.real.estate.palmland.model.AuthenticationRequest;
import com.real.estate.palmland.model.AuthenticationResponse;
import com.real.estate.palmland.model.RegisterRequest;
import com.real.estate.palmland.model.ResponseVO;
import com.real.estate.palmland.model.UpdateAccountDto;
import com.real.estate.palmland.repository.TokenRepository;
import com.real.estate.palmland.repository.UserRepository;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AuthenticationService {
	
    private final UserRepository userRepository;
    
    private final TokenRepository tokenRepository;
    
    private final PasswordEncoder passwordEncoder;
    
    private final JwtService jwtService;
    
    private final AuthenticationManager authenticationManager;

    public ResponseVO<User> register(RegisterRequest request) {
    	Optional<User> existUser=userRepository.findByEmail(request.getEmail());
    	ResponseVO<User> response=new ResponseVO<User>();
    	if(existUser.isPresent()) {
    		response.setStatus(200);
    		response.setMessage("Email id already exist");
    		return response;
    	}
        User user = new User();
        user.setFirstName(request.getFirstName());
        user.setLastName(request.getLastName());
        user.setEmail(request.getEmail());
        user.setPassword(passwordEncoder.encode(request.getPassword()));
        user.setRole(request.getRole());
        user.setPhoneNo(request.getPhoneNo());
        user.setAccountNonExpired(true);
        user.setAccountNonLocked(true);
        user.setCredentialsNonExpired(true);
        user.setEnabled(true);
        User savedUser = userRepository.save(user);
        var jwtToken = jwtService.generateToken(user);
        var refreshToken = jwtService.generateRefreshToken(user);
        saveUserToken(savedUser, jwtToken);
        response.setStatus(200);
        response.setData(savedUser);
        return response;
    }

    public AuthenticationResponse authenticate(AuthenticationRequest request) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        request.getEmail(),
                        request.getPassword()
                )
        );
        var user = userRepository.findByEmail(request.getEmail())
                .orElseThrow(() -> new AuthenticationException("Either email/password not matched","email",request.getEmail()));
        var jwtToken = jwtService.generateToken(user);
        var refreshToken = jwtService.generateRefreshToken(user);
        revokeAllUserTokens(user);
        saveUserToken(user, jwtToken);
        return AuthenticationResponse.builder()
                .accessToken(jwtToken)
                .refreshToken(refreshToken)
                .email(user.getEmail())
                .firstName(user.getFirstName())
                .role(user.getRole())
                .build();
    }

    private void saveUserToken(User user, String jwtToken) {
        var token = new Token();
        token.setUser(user);
        token.setToken(jwtToken);
        token.setTokenType(TokenType.BEARER);
        token.setExpired(Boolean.FALSE);
        token.setRevoked(Boolean.FALSE);
        tokenRepository.save(token);
    }

    private void revokeAllUserTokens(User user) {
        var validUserTokens = tokenRepository.findAllValidTokenByUser(user.getId());
        if (validUserTokens.isEmpty())
            return;
        validUserTokens.forEach(token -> {
            token.setExpired(true);
            token.setRevoked(true);
        });
        tokenRepository.saveAll(validUserTokens);
    }

    public void refreshToken(
            HttpServletRequest request,
            HttpServletResponse response
    ) throws IOException {
        final String authHeader = request.getHeader(HttpHeaders.AUTHORIZATION);
        final String refreshToken;
        final String userEmail;
        if (authHeader == null || !authHeader.startsWith("Bearer ")) {
            return;
        }
        refreshToken = authHeader.substring(7);
        userEmail = jwtService.extractUsername(refreshToken);
        if (userEmail != null) {
            var user = this.userRepository.findByEmail(userEmail)
                    .orElseThrow();
            if (jwtService.isTokenValid(refreshToken, user)) {
                var accessToken = jwtService.generateToken(user);
                revokeAllUserTokens(user);
                saveUserToken(user, accessToken);
                var authResponse = AuthenticationResponse.builder()
                        .accessToken(accessToken)
                        .refreshToken(refreshToken)
                        .build();
                new ObjectMapper().writeValue(response.getOutputStream(), authResponse);
            }
        }
    }
    
    public User updateUserAccount(UpdateAccountDto updateAccountDto) {
    	Optional<User> userData=userRepository.findById(updateAccountDto.getUserId());
    	User user=null;
    	if(userData.isPresent()) {
    		user=userData.get();
    		user.setAccountNonExpired(updateAccountDto.getIsAccountNonExpired());
    		user.setAccountNonLocked(updateAccountDto.getIsAccountNonLocked());
    		user.setCredentialsNonExpired(updateAccountDto.getIsCredentialsNonExpired());
    		user.setEnabled(updateAccountDto.getIsEnabled());
    		return userRepository.save(user);
    	}
       return user;
    }

    
    public List<User> getAllUser() {
    	return userRepository.findAll();
    }
    
    
    public ResponseVO<User> getByEmail(String emailId) {
    	ResponseVO<User> response=new ResponseVO<User>();
    	Optional<User> user=userRepository.findByEmail(emailId);
    	if(user.isPresent()) {
    		response.setStatus(200);
    		response.setData(user.get());
    	}else {
    		response.setStatus(200);
    		response.setData(null);
    		response.setMessage("No user available.");
    	}
    	return response;
    }
}
