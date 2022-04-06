package com.kata.SimpleWebservice;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class UserWebservice {

    @Autowired
    private UserRepositoryJDBC userRepository;

    @RequestMapping("/getUsers")
    @ResponseBody
    public List<UserJDBC> getUsersFromDatabase() {
        return userRepository.findAll();
    }


}
