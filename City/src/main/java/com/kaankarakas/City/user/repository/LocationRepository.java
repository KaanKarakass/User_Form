package com.kaankarakas.City.user.repository;

import com.kaankarakas.City.user.entity.Location;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface LocationRepository extends JpaRepository<Location, Long> {
    Boolean existsByCity(String city);
    Boolean existsByDistrict(String district);
}
