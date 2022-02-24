import React from "react";

const EmployeeForm= () => {

    return (
            <form role={"employee-form"}>
                <input type="text" defaultValue={""} role={"reports"} />
                <input type="text" defaultValue={""} role={"last-name"}/>
                <input type="text" defaultValue={""} role={"first-name"}/>
                <input type="text" defaultValue={""} role={"title"}/>
                <input type="text" defaultValue={""} role={"courtesy-title"}/>
                <input type="text" defaultValue={""} role={"birthdate"} />
                <input type="text" defaultValue={""} role={"hire-date"}/>
                <input type="text" defaultValue={""} role={"address"}/>
                <input type="text" defaultValue={""} role={"city"}/>
                <input type="text" defaultValue={""} role={"region"}/>
                <input type="text" defaultValue={""} role={"postal-code"}/>
                <input type="text" defaultValue={""} role={"country"}/>
                <input type="text" defaultValue={""} role={"home-phone"}/>
                <input type="text" defaultValue={""} role={"extension"}/>
                <input type="text" defaultValue={""} role={"photo"}/>
                <input type="text" defaultValue={""} role={"notes"}/>
                <button>Update</button>
            </form>
    )
};

export default EmployeeForm;