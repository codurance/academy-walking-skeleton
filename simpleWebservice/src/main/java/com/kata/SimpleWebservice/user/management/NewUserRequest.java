package com.kata.SimpleWebservice.user.management;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

@Getter
@Setter
public class NewUserRequest {

    private String name;

    private int age;

    private LocalDate dateOfBirth;

}
