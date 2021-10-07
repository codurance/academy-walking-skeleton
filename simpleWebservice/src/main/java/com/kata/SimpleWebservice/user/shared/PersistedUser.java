package com.kata.SimpleWebservice.user.shared;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import java.time.LocalDate;

import static javax.persistence.GenerationType.IDENTITY;

@Setter
@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "example_user")
public class PersistedUser {

    @Id
    @GeneratedValue(strategy = IDENTITY)
    private long id;

    private String name;

    private int age;

    @Column(name = "dateofbirth")
    private LocalDate dateOfBirth;

}
