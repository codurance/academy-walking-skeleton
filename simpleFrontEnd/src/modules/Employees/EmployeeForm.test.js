import {render, screen} from '@testing-library/react';
import EmployeeForm from "./EmployeeForm";
import * as axios from "axios";

jest.mock('axios');

const renderPage = async () => render(<EmployeeForm />);


describe('Employee page', () => {

    it('should display all the inputs in the employee form', async () => {
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

});
