import React, {useState} from "react";
import axios from 'axios';

function Main() {

    const [users, setUsers] = useState([]);
    const [newUser, setNewUser] = useState({
        name: "",
        age: "",
        dateOfBirth: "",
    });
    const [userId, setUserId] = useState("")
    const [error, setError] = useState(undefined);

    const getUsers = async () => {
        await axios
            .get('http://localhost:8080/user/all')
            .then((response) => setUsers(response.data));
    }

    const getUser = async (event) => {
        event.preventDefault();
        await axios
            .get(`http://localhost:8080/user/${userId}`)
            .then((response) => {
                setUsers([response.data])
                setError("");
            })
            .catch((error) => {
                const response = error.response
                if (response && response.status === 404)
                    setError("User cannot be found")
            });
    }

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

    function updateUserId(event) {
        setUserId(event.target.value);
    }

    return (
        <div className="App">
            <header className="App-header">
                <h2>
                    This is a simple webpage
                </h2>
            </header>

            <p>
                Click this button to get user data:
                <button onClick={getUsers}>Get Users</button>
            </p>

            {error &&
                <p>{error}</p>
            }

            {users.map(user => (
                <>
                    <ul>
                        <li>Name: {user.name}</li>
                        <li>Age: {user.age}</li>
                        <li>Date of birth: {user.dateOfBirth}</li>
                    </ul>
                </>
            ))}

            <form onSubmit={getUser}>
                <input type="text" name="userId" value={userId} onChange={updateUserId} placeholder="User ID"/>
                <button type="submit">Get User</button>
            </form>

            <br/>

            <form onSubmit={createUser}>
                <input type="text" name="name" value={newUser.name} onChange={updateForm} placeholder="Name"/>
                <input type="number" name="age" value={newUser.age} onChange={updateForm} placeholder="Age"/>
                <input type="text" name="dateOfBirth" value={newUser.dateOfBirth} onChange={updateForm}
                       placeholder="Date of Birth"/>
                <button type="submit">Create User</button>
            </form>

            <br/>
        </div>
    )
}

export {Main}