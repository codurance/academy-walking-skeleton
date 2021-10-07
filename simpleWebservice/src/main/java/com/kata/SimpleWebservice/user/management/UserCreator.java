package com.kata.SimpleWebservice.user.management;

import com.kata.SimpleWebservice.user.shared.PersistedUser;
import com.kata.SimpleWebservice.user.shared.User;
import com.kata.SimpleWebservice.user.shared.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserCreator {

    private final UserRepository userRepository;

    @Autowired
    public UserCreator(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public User createNewUser(NewUserRequest request) {
        PersistedUser user = map(request);
        PersistedUser updatedUser = userRepository.save(user);

        return map(updatedUser);
    }

    private PersistedUser map(NewUserRequest request) {
        return PersistedUser
                .builder()
                .name(request.getName())
                .age(request.getAge())
                .dateOfBirth(request.getDateOfBirth())
                .build();
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
