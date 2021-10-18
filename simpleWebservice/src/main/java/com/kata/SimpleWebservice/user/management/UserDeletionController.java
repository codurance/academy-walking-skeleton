package com.kata.SimpleWebservice.user.management;

import com.kata.SimpleWebservice.user.shared.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import static org.springframework.http.HttpStatus.NOT_FOUND;
import static org.springframework.http.HttpStatus.OK;

@RestController
public class UserDeletionController {

    private UserRepository userRepository;

    @Autowired
    public UserDeletionController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @DeleteMapping("/user/{id}")
    @ResponseStatus(OK)
    public void deleteUser(@PathVariable long id) {
        if (!userRepository.existsById(id)) throw new ResponseStatusException(NOT_FOUND);

        userRepository.deleteById(id);
    }

}
