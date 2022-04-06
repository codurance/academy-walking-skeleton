package com.kata.SimpleWebservice;

import java.time.LocalDate;
import java.util.List;
import org.junit.jupiter.api.Test;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.web.servlet.MockMvc;

import static org.mockito.BDDMockito.given;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest(UserWebservice.class)
public class UserWebserviceTest {

    @MockBean
    private UserRepository userRepository;

    @Autowired
    private MockMvc mockMvc;

    @Test
    public void defaultWebserviceEndpointShouldReturnGenericMessage() throws Exception {
        User user = new User(0,"John Doe", 26, LocalDate.of(1970,12,31));

        given(userRepository.findAll()).willReturn(List.of(user));

        this.mockMvc.perform(get("/getUsers"))
                .andExpect(status().isOk())
                .andExpect(content().json("[{\"name\":\"John Doe\",\"age\":26,\"dateOfBirth\":\"1970-12-31\"}]"));
    }
}
