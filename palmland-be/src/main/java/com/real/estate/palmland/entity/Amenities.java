package com.real.estate.palmland.entity;

import java.io.Serializable;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@EqualsAndHashCode
@NoArgsConstructor
@Table(name = "amenities")
@Entity
public class Amenities implements Serializable {

	private static final long serialVersionUID = 1L;
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	
    private Integer id;
	
    private Integer rooms;
    
   // @Enumerated(value=EnumType.STRING)
    private String facing;
    
    //@Enumerated(value=EnumType.STRING)
    private boolean wifi;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "property_id", referencedColumnName = "id")
    @JsonIgnore
    private Property property;

    public Amenities(Integer rooms, String facing, boolean wifi, Property property) {
        this.rooms = rooms;
        this.facing = facing;
        this.wifi = wifi;
        this.property = property;
    }
}
