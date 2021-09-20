package com.kata.SimpleWebservice;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication
public class SimpleWebserviceApplication {

	public static void main(String[] args) {
		SpringApplication.run(SimpleWebserviceApplication.class, args);
	}

	@Bean
	public WebMvcConfigurer corsConfigurer() {
		return new WebMvcConfigurer() {
			@Override
			public void addCorsMappings(CorsRegistry registry) {
				registry.addMapping("/getUsers")
						.allowedOrigins("http://localhost:3000", "http://frontend:3000");
			}
		};
	}

}
