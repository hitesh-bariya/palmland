package com.real.estate.palmland.repository;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.real.estate.palmland.entity.Token;

import jakarta.persistence.EntityGraph;
import jakarta.persistence.EntityManager;

//@Repository
public class TokenRepositoryImpl {
	@Autowired
	private EntityManager entityManager;

	public List<Token> getTokenByToken(String token) {
		EntityGraph<Token> em = (EntityGraph<Token>) entityManager.getEntityGraph("fullTokenEntityGraph");
		List<Token> result = entityManager.createNamedQuery("fullTokenEntityGraph").setParameter("token", token)
				.setHint("javax.persistence.loadgraph", em).getResultList();
		return result;

	}
}
