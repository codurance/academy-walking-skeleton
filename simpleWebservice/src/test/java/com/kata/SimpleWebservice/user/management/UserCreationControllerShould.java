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
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.BDDMockito.given;
import static org.mockito.Mockito.verify;
import static org.springframework.http.MediaType.APPLICATION_JSON;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest(UserCreationController.class)
class UserCreationControllerShould {

    @MockBean
    private UserRepository userRepository;

    @Autowired
    private MockMvc mockMvc;

    @Test
    void save_new_user_from_mapped_new_user_request() throws Exception {
        withNewUserPersisted();

        this.mockMvc.perform(buildNewUserRequest());

        PersistedUser newUser = captureNewSavedUser();
        assertThat(newUser.getName(), is("Jane Doe"));
        assertThat(newUser.getAge(), is(35));
        assertThat(newUser.getDateOfBirth(), is(of(1986, 4, 1)));
    }

    @Test
    public void return_a_created_response_with_id_for_newly_created_user() throws Exception {
        withNewUserPersisted();

        this.mockMvc.perform(buildNewUserRequest())
                .andExpect(status().isCreated())
                .andExpect(content().json("{\"id\": 2}"));
    }

    private RequestBuilder buildNewUserRequest() {
        return post("/user/create")
                .contentType(APPLICATION_JSON)
                .content("{\"name\":\"Jane Doe\",\"age\":35,\"dateOfBirth\":\"1986-04-01\"}");
    }

    private void withNewUserPersisted() {
        PersistedUser createdUser = PersistedUser.builder().id(2L).build();
        given(userRepository.save(any())).willReturn(createdUser);
    }

    private PersistedUser captureNewSavedUser() {
        ArgumentCaptor<PersistedUser> captor = ArgumentCaptor.forClass(PersistedUser.class);
        verify(userRepository).save(captor.capture());

        return captor.getValue();
    }

}