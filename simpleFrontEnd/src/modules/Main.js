import React, { useState } from "react";
import axios from 'axios';

const API_URL = process.env.CORS_URL ?? "http://localhost:8080"

function Main() {

    const [users, setUsers] = useState([]);

    const getUsers = async () => {
        const res = await axios.get(`${API_URL}/getUsers`);
        setUsers(res.data)
    }

    return (
        <div className="App">
            <header className="App-header">
                <h2>
                    This is a simple webpage
                </h2>
                <p>
                    Click this button to get user data:
                    <button onClick={getUsers}>button</button>
                </p>

                {users.length > 0 &&
                    <>
                        <ul>
                            <li>Name: {users[0].name}</li>
                            <li>Age: {users[0].age}</li>
                            <li>Date of birth: {users[0].dateOfBirth}</li>
                        </ul>
                    </>
                }
            </header>
        </div>
    )
}

export { Main }