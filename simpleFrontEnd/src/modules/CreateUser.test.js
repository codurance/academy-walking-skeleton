import {act, render, screen} from "@testing-library/react";
import {CreateUser} from "./CreateUser";
import userEvent from "@testing-library/user-event";
import * as axios from "axios";

jest.mock('axios');

describe('on create user rendered', () => {
    beforeEach(async () => {
        await render(<CreateUser/>);
    });

    describe('and create user clicked', () => {
        it('create a user with supplied information', async () => {
            inputText('Name', 'Jane Doe');
            inputText('Age', '35');
            inputText('Date of Birth', '2021-01-01');

            await act(async () => {
                userEvent.click(screen.getByText('Create User', {selector: 'button'}));
            });

            expect(axios.post).toBeCalledWith('http://localhost:8080/user/create', {
                name: 'Jane Doe',
                age: 35,
                dateOfBirth: '2021-01-01'
            });
        });
    });

    const inputText = (placeholderName, value) => userEvent.type(screen.getByPlaceholderText(placeholderName), value)
})