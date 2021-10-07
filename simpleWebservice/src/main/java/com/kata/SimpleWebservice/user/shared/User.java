package com.kata.SimpleWebservice.user.shared;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

@Getter
@Setter
@Builder
public class User {

    private long id;

    private String name;

    private int age;

    private LocalDate dateOfBirth;

}
