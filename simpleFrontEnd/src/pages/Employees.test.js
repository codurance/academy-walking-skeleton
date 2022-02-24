import { render, screen } from '@testing-library/react';
import Employee from "./Employees";
import userEvent from "@testing-library/user-event";
const renderPage = async () => render(<Employee />);

describe('Employee', () => {

    it('should display Employee text', async () => {

        await renderPage();

        const employeeTitle = screen.getByText('Employee', { selector: 'h1' });
        expect(employeeTitle).toBeInTheDocument();
    });

    it('should display new Employee button', async () => {

        await renderPage();

        const employeeButton = screen.getByText('New', { selector: 'button' });
        expect(employeeButton).toBeInTheDocument();
    });

    it ( 'should appear a form after press the new button', async()=>{

        await renderPage();

        userEvent.click(screen.getByText('New', { selector: 'button' }));

        expect(screen.getByTestId("new-employee-form")).toBeInTheDocument();
    } )

    it ( 'form should not appear if the button is not pressed', async()=>{

        await renderPage();
        expect(screen.getByTestId("new-employee-form")).not.toBeInTheDocument();
    } )
});