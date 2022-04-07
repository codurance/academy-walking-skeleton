import React, { useState } from "react";
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL ?? "http://localhost:8080"

function Main() {

    const [users, setUsers] = useState([]);

    const getUsers = async () => {
        const res = await axios.get(`${API_URL}/getUsers`);
        setUsers(res.data);
    }

    return (
        <div className="App">
            <header className="App-header">
                <h1>Hello Academy!</h1>
                <h2>
                    This is a simple webpage
                </h2>
                <p>
                    Click this button to get user data:
                    <button onClick={getUsers}>button</button>
                </p>
                {users.map(u => <User user={u}/>)}
            </header>
        </div>
    )
}

function User(props) {
    return <>
        <ul>
            <li>Name: {props.user.name}</li>
            <li>Age: {props.user.age}</li>
            <li>Date of birth: {props.user.dateOfBirth}</li>
        </ul>
    </>;
}

export { Main }
