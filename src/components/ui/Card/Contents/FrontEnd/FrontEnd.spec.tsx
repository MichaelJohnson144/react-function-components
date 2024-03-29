import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import FrontEnd from './FrontEnd';
import { frontEndTechStack } from './frontEndTechStack';

/* If you utilize this component in a Next.js application, you must mock the `<Link>`
 and `<Image>` components from `next/link` and `next/image` respectively to prevent `jest`
 from raising a `console.error` like this:

 jest.mock('next/link', () => {
   return ({ href, children }: { href: string; children: ReactNode }) => {
     return (
       <a href={href} rel={'noreferrer nofollow'} target={'_blank'}>
         {children}
       </a>
     );
   };
 });

 jest.mock('next/image', () => {
   return ({ alt, src }: { alt: string, src: string }) => {
     return (
       <picture>
         <img alt={alt} src={src}/>
       </picture>
     );
   };
 });
*/

jest.mock('./frontEndTechStack', () => ({
  frontEndTechStack: [
    {
      name: 'mockName',
      link: 'https://mockLink.domain',
      imageSrc: '/path/to/mockImageSrc',
      progressBarLimit: 'mockProgressBarLimit',
      gradientColorFrom: 'mockGradientColorFrom',
      gradientColorTo: 'mockGradientColorTo',
      textColor: 'mockTextColor',
      progress: 'mockProgress',
    },
    {
      name: 'mockName-one',
      link: 'https://mockLink-one.domain',
      imageSrc: '/path/to/mockImageSrc-one',
      progressBarLimit: 'mockProgressBarLimit-one',
      gradientColorFrom: 'mockGradientColorFrom-one',
      gradientColorTo: 'mockGradientColorTo-one',
      textColor: 'mockTextColor-one',
      progress: 'mockProgress-one',
    },
  ],
}));

describe('FrontEnd Component', () => {
  // Test that the component renders:
  it('should render the component successfully', () => {
    render(<FrontEnd />);
    frontEndTechStack.forEach((frontEndTechnology) => {
      const technology = screen.getByAltText(frontEndTechnology.name);
      expect(technology).toBeInTheDocument();
    });
  });

  // Test that a new tab opens whenever any of the respective technology logomarks gets clicked:
  it('should open a new tab whenever any of the respective technology logomarks gets clicked', async () => {
    const user = userEvent.setup();

    render(<FrontEnd />);
    await Promise.all(
      frontEndTechStack.map(async (frontEndTechnology) => {
        const technologyImage = screen.getByAltText(frontEndTechnology.name);
        const technologyLink = screen.getByRole('link', {
          name: frontEndTechnology.name,
        });
        expect(technologyImage).toBeInTheDocument();
        if (technologyLink) {
          await user.click(technologyLink);
          expect(technologyLink).toHaveAttribute('href', frontEndTechnology.link);
          expect(technologyLink).toHaveAttribute('target', '_blank');
        } else {
          throw new Error(`404 Not Found: ${frontEndTechnology.name}`);
        }
      }),
    );
  });
});
