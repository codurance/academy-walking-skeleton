package com.kata.SimpleWebservice.user.shared;

import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<PersistedUser, Long> {

}
