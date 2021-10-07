package com.kata.SimpleWebservice.user.search;

import com.kata.SimpleWebservice.user.shared.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

import static org.springframework.http.HttpStatus.NOT_FOUND;

@RestController
public class UserSearchController {

    private final UserSearcher userSearcher;

    @Autowired
    public UserSearchController(UserSearcher userSearcher) {
        this.userSearcher = userSearcher;
    }

    @RequestMapping("/user/{id}")
    @ResponseBody
    public User findUser(@PathVariable long id) {
        return userSearcher
                .find(id)
                .orElseThrow(() -> new ResponseStatusException(NOT_FOUND));
    }

    @RequestMapping("/user/all")
    @ResponseBody
    public List<User> findUsers() {
        return userSearcher.findAll();
    }

}
