package com.kata.SimpleWebservice;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.core.env.Environment;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication
public class SimpleWebserviceApplication {

	@Autowired
	private Environment env;

	public static void main(String[] args) {
		SpringApplication.run(SimpleWebserviceApplication.class, args);
	}

	@Bean
	public WebMvcConfigurer corsConfigurer() {
		return new WebMvcConfigurer() {
			@Override
			public void addCorsMappings(CorsRegistry registry) {
				String corsUrl = env.getProperty("cors.url");
				registry.addMapping("/getUsers").allowedOrigins(corsUrl);
				registry.addMapping("/categories/create").allowedOrigins(corsUrl);
			}
		};
	}

}
