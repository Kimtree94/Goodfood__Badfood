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

    @GetMapping("/badgood")
    public Resource getbad(){
        return new ClassPathResource("templates/Food.html");
    }
    @GetMapping("/kakaoMap")
    public Resource getkakaoMap(){
        return new ClassPathResource("templates/kakaoMap.html");
    }



    @GetMapping("/badfood")
    public List badfood() throws IOException {
        return foodService.badfood();
    }

    @GetMapping("/goodfood")
    public List goodfood() throws IOException {
        return foodService.goodfood();
    }
   @PostMapping("/board")
    public boolean storepoint(PointDto pointDto) {
       System.out.println("pno확인용 :"+pointDto);
       return foodService.storepoint(pointDto);
   }
}
