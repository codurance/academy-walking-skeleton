import { render, screen } from '@testing-library/react';
import { CategoryList } from './CategoryList'

describe('CategoryListShould', ()=>{
    it('render the title', ()=>{
        render(<CategoryList />);

        const title = screen.getByText('Categories');

        expect(title).toBeInTheDocument();
    })
})