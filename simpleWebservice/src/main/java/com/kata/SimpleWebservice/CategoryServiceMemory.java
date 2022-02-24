package com.kata.SimpleWebservice;

import java.util.ArrayList;
import java.util.List;
import org.springframework.stereotype.Service;

@Service
public class CategoryServiceMemory implements CategoryService {
	private final List<CategoryCreationDto> categories = new ArrayList<>();

	public CategoryServiceMemory() { }

	@Override
	public void create(CategoryCreationDto dto) {
		categories.add(dto);
	}

	@Override
	public List<CategoryCreationDto> getAll() {
		return categories;
	}
}
