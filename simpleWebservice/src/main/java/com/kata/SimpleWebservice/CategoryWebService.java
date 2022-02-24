package com.kata.SimpleWebservice;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CategoryWebService {

	private final CategoryService categoryService;

	public CategoryWebService(@Autowired CategoryService categoryService) {
		this.categoryService = categoryService;
	}

	@PostMapping("/categories/create")
	public void getUsersFromDatabase(CategoryCreationDto dto) {
		throw new UnsupportedOperationException();
	}
}
