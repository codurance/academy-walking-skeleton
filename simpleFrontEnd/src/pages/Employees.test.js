import { render, screen } from '@testing-library/react';
import Employee from "./Employees";
import userEvent from "@testing-library/user-event";
const renderPage = async () => render(<Employee />);

describe('Employee', () => {

    beforeEach(async () => {
        await renderPage();
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