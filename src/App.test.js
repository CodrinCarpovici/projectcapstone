import { render, screen } from '@testing-library/react';
import DetailsForm from './components/DetailsForm.js';

test('Renders the DetailsForm label', () => {
    render(<DetailsForm />);
    const inputElement = screen.getByLabelText("Party Size");
    expect(inputElement).toBeInTheDocument();
})
