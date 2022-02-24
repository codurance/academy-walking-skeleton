package com.kata.SimpleWebservice;

import java.util.Objects;

public class CategoryCreationDto {
	private String name;
	private String description;
	private String picture;

	public CategoryCreationDto() { }

	public CategoryCreationDto(String name, String description, String picture) {
		this.name = name;
		this.description = description;
		this.picture = picture;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getPicture() {
		return picture;
	}

	public void setPicture(String picture) {
		this.picture = picture;
	}

	@Override
	public boolean equals(Object o) {
		if (this == o) return true;
		if (o == null || getClass() != o.getClass()) return false;
		CategoryCreationDto that = (CategoryCreationDto) o;
		return Objects.equals(name, that.name) && Objects.equals(description, that.description) && Objects.equals(picture, that.picture);
	}

	@Override
	public int hashCode() {
		return Objects.hash(name, description, picture);
	}
}
