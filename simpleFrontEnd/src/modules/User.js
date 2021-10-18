import React, {useState} from "react";
import axios from "axios";

function User(props) {
    const user = props.user;

    const [updatedUser, setUpdatedUser] = useState({
        name: user.name,
        age: user.age,
        dateOfBirth: user.dateOfBirth,
    })

    async function updateUser(event) {
        event.preventDefault();

        await axios.put(`http://localhost:8080/user/${user.id}/`, {
            ...updatedUser,
            age: parseInt(updatedUser.age)
        });
    }

    function updateForm(event) {
        const name = event.target.name;
        const value = event.target.value;
        setUpdatedUser({
            ...updatedUser,
            [name]: value
        });
    }

    return (
        <>
            <form onSubmit={updateUser}>
                <label>
                    Name:
                    <input name="name" value={updatedUser.name} onChange={updateForm} placeholder="Name"/>
                </label>
                <label>
                    Age:
                    <input name="age" value={updatedUser.age} onChange={updateForm} placeholder="Age"/>
                </label>
                <label>
                    Date of Birth:
                    <input name="dateOfBirth" value={updatedUser.dateOfBirth} onChange={updateForm} placeholder="Date of Birth"/>
                </label>
                <button type={"submit"}>Update User</button>
            </form>
        </>
    )
}

export {User};