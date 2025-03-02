import { render, screen } from '@testing-library/react';

import Form from './Form';

describe('Form Component', () => {
  it('renders the component', () => {
    render(<Form />);
    const form = screen.getByRole('heading');

    expect(form).toBeInTheDocument();
  });
});
