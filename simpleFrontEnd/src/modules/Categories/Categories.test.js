import { render, screen } from '@testing-library/react';
import { Categories } from './Categories'
import * as axios from 'axios';
import { act } from 'react-dom/test-utils';
import userEvent from "@testing-library/user-event";

jest.mock('axios');

const mockCategories = [{ name: "aName", description: "aDescription", picture: "aPicture" }];

const mockFetchCategories = results =>
    axios.get.mockImplementation(() => Promise.resolve({
        data: results
    }));

describe('CategoryListShould', ()=>{

    beforeEach(()=>{
        render(<Categories />);
    })

    it('render the expected items on the page', ()=>{
        const title = screen.getByText('Categories');
        const button = screen.getByRole('button', {name: /newCategory/});
        const newCategoryForm = screen.queryByRole('form', {name: /categoryForm/});

        expect(button).toBeInTheDocument();
        expect(title).toBeInTheDocument();

        expect(newCategoryForm).not.toBeInTheDocument();
    })

    it('render category form when new button clicked', ()=> {
        const button = screen.getByRole('button', {name: /newCategory/});
        button.click();

        const newCategoryForm = screen.getByRole('form', {name: /categoryForm/});

        expect(newCategoryForm).toBeInTheDocument();

    })

    it('shows the list of categories', ()=> {
        const categoryList = screen.getByRole("list", {name: /categoryList/});

        expect(categoryList).toBeInTheDocument();
    })

    it('display retrieved categories as a list', async () => {
        // await mockFetchCategories(mockCategories);
        const expectedTextFromAPI = ['Name: aName', 'Description: aDescription', 'Picture: aPicture'];

        expectedTextFromAPI.forEach(content => {
            expect(screen.getByText(content)).toBeInTheDocument();
        });
    })

    it('shows an update button', ()=> {
        const updateButton = screen.getByRole("button", {name: /updateButton/});

        expect(updateButton).toBeInTheDocument();

    })

})