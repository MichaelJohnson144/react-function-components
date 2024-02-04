import { render, waitFor, screen } from '@testing-library/react';

import Card, { CardData } from './Card';

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
   return ({ alt }: { alt: string }) => {
     return (
       <picture>
         <img alt={alt} />
       </picture>
     );
   };
 });
*/

const data: CardData = {
  heading: {
    heading: 'testHeading',
    href: 'https://testHref.domain',
  },
  subHeading: {
    alt: 'testAlt',
    href: 'https://testHref.domain',
    src: '/testSrc.svg|png|jpg',
    subHeading: 'testSubheading',
  },
  image: {
    alt: 'testAlt',
    href: 'https://testHref.domain',
    src: '/testSrc.svg|png|jpg',
  },
  body: { paragraph: 'testParagraph' },
  descriptionList: {
    description: 'testDescription',
    details: 'testDetails',
    subDescription: 'testSubDescription',
    subDetails: 'testSubDetails',
  },
};

describe('Card Component', () => {
  // Test that the component renders:
  it('should render the component successfully', async () => {
    render(<Card />);
    await waitFor(() => {
      const skeletons = screen.getAllByTestId('skeleton');
      skeletons.forEach((skeleton) => {
        expect(skeleton).toBeInTheDocument();
      });
    });
  });

  it('can accept a heading', async () => {
    render(<Card heading={data.heading} />);
    await waitFor(() => {
      const heading = screen.queryByText(data.heading?.heading as string);
      expect(heading).toBeInTheDocument();
    });
  });

  // Test the `subHeading` prop:
  it('can accept a subheading', async () => {
    render(<Card subHeading={data.subHeading} />);
    await waitFor(() => {
      const subHeading = screen.queryByText(data.subHeading?.subHeading as string);
      expect(subHeading).toBeInTheDocument();
    });
  });

  // Test the `image` prop:
  it('can accept an image', async () => {
    render(<Card image={data.image} />);
    await waitFor(() => {
      const images = screen.getAllByAltText(data.image?.alt as string);
      images.forEach((image) => {
        expect(image).toBeInTheDocument();
      });
    });
  });

  // Test the `body` prop:
  it('can accept a body', async () => {
    render(<Card body={data.body} />);
    await waitFor(() => {
      const body = screen.queryByText(data.body?.paragraph as string);
      expect(body).toBeInTheDocument();
    });
  });

  // Test the `descriptionList` prop:
  it('can accept a descriptionList', async () => {
    render(<Card descriptionList={data.descriptionList} />);
    await waitFor(() => {
      const descriptionList = screen.queryByText(data.descriptionList?.description as string);
      expect(descriptionList).toBeInTheDocument();
    });
  });

  // Test the `getDataContent` prop:
  it('can accept a function that returns data', async () => {
    const getDataContent = async () => Promise.resolve(data);

    render(<Card getDataContent={getDataContent} />);

    await waitFor(() => {
      const props = [
        screen.queryByText(data.heading?.heading as string),
        screen.queryByText(data.subHeading?.subHeading as string),
        ...screen.getAllByAltText(data.image?.alt as string),
        screen.queryByText(data.body?.paragraph as string),
        screen.queryByText(data.descriptionList?.description as string),
      ];

      props.forEach((prop) => {
        expect(prop).toBeInTheDocument();
      });
    });
  });

  // Test that the component renders a skeleton while its data loads:
  it('should render a skeleton while the content data loads successfully', async () => {
    jest.useFakeTimers();
    const getDataContent = () => {
      return new Promise<CardData>((resolve) => {
        setTimeout(() => {
          resolve(data);
        }, 1500);
      });
    };

    render(<Card getDataContent={getDataContent} />);
    jest.advanceTimersByTime(500);
    await waitFor(() => {
      const skeletons = screen.getAllByTestId('skeleton');
      expect(skeletons.length).toBe(8);
    });
    jest.useRealTimers();
  });
});
