package com.kata.SimpleWebservice.Category.Controller;

import com.kata.SimpleWebservice.Category.Model.Category;
import com.kata.SimpleWebservice.Category.Service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
public class CategoryCommandController {

    @Autowired
    private CategoryService categoryService;

    @PostMapping("/createCategory")
    @ResponseBody
    @ResponseStatus (HttpStatus.CREATED)
    public void createCategoryInDatabase(@RequestBody Category category) {
        categoryService.create(category);
    }


}
