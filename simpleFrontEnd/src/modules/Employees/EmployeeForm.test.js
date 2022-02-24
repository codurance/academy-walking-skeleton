import {render, screen} from '@testing-library/react';
import EmployeeForm from "./EmployeeForm";
import * as axios from "axios";

jest.mock('axios');

const renderPage = async () => render(<EmployeeForm />);


describe('Employee page', () => {

    it('should display all the inputs in the employee form', async () => {

        function expectToBeInDocument({role, selector}) {
            const expected = screen.getByRole(role, {selector});
            expect(expected).toBeInTheDocument();
        }

        var inputs = [{role: "reports", selector: "input"},
            {role: "last-name", selector: "input"},
            {role: "first-name", selector: "input"},
            {role: "title", selector: "input"},
            {role: "courtesy-title", selector: "select"},
            {role: "birthdate", selector: "input"},
            {role: "hire-date", selector: "input"},
            {role: "address", selector: "input"},
            {role: "city", selector: "input"},
            {role: "region", selector: "input"},
            {role: "postal-code", selector: "input"},
            {role: "country", selector: "input"},
            {role: "home-phone", selector: "input"},
            {role: "extension", selector: "input"},
            {role: "photo", selector: "input"},
            {role: "notes", selector: "input"},
        ]

        inputs.forEach(input => expectToBeInDocument(input));
    });

});
