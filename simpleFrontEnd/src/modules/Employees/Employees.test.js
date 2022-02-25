import {render, screen} from '@testing-library/react';
import Employee from "./Employees";
import userEvent from "@testing-library/user-event";
import * as axios from "axios";
import {act} from "react-dom/test-utils";

jest.mock('axios');

const renderPage = async () => render(<Employee />);

const mockFetchUsers = results => {
    axios.get.mockImplementation(() => Promise.resolve({
        data: results
    }));
}

describe('Employee page', () => {
    const mockUsers = [{ firstName: "John Doe" }];

    beforeEach(async () => {

        mockFetchUsers(mockUsers);
        await act(async () => {
            await renderPage();
        });
    })

    it('should display Employee text', async () => {

        const employeeTitle = screen.getByText('Employee', { selector: 'h1' });
        expect(employeeTitle).toBeInTheDocument();
    });

    it('should display new Employee button', async () => {

        const employeeButton = screen.getByText('New', { selector: 'button' });
        expect(employeeButton).toBeInTheDocument();
    });

    it ( 'should appear a form after press the new button', async()=>{

        userEvent.click(screen.getByText('New', { selector: 'button' }));

        expect(screen.getByTestId("new-employee-form")).toBeInTheDocument();
    } )

    it ( 'form should not appear if the button is not pressed', async()=>{
        expect(screen.queryByTestId("new-employee-form")).toBeNull();
    } )

    it ( 'Should have a list', async()=>{

        const employeeList = screen.getByTestId('employee-list');

        expect(employeeList).toBeInTheDocument();
    } )
});

describe('Employee list', () => {
    it ( 'Should get employees from API and display in a list', async()=>{
        const mockUsers = [{ firstName: "John Doe" },{ firstName: "Chris" },];
        mockFetchUsers(mockUsers);

        await act(async () => {
            await renderPage();
        });

        const employeeForms = screen.getAllByRole("employee-form");
        expect(employeeForms).toHaveLength(2);
    })

    it ( 'Should display update button inside list', async()=>{
        const mockUsers = [{ firstName: "John Doe" },{ firstName: "Chris" },];
        mockFetchUsers(mockUsers);

        await act(async () => {
            await renderPage();
        });

        const updateButtons = screen.getAllByText('Update', { selector: 'button' });
        expect(updateButtons).toHaveLength(2);
    })
});