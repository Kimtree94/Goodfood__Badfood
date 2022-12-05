package com.Goodfood_Badfood.domain.entity;

import com.Goodfood_Badfood.domain.dto.PointDto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface PointRepository extends JpaRepository<PointEntity,Integer> {

   @Query(value = "select*from point where stname=:stname" ,nativeQuery = true)
   List<PointEntity> findByStname(@Param("stname") String stname);
}
