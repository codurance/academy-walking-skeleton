import React, {useState, useEffect } from "react";
import * as axios from "axios";
const API_URL = process.env.REACT_APP_API_URL ?? "http://localhost:8080"

const Employees = () => {
    const [formView, setFormView] = useState(false);
    const [employeeList, setEmployeeList] = useState([]);

    function showForm(event){
        event.preventDefault();
        setFormView(true)
    }

    useEffect(async () => {
        const res = await axios.get(`${API_URL}/getEmployees`);
        setEmployeeList(res.data);
    }, []);

    return (<>
        <h1>Employee</h1>
         <ul data-testid="employee-list">
             {
                 employeeList.map((employee) => {
                     return <li key={employee.firstName}><form role={"employee-form"}><input type="text" defaultValue={employee.firstName} /></form></li>
                 })
             }
         </ul>
        <button onClick={showForm}>New</button>
            {formView &&
                <form data-testid="new-employee-form"></form>
            }
    </>
)
};

export default Employees;