import {useEffect, useState} from "react";
import {CategoryForm} from "./components/CategoriesForm";
import axios from "axios";


export const Categories = () => {
    const [categoryForm, setCategoryForm] = useState(false)
    const [categoryList, setCategoryList] = useState([{name: "aName", description: "aDescription", picture: "aPicture"}])


    const handleNewCategoryClick = () => {
        setCategoryForm(true)
    }

    return <div>
        <h1>
            Categories
        </h1>
        <ul aria-label="categoryList">
            <li>{"Name: " + categoryList[0].name}</li>
            <li>{"Description: " + categoryList[0].description}</li>
            <li>{"Picture: " + categoryList[0].picture}</li>
        </ul>
        <button aria-label="submit" onClick={handleNewCategoryClick}>new</button>
        {categoryForm && <CategoryForm />}

    </div>
}
