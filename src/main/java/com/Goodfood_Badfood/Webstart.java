package com.Goodfood_Badfood;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;


@SpringBootApplication
@EnableJpaAuditing
public class Webstart {
    public static void main(String[] args) {
        SpringApplication.run(Webstart.class);
    }
}
