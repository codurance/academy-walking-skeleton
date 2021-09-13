package com.kata.SimpleWebservice;


import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.time.LocalDate;

@Setter
@Getter
@Entity
@NoArgsConstructor
@Table(name = "example_user", schema = "public")
public class User {
    @JsonIgnore
    private @Id long id;
    private String name;
    private int age;
    @Column(name="dateofbirth")
    private LocalDate dateOfBirth;

    public User(String name, int age, String dateOfBirth){
        this.name = name;
        this.age = age;
        this.dateOfBirth = LocalDate.parse(dateOfBirth);
    }
}
