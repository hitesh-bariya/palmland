package com.real.estate.palmland.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.real.estate.palmland.enums.TokenType;
import jakarta.persistence.*;
import lombok.*;

import java.io.Serializable;

@Getter
@Setter
@ToString(exclude = "user")
@EqualsAndHashCode
@NoArgsConstructor
@Entity
/*
 * @NamedEntityGraphs({
 * 
 * @NamedEntityGraph( name = "tokenEntityGraph", attributeNodes = {
 * 
 * @NamedAttributeNode("user"), } ),
 * 
 * @NamedEntityGraph(name = "fullTokenEntityGraph", attributeNodes = {
 * 
 * @NamedAttributeNode("token"),
 * 
 * @NamedAttributeNode("tokenType"),
 * 
 * @NamedAttributeNode("revoked"),
 * 
 * @NamedAttributeNode("expired"),
 * 
 * @NamedAttributeNode("user"), }) })
 */
public class Token implements Serializable {

	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public Integer id;
	
	@Column(unique = true)
	public String token;
	
	@Enumerated(EnumType.STRING)
	public TokenType tokenType = TokenType.BEARER;
	
	public boolean revoked;
	
	public boolean expired;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "user_id")
	@JsonIgnore
	public User user;

	public Token(String token, TokenType tokenType, boolean revoked, boolean expired, User user) {
		this.token = token;
		this.tokenType = tokenType;
		this.revoked = revoked;
		this.expired = expired;
		this.user = user;
	}
}
