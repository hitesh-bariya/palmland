package com.real.estate.palmland.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.real.estate.palmland.entity.User;

public interface UserRepository extends JpaRepository<User, Integer> {

  Optional<User> findByEmail(String email);

}
