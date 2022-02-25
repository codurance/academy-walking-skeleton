import React, {useState, useEffect } from "react";
import * as axios from "axios";
import EmployeeForm from "../EmployeeForm/EmployeeForm";
const API_URL = process.env.REACT_APP_API_URL ?? "http://localhost:8080"

const Employees = () => {
    const [formView, setFormView] = useState(false);
    const [employeeList, setEmployeeList] = useState([]);

    function showForm(event){
        event.preventDefault();
        setFormView(true)
    }

    useEffect(async () => {
        try {
            const res = await axios.get(`${API_URL}/getEmployees`);
            setEmployeeList(res.data);
        } catch (ex){

            setEmployeeList([{firstName: "Example 1"}, {firstName: "Example 2"}, {firstName: "Example 3"}]);
        }
    }, []);

    return (<>
        <h1>Employee</h1>
         <ul data-testid="employee-list">
             {
                 employeeList.map((employee) => {
                     return <li key={employee.firstName}>
                         <EmployeeForm handleForm={(form)=>{ console.log(form) }}/>
                     </li>
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