import {useState} from "react";


export const CategoryForm = ({onSubmit}) => {
    const [formData, setFormData] = useState({})

    function handleOnSubmit(event) {
        event.preventDefault();
        onSubmit(formData);
    }

    return <div>
        <form aria-label="categoryForm">
            <label htmlFor="name">Name:
                <input onChange={(event) =>
                    setFormData(
                        {...formData,
                            name: event.target.value})}
                       type="text"  id="name" name="name"/>
            </label>

            <label htmlFor="description">Description:
                <input onChange={(event) =>
                    setFormData(
                        {...formData,
                            description: event.target.value})}
                       type="text" id="description" name="description" value=""/>
            </label>

            <label htmlFor="picture">Picture:
                <input onChange={(event) =>
                    setFormData(
                        {...formData,
                            picture: event.target.value})}
                       type="text"  id="picture" name="picture"/>
            </label>
            <button onClick={handleOnSubmit} aria-label="submit">submit</button>
        </form>
    </div>
}