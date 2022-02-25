import {render, screen} from '@testing-library/react';
import EmployeeForm from "./EmployeeForm";
import * as axios from "axios";
import userEvent from '@testing-library/user-event';
import * as assert from "assert";
jest.mock('axios');


describe('Employee page', () => {

    it('should display all the inputs in the employee form', async () => {
        const renderPage = async () => render(<EmployeeForm/>);
        renderPage();

        function expectToBeInDocument(role) {
            const expected = screen.getByRole(role, {selector:"input"});
            expect(expected).toBeInTheDocument();
        }

        var inputs = [
            "reports",
            "last-name",
            "first-name",
            "title",
            "courtesy-title",
            "birthdate",
            "hire-date",
            "address",
            "city",
            "region",
            "postal-code",
            "country",
            "home-phone",
            "extension",
            "photo",
            "notes",
        ]

        inputs.forEach(role => expectToBeInDocument(role));
    });
    it('should send testing reports value at reports', async () => {
        var outputObject
        const renderPage = async () => render(<EmployeeForm handleForm={(form)=>{outputObject=form}}/>);
        renderPage();
        let inputElement= screen.getByRole("reports", {selector:"input"})
        userEvent.type(inputElement,"testing reports");
        let buttom= screen.getByText("Update")
        userEvent.click(buttom);
        assert.equal(outputObject.reports,"testing reports");
    });
});
