package com.real.estate.palmland.service;


import com.real.estate.palmland.entity.User;
import com.real.estate.palmland.enums.Role;
import com.real.estate.palmland.exception.ResourceNotFoundException;
import com.real.estate.palmland.model.PasswordForgotRequest;
import com.real.estate.palmland.repository.UserRepository;
import jakarta.annotation.PostConstruct;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class UserService {
    private static final Logger logger = LoggerFactory.getLogger(UserService.class);

    @Autowired
    private UserRepository repo;
    @Autowired
    private PasswordEncoder passwordEncoder;

    public User getUserById(Integer userId) {
        Optional<User> optionalUser = repo.findById(userId);
        return optionalUser.get();
    }


    public List<User> getAllUsers() {
        return repo.findAll();
    }

    public User updateUser(User user) {
        User existingUser = repo.findById(user.getId()).get();
        existingUser.setFirstName(user.getFirstName());
        existingUser.setLastName(user.getLastName());
        existingUser.setEmail(user.getEmail());
        existingUser.setPhoneNo(user.getPhoneNo());
        User updatedUser = repo.save(existingUser);
        return updatedUser;
    }

    public void deleteUser(Integer userId) {
        repo.deleteById(userId);
    }

    public Optional findUserByEmail(String email) {
        return repo.findByEmail(email);
    }

    public Sort.Direction getSortDirection(String direction) {
        if (direction.equals("asc")) {
            return Sort.Direction.ASC;
        } else if (direction.equals("desc")) {
            return Sort.Direction.DESC;
        }

        return Sort.Direction.ASC;
    }

    public boolean changePassword(String email, PasswordForgotRequest password) {
        final User dbUser = repo.findByEmail(email).orElseThrow(() -> new ResourceNotFoundException("User", "email", email));;
        if (dbUser != null) {
            if (passwordEncoder.matches(password.getOldPassword(), dbUser.getPassword())) {
                dbUser.setPassword(passwordEncoder.encode(password.getNewPassword()));
                repo.save(dbUser);
                return true;
            }
        }
        return false;
    }

    public User changPassword(User user, String password) {

        user.setPassword(password);
        repo.save(user);
        return user;
    }

    @PostConstruct
    public void createAdminUser(){
        logger.info("Creating admin user!!");
        var user = repo.findAll();
        if(user.size()==0 || user==null){
            var newUser=new User();
            newUser.setFirstName("Admin");
            newUser.setLastName("Admin");
            newUser.setRole(Role.ADMIN);
            newUser.setEmail("admin@palmland.com");
            newUser.setPassword(passwordEncoder.encode("Admin@123"));
            newUser.setPhoneNo("1111111111");
            logger.info("saved admin user successfully!!!");
            repo.save(newUser);
        }
    }
}
