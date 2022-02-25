package com.kata.SimpleWebservice.Category.acceptance;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.test.web.servlet.MockMvc;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;


@SpringBootTest
@ExtendWith(SpringExtension.class)
@AutoConfigureMockMvc
public class CategoryAcceptanceTest {

    @Autowired
    private MockMvc mockMvc;

    @Test void
    should_create_and_retrieve_all_the_categories_with_ok_status() throws Exception {

        //Given
        String expectedJSON = "[{\"name\":\"test category\",\"description\": \"category description\" ,\"picture\":\"picture url\"}]";


        //WhenAndThen
        this.mockMvc.perform(post("/createCategory")
                .content("{\"name\":\"test category\",\"description\": \"category description\" ,\"picture\":\"picture url\"}")
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isCreated());

        this.mockMvc.perform(get("/categories"))
                .andExpect(status().isOk())
                .andExpect(content().json(expectedJSON));
    }

}
