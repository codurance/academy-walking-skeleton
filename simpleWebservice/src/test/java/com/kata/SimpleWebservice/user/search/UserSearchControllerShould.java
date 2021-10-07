package com.kata.SimpleWebservice.user.search;

import com.kata.SimpleWebservice.user.shared.PersistedUser;
import com.kata.SimpleWebservice.user.shared.UserRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.web.servlet.MockMvc;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

import static java.util.Optional.empty;
import static org.mockito.BDDMockito.given;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest(UserSearchController.class)
public class UserSearchControllerShould {

    @MockBean
    private UserRepository userRepository;

    @Autowired
    private MockMvc mockMvc;

    @Test
    void return_a_not_found_response_when_no_user_found_with_supplied_id() throws Exception {
        given(userRepository.findById(100L)).willReturn(empty());

        this.mockMvc.perform(get("/user/100"))
                .andExpect(status().isNotFound());
    }

    @Test
    void return_user_found_with_supplied_id() throws Exception {
        PersistedUser user = buildExpectedUser();
        given(userRepository.findById(1L)).willReturn(Optional.of(user));

        this.mockMvc.perform(get("/user/1"))
                .andExpect(status().isOk())
                .andExpect(content().json("{\"name\":\"John Doe\",\"age\":26,\"dateOfBirth\":\"1970-12-31\"}"));
    }

    @Test
    public void return_all_users_found() throws Exception {
        PersistedUser user = buildExpectedUser();
        given(userRepository.findAll()).willReturn(List.of(user));

        this.mockMvc.perform(get("/user/all"))
                .andExpect(status().isOk())
                .andExpect(content().json("[{\"name\":\"John Doe\",\"age\":26,\"dateOfBirth\":\"1970-12-31\"}]"));
    }

    private PersistedUser buildExpectedUser() {
        return PersistedUser.builder()
                .id(1L)
                .name("John Doe")
                .age(26)
                .dateOfBirth(LocalDate.of(1970, 12, 31))
                .build();
    }

}
