package com.kata.SimpleWebservice.user.management;

import com.kata.SimpleWebservice.user.shared.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

import static java.util.Collections.singletonMap;
import static org.springframework.http.HttpStatus.CREATED;

@RestController
public class UserCreationController {

    @Autowired
    private UserCreator userCreator;

    @PostMapping("/user/create")
    @ResponseStatus(CREATED)
    @ResponseBody
    public Map<String, Long> createUser(@RequestBody UserRequest request) {
        User newUser = userCreator.createNewUser(request);

        return singletonMap("id", newUser.getId());
    }

}
