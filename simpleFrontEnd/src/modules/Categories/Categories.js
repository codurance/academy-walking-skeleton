import {useState} from "react";
import {CategoryForm} from "./components/CategoriesForm";


export const Categories = () => {
    const [categoryForm, setCategoryForm] = useState(false)

    const handleNewCategoryClick = () => {
        setCategoryForm(true)
    }

    return <div>
        <h1>
            Categories
        </h1>
        <button onClick={handleNewCategoryClick}>new</button>
        {categoryForm && <CategoryForm />}
    </div>
}
