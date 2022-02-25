import React, {useState, useEffect } from "react";
import * as axios from "axios";
import EmployeeForm from "../EmployeeForm/EmployeeForm";
import { v4 as uuid } from 'uuid';
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
            setEmployeeList([]);
        }
    }, []);

    return (<>
        <h1>Employee</h1>
            <ul data-testid="employee-list">
             {
                 employeeList.map((employee) => {
                     return <li key={`employee-${uuid()}`}>
                         <EmployeeForm employee={employee} handleForm={updateEmployee}/>
                     </li>
                 })
             }
            </ul>
            <button onClick={showForm}>New</button>
            {   formView &&
                <EmployeeForm handleForm={addEmployee}/>
            }
        </>
)
    function addEmployee(data){
        setEmployeeList([...employeeList, data])
    }

    function updateEmployee(data){
        setEmployeeList([...employeeList, data])
    }
};

export default Employees;