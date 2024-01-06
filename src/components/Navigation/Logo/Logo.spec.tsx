import { render, screen } from '@testing-library/react';

import Logo from './Logo';

/* If you utilize this component in a Next.js application,
 you must mock the `<Link>` component from `next/link`
 to prevent `jest` from raising a `console.error` like this:

 jest.mock('next/link', () => {
   return ({ href, children }: { href: string; children: ReactNode }) => {
     return <a href={href}>{children}</a>;
   };
 });
*/

describe('Logo Component', () => {
  // Test that the component renders:
  it('should render the component successfully', () => {
    render(<Logo />);
    const logo = screen.getByRole('link');
    expect(logo).toBeInTheDocument();
  });
});
