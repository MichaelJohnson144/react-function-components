import { render, screen, waitFor } from '@testing-library/react';

import Card, { type CardData } from './Card';

const data: CardData = {
  heading: {
    heading: 'testHeading',
    href: 'https://testHref.domain',
  },
  subHeading: {
    subHeading: 'testSubheading',
    href: 'https://testHref.domain',
    alt: 'testAlt',
    src: '/testSrc.svg|png|jpg',
  },
  image: {
    href: 'https://testHref.domain',
    alt: 'testAlt',
    src: '/testSrc.svg|png|jpg',
  },
  body: {
    paragraph: 'testParagraph',
  },
  descriptionList: {
    description: 'testDescription',
    details: 'testDetails',
    subDescription: 'testSubDescription',
    subDetails: 'testSubDetails',
  },
};

describe('Card Component', () => {
  describe('Rendering', () => {
    it('renders the component skeletons initially', async () => {
      render(<Card />);

      await waitFor(() => {
        const skeletons = screen.getAllByRole('status', { name: 'Loading skeleton' });

        skeletons.forEach((skeleton) => {
          expect(skeleton).toBeInTheDocument();
        });
      });
    });

    it('renders a skeleton while the content data loads', async () => {
      const delay = (ms: number): Promise<void> => new Promise((resolve) => setTimeout(resolve, ms));
      const getDataContent = async (): Promise<CardData> => {
        await delay(1500);
        return data;
      };
      render(<Card getDataContent={getDataContent} />);

      await waitFor(() => {
        const skeletons = screen.getAllByRole('status', { name: 'Loading skeleton' });

        expect(skeletons.length).toBe(8);
      });

      await delay(500);
    });
  });

  describe('Props Handling', () => {
    it('accepts a heading', async () => {
      render(<Card heading={data.heading} />);

      await waitFor(() => {
        const heading = screen.queryByText(data.heading?.heading!);

        expect(heading).toBeInTheDocument();
      });
    });

    it('accepts a subheading', async () => {
      render(<Card subHeading={data.subHeading} />);

      await waitFor(() => {
        const subHeading = screen.queryByText(data.subHeading?.subHeading!);

        expect(subHeading).toBeInTheDocument();
      });
    });

    it('accepts an image', async () => {
      render(<Card image={data.image} />);

      await waitFor(() => {
        const images = screen.getAllByAltText(data.image?.alt!);

        images.forEach((image) => {
          expect(image).toBeInTheDocument();
        });
      });
    });

    it('accepts a body', async () => {
      render(<Card body={data.body} />);

      await waitFor(() => {
        const body = screen.queryByText(data.body?.paragraph!);

        expect(body).toBeInTheDocument();
      });
    });

    it('accepts a descriptionList', async () => {
      render(<Card descriptionList={data.descriptionList} />);

      await waitFor(() => {
        const descriptionList = screen.queryByText(data.descriptionList?.description!);

        expect(descriptionList).toBeInTheDocument();
      });
    });
  });

  describe('Dynamic Data Handling', () => {
    it('accepts a function that returns data', async () => {
      const getDataContent = async () => Promise.resolve(data);
      render(<Card getDataContent={getDataContent} />);

      await waitFor(() => {
        const elements = [
          screen.queryByText(data.heading?.heading!),
          screen.queryByText(data.subHeading?.subHeading!),
          ...screen.getAllByAltText(data.image?.alt!),
          screen.queryByText(data.body?.paragraph!),
          screen.queryByText(data.descriptionList?.description!),
        ];

        elements.forEach((element) => {
          expect(element).toBeInTheDocument();
        });
      });
    });
  });
});
