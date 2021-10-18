package com.kata.SimpleWebservice.user.management;

import com.kata.SimpleWebservice.user.shared.PersistedUser;
import com.kata.SimpleWebservice.user.shared.UserRepository;
import org.junit.jupiter.api.Test;
import org.mockito.ArgumentCaptor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.RequestBuilder;

import static java.time.LocalDate.of;
import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.is;
import static org.mockito.BDDMockito.given;
import static org.mockito.Mockito.verify;
import static org.springframework.http.MediaType.APPLICATION_JSON;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.put;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest(UserUpdateController.class)
class UserUpdateControllerShould {

    @MockBean
    private UserRepository userRepository;

    @Autowired
    private MockMvc mockMvc;

    @Test
    void return_not_found_when_user_with_id_not_found() throws Exception {
        given(userRepository.existsById(100L)).willReturn(false);

        this.mockMvc.perform(buildUpdateUserRequest())
                .andExpect(status().isNotFound());
    }

    @Test
    void return_204_when_an_existing_user_is_updated() throws Exception {
        given(userRepository.existsById(1L)).willReturn(true);

        this.mockMvc.perform(buildUpdateUserRequest())
                .andExpect(status().isNoContent());
    }

    @Test
    void update_user_from_mapped_updated_user_request() throws Exception {
        given(userRepository.existsById(1L)).willReturn(true);

        this.mockMvc.perform(buildUpdateUserRequest());

        PersistedUser newUser = captureUpdatedUser();
        assertThat(newUser.getName(), is("Manuel Rodriguez"));
        assertThat(newUser.getAge(), is(34));
        assertThat(newUser.getDateOfBirth(), is(of(1986, 4, 9)));
    }

    private PersistedUser captureUpdatedUser() {
        ArgumentCaptor<PersistedUser> captor = ArgumentCaptor.forClass(PersistedUser.class);
        verify(userRepository).save(captor.capture());

        return captor.getValue();
    }

    private RequestBuilder buildUpdateUserRequest() {
        return put("/user/1")
                .contentType(APPLICATION_JSON)
                .content("{\"name\":\"Manuel Rodriguez\",\"age\":34,\"dateOfBirth\":\"1986-04-09\"}");
    }

    private PersistedUser buildExpectedUser() {
        return PersistedUser.builder()
                .build();
    }

}