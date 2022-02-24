package com.kata.SimpleWebservice;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.time.Instant;
import org.junit.jupiter.api.Test;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest(CategoryWebService.class)
public class CategoryWebServiceShould {
	@MockBean
	private CategoryService service;

	@Autowired
	private MockMvc mockMvc;

	@Autowired
	private ObjectMapper mapper;

	@Test public void
	create_the_dto() throws Exception {
		var name = "testCategory" + Instant.now().toString();
		var description = "descriptionOfTestCategory" + Instant.now().toString();
		var picture = "somethingPretty" + Instant.now().toString();

		CategoryCreationDto dto = new CategoryCreationDto(name, description, picture);
		var creationPayload =
				mapper.writeValueAsString(
						dto
				);

		this.mockMvc
				.perform(post("/categories/create").contentType(MediaType.APPLICATION_JSON).content(creationPayload))
				.andExpect(status().isOk());

		verify(service, times(1)).create(dto);
	}
}
