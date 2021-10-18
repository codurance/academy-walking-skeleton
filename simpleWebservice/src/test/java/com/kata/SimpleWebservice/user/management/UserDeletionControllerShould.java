package com.kata.SimpleWebservice.user.management;

import com.kata.SimpleWebservice.user.shared.UserRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.web.servlet.MockMvc;

import static org.mockito.BDDMockito.given;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.delete;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest(UserDeletionController.class)
public class UserDeletionControllerShould {

    @MockBean
    private UserRepository userRepository;

    @Autowired
    private MockMvc mockMvc;

    @Test
    void return_ok_response_when_existing_user_is_deleted() throws Exception {
        given(userRepository.existsById(1L)).willReturn(true);
        mockMvc.perform(delete("/user/1")).andExpect(status().isOk());
    }

    @Test
    void return_not_found_response_on_delete_when_no_user_exists() throws Exception {
        given(userRepository.existsById(1L)).willReturn(false);
        mockMvc.perform(delete("/user/1")).andExpect(status().isNotFound());
    }
}
