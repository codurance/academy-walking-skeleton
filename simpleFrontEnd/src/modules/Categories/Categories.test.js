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
        const button = screen.getByRole('button');
        const newCategoryForm = screen.queryByRole('form', {accessibleName: 'categoryForm'});

        expect(button).toBeInTheDocument();
        expect(title).toBeInTheDocument();

        expect(newCategoryForm).not.toBeInTheDocument();
    })

    it('render category form when new button clicked', ()=> {
        const button = screen.getByRole('button');
        button.click();

        const newCategoryForm = screen.getByRole('form', {accessibleName: 'categoryForm'});

        expect(newCategoryForm).toBeInTheDocument();

    })

    it('shows the list of categories', ()=> {
        const categoryList = screen.getByRole("list", {accessibleName: "categoryList"});

        expect(categoryList).toBeInTheDocument();
    })

    it('display retrieved categories as a list', async () => {
        await mockFetchCategories(mockCategories);
        const expectedTextFromAPI = ['Name: "aName"', 'Description: "aDescription"', 'Picture: "aPicture"'];

        expectedTextFromAPI.forEach(content => {
            expect(screen.getByText(content)).toBeInTheDocument();
        });
    })

})