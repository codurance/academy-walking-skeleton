import { render, screen } from '@testing-library/react';
import { Categories } from './Categories'

describe('CategoryListShould', ()=>{
    it('render the expected items on the page', ()=>{
        render(<Categories />);

        const title = screen.getByText('Categories');
        const button = screen.getByRole('button');
        const newCategoryForm = screen.queryByRole('form', {accessibleName: 'categoryForm'});

        expect(button).toBeInTheDocument();
        expect(title).toBeInTheDocument();

        expect(newCategoryForm).not.toBeInTheDocument();
    })

    it('render category form when new button clicked', ()=> {
        render(<Categories />);

        const button = screen.getByRole('button');
        button.click();

        const newCategoryForm = screen.getByRole('form', {accessibleName: 'categoryForm'});

        expect(newCategoryForm).toBeInTheDocument();

    })

    it('render expected input in the form', () =>{
        render(<Categories />);

        const button = screen.getByRole('button');
        button.click();

        const name = screen.getByLabelText('name')
        const description = screen.getByLabelText('description')
        const picture = screen.getByLabelText('picture')

        expect(name).toBeInTheDocument()
        expect(description).toBeInTheDocument()
        expect(picture).toBeInTheDocument()

    })

})