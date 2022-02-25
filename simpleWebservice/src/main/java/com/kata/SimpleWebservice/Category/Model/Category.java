package com.kata.SimpleWebservice.Category.Model;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@EqualsAndHashCode
@Setter
@Getter
@NoArgsConstructor
public class Category {

    private String name;
    private String description;
    private String picture;

    public Category(String name, String description, String picture) {
        this.name = name;
        this.description = description;
        this.picture = picture;
    }


}
