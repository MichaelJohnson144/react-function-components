import { render, screen, waitFor } from '@testing-library/react';

import Article, { type ArticleData } from './Article';

const data: ArticleData = {
  title: 'testTitle',
  body: 'testBody',
};

describe('Article Component', () => {
  const testTitle = data.title as string;
  const testBody = data.body as string;

  describe('Rendering', () => {
    it('renders the component successfully', async () => {
      render(<Article />);

      await waitFor(() => {
        const article = screen.getByRole('article');

        expect(article).toBeInTheDocument();
      });
    });
  });

  describe('Props Handling', () => {
    it('accepts a title', async () => {
      render(<Article title={testTitle} />);

      await waitFor(() => {
        const title = screen.queryByText(testTitle);

        expect(title).toBeInTheDocument();
      });
    });

    it('accepts a body of contents', async () => {
      render(<Article body={testBody} />);

      await waitFor(() => {
        const body = screen.queryByText(testBody);

        expect(body).toBeInTheDocument();
      });
    });
  });

  describe('Dynamic Data Handling', () => {
    it('accepts a function that returns data', async () => {
      const getDataContent = async () => Promise.resolve(data);
      render(<Article getDataContent={getDataContent} />);

      await waitFor(() => {
        const title = screen.queryByText(testTitle);
        const body = screen.queryByText(testBody);

        expect(title).toBeInTheDocument();
        expect(body).toBeInTheDocument();
      });
    });

    it('renders a skeleton while the content data loads', async () => {
      const delay = (ms: number): Promise<void> => new Promise((resolve) => setTimeout(resolve, ms));
      const getDataContent = async (): Promise<ArticleData> => {
        await delay(2000);
        return data;
      };
      render(<Article getDataContent={getDataContent} />);

      await waitFor(() => {
        const skeletons = screen.getAllByRole('status', { name: 'Loading skeleton' });

        expect(skeletons.length).toBe(4);
      });

      await delay(1000);
    });
  });
});
