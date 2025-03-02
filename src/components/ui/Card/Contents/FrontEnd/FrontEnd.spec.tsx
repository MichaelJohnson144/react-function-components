import { render, screen } from '@testing-library/react';

import { createTestMocks } from '@/mocks/testMocks';
import FrontEnd from './FrontEnd';
import { frontEndTechStack } from './frontEndTechStack.tsx';

vi.mock('./frontEndTechStack', () => ({
  frontEndTechStack: [
    {
      href: 'https://mockHref.domain',
      alt: 'mockAlt',
      src: '/path/to/mockSrc',
      progressBarLimit: 'mockProgressBarLimit',
      gradientColorFrom: 'mockGradientColorFrom',
      gradientColorTo: 'mockGradientColorTo',
      textColor: 'mockTextColor',
      progress: 'mockProgress',
    },
    {
      href: 'https://mockHref-one.domain',
      alt: 'mockAlt-one',
      src: '/path/to/mockSrc-one',
      progressBarLimit: 'mockProgressBarLimit-one',
      gradientColorFrom: 'mockGradientColorFrom-one',
      gradientColorTo: 'mockGradientColorTo-one',
      textColor: 'mockTextColor-one',
      progress: 'mockProgress-one',
    },
  ],
}));

describe('FrontEnd Component', () => {
  let mock = createTestMocks();

  beforeEach(() => {
    vi.clearAllMocks();
    mock = createTestMocks();
  });

  describe('Rendering', () => {
    it('renders the component successfully', () => {
      render(<FrontEnd />);

      frontEndTechStack.forEach((frontEndTechnology) => {
        const technology = screen.getByAltText(frontEndTechnology.alt);

        expect(technology).toBeInTheDocument();
      });
    });
  });

  describe('Interactions', () => {
    it('opens a new tab when a user clicks a technology logomark', async () => {
      render(<FrontEnd />);

      await Promise.all(
        frontEndTechStack.map(async (frontEndTechnology) => {
          const technologyImage = screen.getByAltText(frontEndTechnology.alt);
          const technologyLink = screen.getByRole('link', { name: frontEndTechnology.alt });

          expect(technologyImage).toBeInTheDocument();

          if (technologyLink) {
            await mock.user.click(technologyLink);

            expect(technologyLink).toHaveAttribute('href', frontEndTechnology.href);
            expect(technologyLink).toHaveAttribute('target', '_blank');
          } else {
            throw new Error(`404 Not Found: ${frontEndTechnology.alt}`);
          }
        }),
      );
    });
  });
});
