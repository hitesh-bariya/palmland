package com.real.estate.palmland.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.real.estate.palmland.entity.Blog;

@Repository
public interface BlogRepository extends JpaRepository<Blog,Integer> {
}
