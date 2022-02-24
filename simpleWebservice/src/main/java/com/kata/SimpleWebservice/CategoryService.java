package com.kata.SimpleWebservice;

import java.util.List;

public interface CategoryService {
	void create(CategoryCreationDto dto);
	List<CategoryCreationDto> getAll();
}
