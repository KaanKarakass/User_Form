package com.kaankarakas.City.user.entity;

import com.kaankarakas.City.common.entities.BaseEntity;
import jakarta.persistence.Entity;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.ZoneId;

@Entity
@Getter
@NoArgsConstructor
public class Location extends BaseEntity {
    private String city;
    private String district;
    private int pop;

    public Location(String city, String district,int pop){
        this.city = city;
        this.district = district;
        this.pop = pop;
    }
}
