import {useState} from "react";


export const Categories = () => {
    const {categoryForm, setCategoryForm} = useState(false)

    const handleNewCategoryClick = () => {
        setCategoryForm(true)
    }

    return <div>
        <h1>
            Categories
        </h1>
        <button onClick={handleNewCategoryClick}>new</button>
        {categoryForm && <div>
            <form name = "categoryForm"></form>
        </div>}
    </div>
}
