package com.real.estate.palmland.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.real.estate.palmland.entity.Subscribe;

public interface SubscribeRepository extends JpaRepository<Subscribe, Integer> {

    Optional<Subscribe> findByEmail(String email);
}


