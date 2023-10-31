package com.kaankarakas.City.user.controller;

import com.kaankarakas.City.user.entity.Location;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Size;

public record AddLocationRequest(
        @NotEmpty
        @Size(max = 15)
        String city,
        @NotEmpty
        @Size(max = 15)
        String district,


        int pop
) {
    public Location toEntity(){
        return new Location(
                city.toUpperCase(),
                district.toUpperCase(),
                pop
        );
    }
}
