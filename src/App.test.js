import { render, screen } from '@testing-library/react';
import DetailsForm from './components/DetailsForm.js';

test('Renders the DetailsForm text', () => {
    render(<DetailsForm />);
    const inputElement = screen.getByText("Details");
    expect(inputElement).toBeInTheDocument();
})
