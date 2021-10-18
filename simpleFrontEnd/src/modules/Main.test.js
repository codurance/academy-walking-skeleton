import {Main} from './Main'
import {act, render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import * as axios from 'axios';
import {when} from 'jest-when';

jest.mock('axios');

describe('on Main loaded', () => {
    beforeEach(async () => {
        await render(<Main/>);
    });

    it('should display welcome text', () => {
        expect(screen.getByText('This is a simple webpage')).toBeInTheDocument();
        expect(screen.getByText('Click this button to get user data:')).toBeInTheDocument();
    });
});