import {render, screen} from '@testing-library/react';
import EmployeeForm from "./EmployeeForm";
import * as axios from "axios";
import userEvent from '@testing-library/user-event';
import * as assert from "assert";
jest.mock('axios');


describe('Employee page', () => {

    it('should display all the inputs in the employee form', async () => {
        const renderPage = async () => render(<EmployeeForm/>);
        await renderPage();

        function expectToBeInDocument(role) {
            const expected = screen.getByRole(role, {selector:"input"});
            expect(expected).toBeInTheDocument();
        }

        var inputs = [
            "reports",
            "lastName",
            "firstName",
            "title",
            "courtesyTitle",
            "birthdate",
            "hireDate",
            "address",
            "city",
            "region",
            "postalCode",
            "country",
            "homePhone",
            "extension",
            "photo",
            "notes",
        ]

        inputs.forEach(role => expectToBeInDocument(role));
    });

    it('should send testing reports value at reports', async () => {
        let outputObject;
        const renderPage = async () => render(<EmployeeForm handleForm={(form)=>{outputObject=form}}/>);
        await renderPage();

        let inputElement= screen.getByRole("reports", {selector:"input"})
        let button= screen.getByText("Update")

        userEvent.type(inputElement,"testing reports");
        userEvent.click(button);

        assert.equal(outputObject.reports,"testing reports")
    });

    it('should render employee information when employee passed to form', async () => {

        const employee = {
            "reports": "Ned Stark",
            "last-name": "Snow",
            "first-name": "Jon",
            "title": "Mr",
            "courtesy-title": "Something of winterfell",
            "birthdate": "01-01-01",
            "hire-date": "01-01-10",
            "address": "winterfell",
            "city": "winterfell",
            "region": "North",
            "postal-code": "123",
            "country": "GOF",
            "home-phone": "n/a",
            "extension": "n/a",
            "photo": "direwolf.pic",
            "notes": "knows nothing",
        }
        const renderPage = async () => render(<EmployeeForm employee={employee}/>);
        await renderPage();

        Object.keys(employee).forEach(role => {
            const expected = screen.getByRole(role, {selector:"input"});
            expect(expected).toHaveValue(employee[role]);
        })
    })
});
