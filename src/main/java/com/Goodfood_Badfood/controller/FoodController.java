package com.Goodfood_Badfood.controller;

import com.Goodfood_Badfood.domain.dto.PointDto;
import com.Goodfood_Badfood.service.FoodService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;
import org.springframework.web.bind.annotation.*;

import java.awt.*;
import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/foodinfo")
public class FoodController {
    // URL url = new URL("https://api.odcloud.kr/api/15039965/v1/uddi:7c77e65e-ef3f-4979-b69b-c79cfc15b45a?page=1&perPage=67&serviceKey=r8GL%2BVSaiHPTSkjqegmPHqGTnBPHbeGuSsWe4dc9ERWzLvxkjoCLUAzvnhYm6zssm5WuZXhl6%2FhQEdhiSbITJQ%3D%3D");

    @Autowired
    FoodService foodService;

    @GetMapping("/badgood")/*페이지로딩*/
    public Resource getbad() {
        return new ClassPathResource("templates/Food.html");
    }

    @GetMapping("/kakaoMap")/*카카오지도*/
    public Resource getkakaoMap() {
        return new ClassPathResource("templates/kakaoMap.html");
    }


    @GetMapping("/badfood")/*위반음식점정보*/
    public List badfood() throws IOException {
        return foodService.badfood();
    }

    @GetMapping("/goodfood")/*모범음식점 정보*/
    public List goodfood() throws IOException {
        return foodService.goodfood();
    }

    @PostMapping("/board") //가게후기 등록
    public boolean storepoint(PointDto pointDto) {
        return foodService.storepoint(pointDto);
    }

    @PostMapping("/stboard") // 가게후기 리스트
    public List<PointDto> stboard(PointDto pointDto) {
        System.out.println(pointDto);
        return foodService.stboard(pointDto);
    }
}
