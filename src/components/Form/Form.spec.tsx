import { render, screen } from '@testing-library/react';

import Form from './Form';

describe('Form Component', () => {
  // Test that the component renders:
  it('should render the component successfully', () => {
    render(<Form />);
    const form = screen.getByRole('heading');
    expect(form).toBeInTheDocument();
  });
});
