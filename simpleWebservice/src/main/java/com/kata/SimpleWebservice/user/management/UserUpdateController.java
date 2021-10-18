package com.kata.SimpleWebservice.user.management;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import static org.springframework.http.HttpStatus.NOT_FOUND;
import static org.springframework.http.HttpStatus.NO_CONTENT;

@RestController
public class UserUpdateController {

    private final UserUpdater userUpdater;

    @Autowired
    public UserUpdateController(UserUpdater userUpdater) {
        this.userUpdater = userUpdater;
    }

    @PutMapping("/user/{id}")
    @ResponseStatus(NO_CONTENT)
    public void updateUser(@PathVariable long id, @RequestBody UserRequest request) {
        try {
            userUpdater.updateUser(id, request);
        } catch (UserNotFoundException exception) {
            throw new ResponseStatusException(NOT_FOUND);
        }
    }

}
