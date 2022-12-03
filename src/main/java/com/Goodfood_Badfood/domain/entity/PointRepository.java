package com.Goodfood_Badfood.domain.entity;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface PointRepository extends JpaRepository<PointEntity, Integer> {

   @Query(value = "select*from point where stname=:stname" ,nativeQuery = true)
    List<PointEntity> findByStname(String stname);
}
