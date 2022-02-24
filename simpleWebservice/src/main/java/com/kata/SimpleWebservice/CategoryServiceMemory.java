package com.kata.SimpleWebservice;

import java.util.List;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Service;

@Service
public class CategoryServiceMemory implements CategoryService {

	@Override
	public void create(CategoryCreationDto dto) {
		throw new UnsupportedOperationException();
	}

	@Override
	public List<CategoryCreationDto> getAll() {
		throw new UnsupportedOperationException();
	}
}
