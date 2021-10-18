import * as axios from "axios";
import {act, render, screen} from "@testing-library/react";
import {FindUser} from "./FindUser";
import {when} from "jest-when";
import userEvent from "@testing-library/user-event";

jest.mock('axios');

describe('on Find user loaded', () => {
    beforeEach(async () => {
        await render(<FindUser/>);
    });

    describe('and get users clicked', () => {
        it('shows user information on the page', async () => {
            when(axios.get).calledWith('http://localhost:8080/user/all').mockImplementation(() => Promise.resolve({
                data: [
                    {name: 'John Doe', age: 26, dateOfBirth: '1970-12-31'},
                    {name: 'Jordan Doe', age: 35, dateOfBirth: '2021-01-01'}
                ]
            }));
            const expectedUsersFound = [
                ['Name: John Doe', 'Age: 26', 'Date of birth: 1970-12-31'],
                ['Name: Jordan Doe', 'Age: 35', 'Date of birth: 2021-01-01']
            ];

            await act(async () => {
                await userEvent.click(screen.getByText('Get Users', {selector: 'button'}));
            });

            expectedUsersFound.forEach(user => {
                user.forEach(content => {
                    expect(screen.getByText(content)).toBeInTheDocument();
                })
            });
        });
    });

    describe('and get user button clicked', () => {
        it('should show no user found message for not found response', async () => {
            when(axios.get).calledWith('http://localhost:8080/user/100').mockImplementation(() => Promise.reject({
                response: {
                    status: 404
                }
            }));
            inputText('User ID', '100');

            await act(async () => {
                userEvent.click(screen.getByText('Get User', {selector: 'button'}));
            });

            expect(screen.getByText('User cannot be found')).toBeInTheDocument();
        });

        it('should display user found', async () => {
            when(axios.get).calledWith('http://localhost:8080/user/1').mockImplementation(() => Promise.resolve({
                data: {name: 'John Doe', age: 26, dateOfBirth: '1970-12-31'}
            }));
            inputText('User ID', '1');

            await act(async () => {
                userEvent.click(screen.getByText('Get User', {selector: 'button'}));
            });

            expect(screen.getByText('Name: John Doe')).toBeInTheDocument();
            expect(screen.getByText('Age: 26')).toBeInTheDocument();
            expect(screen.getByText('Date of birth: 1970-12-31')).toBeInTheDocument();
        });

        const inputText = (placeholderName, value) => userEvent.type(screen.getByPlaceholderText(placeholderName), value)

    });
});