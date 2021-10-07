package com.kata.SimpleWebservice;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication
@ComponentScan("com.kata.SimpleWebservice")
public class SimpleWebserviceApplication {

    public static void main(String[] args) {
        SpringApplication.run(SimpleWebserviceApplication.class, args);
    }

    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/user/all")
                        .allowedOrigins("http://localhost:3000", "http://frontend:3000");
                registry.addMapping("/user/create")
                        .allowedOrigins("http://localhost:3000", "http://frontend:3000");
                registry.addMapping("/user/{id}")
                        .allowedOrigins("http://localhost:3000", "http://frontend:3000");
            }
        };
    }

}
