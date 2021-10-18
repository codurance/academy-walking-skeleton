import React, {useState} from "react";
import axios from "axios";

function CreateUser() {

    const [newUser, setNewUser] = useState({
        name: "",
        age: "",
        dateOfBirth: "",
    });

    async function createUser(event) {
        event.preventDefault();
        await axios.post('http://localhost:8080/user/create', {
            ...newUser,
            age: parseInt(newUser.age),
        });

        setNewUser({
            name: "",
            age: "",
            dateOfBirth: "",
        })
    }

    function updateForm(event) {
        const name = event.target.name;
        const value = event.target.value;
        setNewUser({
            ...newUser,
            [name]: value
        });
    }

    return (
        <form onSubmit={createUser}>
            <input type="text" name="name" value={newUser.name} onChange={updateForm} placeholder="Name"/>
            <input type="number" name="age" value={newUser.age} onChange={updateForm} placeholder="Age"/>
            <input type="text" name="dateOfBirth" value={newUser.dateOfBirth} onChange={updateForm}
                   placeholder="Date of Birth"/>
            <button type="submit">Create User</button>
        </form>
    )
}

export {CreateUser}
