import {act, fireEvent, render, screen} from "@testing-library/react";
import {User} from "./User";
import userEvent from "@testing-library/user-event";
import * as axios from "axios";

jest.mock('axios');

describe('on user rendered', () => {
    beforeEach(async () => {
        const user = {
            id: 2,
            name: 'Alex',
            age: 24,
            dateOfBirth: '1997-01-01'
        }
        await render(<User user={user}/>);
    });

    it('should display user', () => {
        expect(screen.getByPlaceholderText('Name')).toHaveValue('Alex');
        expect(screen.getByPlaceholderText('Age')).toHaveValue('24');
        expect(screen.getByPlaceholderText('Date of Birth')).toHaveValue( '1997-01-01');
    });

    describe("on update user clicked", () => {
        it('should update the user with id', async () => {
            inputText('Name', 'Jordan');
            inputText('Age', '28');
            inputText('Date of Birth', '1993-01-01');

            await act(async () => {
                userEvent.click(screen.getByText('Update User', {selector: 'button'}));
            });

            expect(axios.put).toBeCalledWith('http://localhost:8080/user/2/', {
                name: 'Jordan',
                age: 28,
                dateOfBirth: '1993-01-01'
            });
        });

        const inputText = (placeholderName, value) => userEvent.type(screen.getByPlaceholderText(placeholderName), `{selectall}${value}`)
    });
})