package com.kaankarakas.City.user.controller;

import com.kaankarakas.City.common.response.MessageResponse;
import com.kaankarakas.City.user.service.LocationService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/locations")
@RequiredArgsConstructor
public class LocationController {
    private final LocationService locationService;

    @PostMapping
    public MessageResponse addLocation(@RequestBody @Valid AddLocationRequest request){

        return locationService.addLocation(request.toEntity());
    }

    @GetMapping
    public List<LocationResponse> getAllLocations(){
        return locationService.getAllLocations()
                .stream()
                .map(LocationResponse::fromEntity)
                .toList();
    }
}
