import { Main } from './Main'
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import * as axios from 'axios';
import { act } from 'react-dom/test-utils';

jest.mock('axios');

const renderPage = async () => render(<Main />);
const mockUsers = [{ name: "John Doe", age: 26, dateOfBirth: "1970-12-31" }];

const mockFetchUsers = results => {
    axios.get.mockImplementation(() => Promise.resolve({
        data: results
    }));
}

describe('Main', () => {

    it('displays welcome text and a button on the page', async () => {
        await renderPage()
        const button = screen.getByText('button', { selector: 'button' });

        expect(screen.getByText("This is a simple webpage")).toBeInTheDocument();
        expect(screen.getByText("Click this button to get user data:")).toBeInTheDocument();
        expect(button).toBeInTheDocument();
    });

    it('shows user information on the page when we click the button', async () => {
        mockFetchUsers(mockUsers);
        const expectedTextFromAPI = ['Name: John Doe', 'Age: 26', 'Date of birth: 1970-12-31'];

        await act(async () => {
            await renderPage();
        });

        await act(async () => {
            userEvent.click(screen.getByText('button', { selector: 'button' }));
        });



        expectedTextFromAPI.forEach(content => {
            expect(screen.getByText(content)).toBeInTheDocument();
        });
    })
});