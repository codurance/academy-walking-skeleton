import { render, screen } from '@testing-library/react';
import { Categories } from './Categories'

describe('CategoryListShould', ()=>{
    it('render the expected items on the page', ()=>{
        render(<Categories />);

        const title = screen.getByText('Categories');
        const button = screen.getByRole('button');
        const newCategoryForm = screen.queryByRole('form', {name: 'categoryForm'});

        expect(button).toBeInTheDocument();
        expect(title).toBeInTheDocument();

        expect(newCategoryForm).not.toBeInTheDocument();
    })

    it('render category form when new button clicked', ()=> {
        render(<Categories />);

        const button = screen.getByRole('button');
        button.click();

        const newCategoryForm = screen.getByRole('form', {name: 'categoryForm'});

        expect(newCategoryForm).toBeInTheDocument();

    })

})