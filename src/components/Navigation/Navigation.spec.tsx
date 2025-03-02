import { render, screen } from '@testing-library/react';

import Navigation from './Navigation';

describe('Navigation Component', () => {
  it('renders the component', () => {
    render(<Navigation />);
    const navigation = screen.getByRole('navigation');

    expect(navigation).toBeInTheDocument();
  });
});
