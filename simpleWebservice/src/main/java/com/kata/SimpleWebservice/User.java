package com.kata.SimpleWebservice;

import java.time.LocalDate;
import lombok.Getter;

@Getter
public final class User {
	private final long id;
	private final String name;
	private final int age;
	private final LocalDate dateOfBirth;

	public User(long id, String name, int age, LocalDate dateOfBirth) {
		this.id = id;
		this.name = name;
		this.age = age;
		this.dateOfBirth = dateOfBirth;
	}
}
