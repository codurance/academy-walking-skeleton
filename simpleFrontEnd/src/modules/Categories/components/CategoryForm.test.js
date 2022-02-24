import { render, screen } from '@testing-library/react';
import {CategoryForm} from "./CategoriesForm";


describe('CategoryFormShould', ()=>{

    beforeEach(()=>{
        render(<CategoryForm />);
    })

    it('render expected inputs in the form', () =>{
        const name = screen.getByLabelText('Name:')
        const description = screen.getByLabelText('Description:')
        const picture = screen.getByLabelText('Picture:')

        expect(name).toBeInTheDocument()
        expect(description).toBeInTheDocument()
        expect(picture).toBeInTheDocument()

    })
})