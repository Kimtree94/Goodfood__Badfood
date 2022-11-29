package com.Goodfood_Badfood.service;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.ArrayList;
import java.util.List;


@Service
public class FoodService {
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
}
