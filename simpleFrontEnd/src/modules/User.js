import React from "react";

function User(props) {
    const user = props.user;

    return (
        <>
            <ul>
                <li>Name: {user.name}</li>
                <li>Age: {user.age}</li>
                <li>Date of birth: {user.dateOfBirth}</li>
            </ul>
        </>
    )
}

export {User};