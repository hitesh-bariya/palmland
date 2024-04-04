package com.real.estate.palmland.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.real.estate.palmland.entity.Agent;

public interface AgentRepository extends JpaRepository<Agent,Integer> {
    @Query("SELECT a FROM Agent a WHERE a.email = ?1")
    public Optional<Agent> findAgentByEmailId(String email);

    Page<Agent> findById(Integer id, Pageable pageable);

    Page<Agent> findAll(Pageable pageable);
    List<Agent> findAll(Sort sort);

    Page<Agent> findByFirstName(String firstName, Pageable pageable);

    Page<Agent> findByLastName(String lastName, Pageable pageable);

    @Query(value="select * from Agent a where a.firstName like %:keyword% or a.lastName like %:keyword%", nativeQuery=true)
    Page<Agent> findUsersByKeyword(@Param("keyword") String keyword, Pageable pageable);

    Page<Agent> findAll(Specification<Agent> agentTerm, Pageable pageable);

    List<Agent> findByEmail(String email, Sort sort);



}
