package com.kata.SimpleWebservice.user.management;

import com.kata.SimpleWebservice.user.shared.PersistedUser;
import com.kata.SimpleWebservice.user.shared.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserUpdater {

    private final UserRepository userRepository;

    @Autowired
    public UserUpdater(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public void updateUser(long id, UserRequest request) {
        if (!userRepository.existsById(id)) throw new UserNotFoundException();

        PersistedUser user = map(id, request);
        userRepository.save(user);
    }

    private PersistedUser map(long id, UserRequest request) {
        return PersistedUser
                .builder()
                .id(id)
                .name(request.getName())
                .age(request.getAge())
                .dateOfBirth(request.getDateOfBirth())
                .build();
    }

}
