import { render, screen } from '@testing-library/react';
import Employee from "./Employees";
const renderPage = async () => render(<Employee />);

describe('Employee', () => {

    it('should display Employee text', async () => {

        await renderPage();

        const employeeTitle = screen.getByText('Employee', { selector: 'h1' });
        expect(employeeTitle).toBeInTheDocument();
    });

});