package com.Goodfood_Badfood.service;

import com.Goodfood_Badfood.domain.dto.PointDto;
import com.Goodfood_Badfood.domain.entity.PointEntity;
import com.Goodfood_Badfood.domain.entity.PointRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;


@Service
public class FoodService {

    /*////////////////////////////*/
    @Autowired
    PointRepository pointRepository;


    /*////////////////////////////*/
    @Transactional
    public List badfood() throws IOException {
        List list = new ArrayList<>();
        StringBuilder result = new StringBuilder();

        String urlStr = "https://api.odcloud.kr/api/15039965/v1/uddi:37c5ec4d-ce7a-47fc-8578-a4e9fdd7767c?page=1&perPage=521&serviceKey=r8GL%2BVSaiHPTSkjqegmPHqGTnBPHbeGuSsWe4dc9ERWzLvxkjoCLUAzvnhYm6zssm5WuZXhl6%2FhQEdhiSbITJQ%3D%3D";
        URL url;
        url = new URL(urlStr);
        HttpURLConnection urlConnection = (HttpURLConnection) url.openConnection();
        urlConnection.setRequestMethod("GET");

        BufferedReader br;
        br = new BufferedReader(new InputStreamReader(urlConnection.getInputStream(), "UTF-8"));
        String rerutnLine;
        while ((rerutnLine = br.readLine()) != null) {
            result.append(rerutnLine + "\n\r");
        }
        urlConnection.disconnect();
        list.add(result);
        return list;
    }


    @Transactional
    public List goodfood() throws IOException {
        List list = new ArrayList<>();
        StringBuilder result = new StringBuilder();

        String urlStr = "https://api.odcloud.kr/api/3071314/v1/uddi:e4e7774d-0b16-4299-b830-dee5045df70f_201909291441?page=1&perPage=115&serviceKey=r8GL%2BVSaiHPTSkjqegmPHqGTnBPHbeGuSsWe4dc9ERWzLvxkjoCLUAzvnhYm6zssm5WuZXhl6%2FhQEdhiSbITJQ%3D%3D";
        URL url;
        url = new URL(urlStr);
        HttpURLConnection urlConnection = (HttpURLConnection) url.openConnection();
        urlConnection.setRequestMethod("GET");

        BufferedReader br;
        br = new BufferedReader(new InputStreamReader(urlConnection.getInputStream(), "UTF-8"));
        String rerutnLine;
        while ((rerutnLine = br.readLine()) != null) {
            result.append(rerutnLine + "\n\r");
        }
        urlConnection.disconnect();
        list.add(result);
        return list;
    }

    @Transactional
    public boolean storepoint(PointDto pointDto) {
        if (pointDto.getPoint() == 0) {
            return false;
        } else {
            PointEntity pent = pointRepository.save(pointDto.toEntity());
            return true;
        }
    }

    @Transactional
    public List<PointDto> stboard(PointDto pointDto) {
        System.out.println("확인하자-=====");
        System.out.println(pointDto.getStname());
        List<PointEntity> elist = pointRepository.findByStname(pointDto.getStname());
        System.out.println(elist.toString());
        List<PointDto> dlist = new ArrayList<>();
        for (PointEntity entity : elist) {
            dlist.add(entity.toDto());
        }
        System.out.println(pointDto);
        return dlist;
    }
}
