import { render, screen } from '@testing-library/react';
import { Categories } from './Categories'

describe('CategoryListShould', ()=>{
    it('render the title', ()=>{
        render(<Categories />);

        const title = screen.getByText('Categories');

        expect(title).toBeInTheDocument();
    })

    it('have a new button', ()=>{
        render(<Categories />);

        const button = screen.getByRole('button')

        expect(button).toBeInTheDocument();
    })
})