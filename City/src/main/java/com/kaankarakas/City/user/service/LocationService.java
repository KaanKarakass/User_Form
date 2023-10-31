package com.kaankarakas.City.user.service;

import com.kaankarakas.City.common.response.MessageResponse;
import com.kaankarakas.City.common.response.MessageType;
import com.kaankarakas.City.user.entity.Location;
import com.kaankarakas.City.user.repository.LocationRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class LocationService {
    private final LocationRepository locationRepository;

    public MessageResponse addLocation(Location location){
        if(locationRepository.existsByCity(location.getCity()) && locationRepository.existsByDistrict(location.getDistrict())){
            return new MessageResponse("Location did not added successfully", MessageType.ERROR);
        }
        try{
            locationRepository.save(location);
            return new MessageResponse("Location has been added successfully", MessageType.SUCCESS);
        }catch (Exception ex){
            return new MessageResponse("Location did not added successfully", MessageType.ERROR);
        }
    }
    public List<Location> getAllLocations(){
        return locationRepository.findAll();
    }
}
