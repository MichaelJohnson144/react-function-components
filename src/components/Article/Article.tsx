import { type ReactNode, useCallback, useEffect, useState } from 'react';
import Skeleton, { type SkeletonProps } from '@mui/material/Skeleton';

export interface ArticleData {
  title: ReactNode;
  body: ReactNode;
}

export interface ArticleProps {
  getDataContent?: () => Promise<ArticleData>;
  title?: string;
  body?: string;
  className?: string;
  headerClassName?: string;
  paragraphClassName?: string;
}

interface SkeletonProp extends SkeletonProps {}

const ArticleSkeleton = ({ ...rest }: SkeletonProp) => {
  return (
    <Skeleton
      animation={'wave'}
      variant={'text'}
      component={'output'}
      aria-label={'Loading skeleton'}
      className={'w-full dark:!bg-white/10'}
      {...rest}
    />
  );
};

const Article = ({ getDataContent, title, body, className, headerClassName, paragraphClassName }: ArticleProps) => {
  const [data, setData] = useState<ArticleData | null>(null);

  const fetchDataContent = useCallback(async () => {
    const result = await getDataContent?.();
    setData(result ?? { title, body });
  }, [getDataContent, title, body]);

  useEffect(() => {
    fetchDataContent().catch((error) => {
      console.error('Failed to fetch article data:', error);
    });
  }, [fetchDataContent]);

  const renderBodySkeletons = () => Array.from({ length: 3 }, (_, index) => <ArticleSkeleton key={index} />);

  return (
    <article
      className={`${className ?? ''} font-bebas-neue mx-auto flex max-w-screen-2xl flex-col text-gray-950 md:flex-row md:gap-4 dark:text-white`}
    >
      <header
        className={`${headerClassName ?? ''} mb-4 flex items-center justify-center rounded-md text-2xl tracking-widest md:mb-0 md:w-1/3 md:text-5xl xl:w-1/4`}
      >
        {data?.title ?? <ArticleSkeleton />}
      </header>
      <p
        className={`${paragraphClassName ?? ''} tracking-wide text-gray-700 sm:text-xl md:w-2/3 xl:w-3/4 dark:text-gray-300`}
      >
        {data?.body ?? renderBodySkeletons()}
      </p>
    </article>
  );
};

Article.displayName = 'Article';

export default Article;
