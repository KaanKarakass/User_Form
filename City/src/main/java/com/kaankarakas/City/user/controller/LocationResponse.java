package com.kaankarakas.City.user.controller;

import com.kaankarakas.City.user.entity.Location;

public record LocationResponse(
        Long id,
        String city,
        String district,
        int pop
) {
    public static LocationResponse fromEntity(Location location){
        return new LocationResponse(
                location.getId(),
                location.getCity(),
                location.getDistrict(),
                location.getPop()
        );
    }
}
