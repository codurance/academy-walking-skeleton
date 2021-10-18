import axios from "axios";
import React, {useState} from "react";
import {User} from "./User";

function FindUser() {
    const [users, setUsers] = useState([]);

    const [userId, setUserId] = useState("")
    const [error, setError] = useState(undefined);


    function updateUserId(event) {
        setUserId(event.target.value);
    }

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

    return (
        <>
            <p>
                Click this button to get user data:
                <button onClick={getUsers}>Get Users</button>
            </p>

            {
                error &&
                <p>{error}</p>
            }

            {
                users.map(user => (
                    <User user={user}/>
                ))
            }

            <form onSubmit={getUser}>
                <input type="text" name="userId" value={userId} onChange={updateUserId} placeholder="User ID"/>
                <button type="submit">Get User</button>
            </form>
        </>
    )
}

export {FindUser}