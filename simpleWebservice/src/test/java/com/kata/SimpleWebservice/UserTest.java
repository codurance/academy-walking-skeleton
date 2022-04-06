package com.kata.SimpleWebservice;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.json.JsonTest;
import static org.assertj.core.api.Assertions.assertThat;


@JsonTest
public class UserTest {

    @Autowired
    ObjectMapper objectMapper;

    @Test
    void userObjectDeserializesCorrectly() throws JsonProcessingException {
        User user = new User("John Doe", 26, "1970-12-31");
        String actualJson = objectMapper.writeValueAsString(user);
        String expectedJson = "{\"name\":\"John Doe\",\"age\":26,\"dateOfBirth\":\"1970-12-31\"}";

        assertThat(actualJson).isEqualTo(expectedJson);
    }

}
