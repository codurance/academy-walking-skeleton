import {fireEvent, render, screen} from '@testing-library/react';
import {CategoryForm} from "./CategoriesForm";


describe('CategoryFormShould', () => {

    const onSubmit = jest.fn()

    beforeEach(() => {
        render(<CategoryForm onSubmit={onSubmit}/>);
    })

    it('render expected inputs in the form', () => {
        const name = screen.getByLabelText('Name:')
        const description = screen.getByLabelText('Description:')
        const picture = screen.getByLabelText('Picture:')

        expect(name).toBeInTheDocument()
        expect(description).toBeInTheDocument()
        expect(picture).toBeInTheDocument()

    })

    it('render the submit button', () => {
        const submitButton = screen.getByRole('button');
        expect(submitButton).toBeInTheDocument()
    })

    it('submits the form data', () => {
        let name = screen.getByLabelText('Name:');
        fireEvent.change(name, {target: {value: 'name'}})

        let description = screen.getByLabelText('Description:');
        fireEvent.change(description, {target: {value: 'description'}})

        let picture = screen.getByLabelText('Picture:');
        fireEvent.change(picture, {target: {value: 'picture'}})

        const submitButton = screen.getByRole('button');
        submitButton.click();

        expect(onSubmit).toHaveBeenCalledWith({
                name: 'name',
                description: 'description',
                picture: 'picture'
            })
    })
})