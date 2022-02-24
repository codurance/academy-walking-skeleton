import {useState} from "react";


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
        {categoryForm && <div>
            <form name="categoryForm">
                <label htmlFor="name">Name:
                    <input type="text"  id="name" name="name"/>
                </label>

                <label htmlFor="description">Description:
                    <input type="text" id="description" name="description"/>
                </label>

                <label htmlFor="picture">Picture:
                    <input type="text"  id="picture" name="picture"/>
                </label>
            </form>
        </div>}
    </div>
}
