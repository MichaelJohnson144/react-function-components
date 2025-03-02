import { render, screen } from '@testing-library/react';

import Textarea from './Textarea';

describe('Textarea UI component', () => {
  it('renders the component', () => {
    render(<Textarea />);
    const textarea = screen.getByRole('textbox');

    expect(textarea).toBeInTheDocument();
  });
});
