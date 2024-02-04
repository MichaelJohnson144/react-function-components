import { render, screen } from '@testing-library/react';

import Textarea from './Textarea';

describe('Textarea UI component', () => {
  // Test that the component renders:
  it('should render the component successfully', () => {
    render(<Textarea />);
    const textarea = screen.getByRole('textbox');
    expect(textarea).toBeInTheDocument();
  });
});
