import { render, waitFor, screen } from '@testing-library/react';

import Article, { ArticleData } from './Article';

const data: ArticleData = {
  title: 'testTitle',
  body: 'testBody',
};

describe('Article Component', () => {
  // Test that the component renders:
  it('should render the component successfully', async () => {
    render(<Article />);
    await waitFor(() => {
      const article = screen.getByRole('article');
      expect(article).toBeInTheDocument();
    });
  });

  // Test the `title` prop:
  it('can accept a title', async () => {
    render(<Article title={data.title as string} />);
    await waitFor(() => {
      const title = screen.queryByText(data.title as string);
      expect(title).toBeInTheDocument();
    });
  });

  // Test the `body` prop:
  it('can accept a body of contents', async () => {
    render(<Article body={data.body as string} />);
    await waitFor(() => {
      const body = screen.queryByText(data.body as string);
      expect(body).toBeInTheDocument();
    });
  });

  // Test the `getDataContent` prop:
  it('can accept a function that returns data', async () => {
    const getDataContent = async () => Promise.resolve(data);

    render(<Article getDataContent={getDataContent} />);
    await waitFor(() => {
      const props = [
        screen.queryByText(data.title as string),
        screen.queryByText(data.body as string),
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
      return new Promise<ArticleData>((resolve) => {
        setTimeout(() => {
          resolve(data);
        }, 2000);
      });
    };

    render(<Article getDataContent={getDataContent} />);
    jest.advanceTimersByTime(1000);
    await waitFor(() => {
      const skeletons = screen.getAllByTestId('skeleton');
      expect(skeletons.length).toBe(4);
    });
    jest.useRealTimers();
  });
});
