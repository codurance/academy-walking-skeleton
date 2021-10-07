package com.kata.SimpleWebservice.user.search;

import com.kata.SimpleWebservice.user.shared.PersistedUser;
import com.kata.SimpleWebservice.user.shared.User;
import com.kata.SimpleWebservice.user.shared.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

import static java.util.stream.Collectors.toList;

@Service
public class UserSearcher {

    private final UserRepository userRepository;

    @Autowired
    public UserSearcher(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public Optional<User> find(long id) {
        return userRepository
                .findById(id)
                .map(this::map);
    }

    public List<User> findAll() {
        return userRepository
                .findAll()
                .stream()
                .map(this::map)
                .collect(toList());
    }

    private User map(PersistedUser persistedUser) {
        return User
                .builder()
                .id(persistedUser.getId())
                .name(persistedUser.getName())
                .age(persistedUser.getAge())
                .dateOfBirth(persistedUser.getDateOfBirth())
                .build();
    }

}
