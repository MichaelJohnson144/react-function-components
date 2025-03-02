import { render, screen } from '@testing-library/react';

import Logo from './Logo';

describe('Logo Component', () => {
  it('renders the component', () => {
    render(<Logo />);
    const logo = screen.getByRole('link');

    expect(logo).toBeInTheDocument();
  });
});
