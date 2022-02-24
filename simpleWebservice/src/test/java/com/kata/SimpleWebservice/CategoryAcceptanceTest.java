package com.kata.SimpleWebservice;

import com.fasterxml.jackson.databind.ObjectMapper;
import java.time.Instant;
import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.containsString;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest(CategoryWebService.class)
public class CategoryAcceptanceTest {

	@Autowired
	private MockMvc mockMvc;

	@Autowired
	private ObjectMapper mapper;

	@Test public void
	follow_the_script() throws Exception {
		var name = "testCategory" + Instant.now().toString();
		var description = "descriptionOfTestCategory" + Instant.now().toString();
		var picture = "somethingPretty" + Instant.now().toString();

		var creationPayload =
			mapper.writeValueAsString(
				new CategoryCreationDto(name, description, picture)
			);

		this.mockMvc
			.perform(post("/categories/create").contentType(MediaType.APPLICATION_JSON).content(creationPayload))
			.andExpect(status().isOk());

		var result = this.mockMvc
				.perform(get("/categories/list"))
				.andExpect(status().isOk())
				.andReturn()
				.getResponse()
				.getContentAsString();

		assertThat(result, containsString(name));
		assertThat(result, containsString(description));
		assertThat(result, containsString(picture));
	}
}
