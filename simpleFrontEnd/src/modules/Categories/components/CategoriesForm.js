import {useState} from "react";


export const CategoryForm = () => {
    return <div>
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
    </div>
}