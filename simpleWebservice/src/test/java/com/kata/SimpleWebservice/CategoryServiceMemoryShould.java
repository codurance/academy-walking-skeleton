package com.kata.SimpleWebservice;

import static org.junit.jupiter.api.Assertions.assertEquals;
import org.junit.jupiter.api.Test;

public class CategoryServiceMemoryShould {
	@Test public void
	store_a_category_in_memory() {
		CategoryService service = new CategoryServiceMemory();
		CategoryCreationDto dto = new CategoryCreationDto("a", "b", "c");
		service.create(dto);
		var result = service.getAll();
		assertEquals(result.size(), 1);
		var first = result.get(0);
		assertEquals(dto, first);
	}
}
