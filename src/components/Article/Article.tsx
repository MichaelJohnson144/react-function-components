/* If you utilize this component in a Next.js application, you must add React's `use client`
 directive above these import statements or a parent's you may subject it to since the new App Router
 (`app`) leverage React Server Components by default. */

import { ReactNode, useState, useCallback, useEffect, memo } from 'react';
import Skeleton, { SkeletonProps } from '@mui/material/Skeleton';

export type ArticleData = {
  title: ReactNode;
  body: ReactNode;
};

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
      className={'w-full dark:bg-slate-200/15'}
      data-testid={'skeleton'}
      variant={'text'}
      {...rest}
    />
  );
};

const Article = ({
  getDataContent,
  title,
  body,
  className,
  headerClassName,
  paragraphClassName,
}: ArticleProps) => {
  const [data, setData] = useState<ArticleData | null>(null);

  const fetchDataContent = useCallback(async () => {
    const result = await getDataContent?.();
    setData(result ?? { title, body });
  }, [getDataContent, title, body]);

  useEffect(() => {
    fetchDataContent().catch((error) => {
      /* Handle any errors that might occur during the execution of the `fetchDataContent` function here: */
      console.error(error);
    });
  }, [fetchDataContent]);

  return (
    <article
      className={`${
        className ?? ''
      } flex flex-col font-bebas-neue text-slate-900 dark:text-slate-200 md:flex-row md:gap-4`}
    >
      <header
        className={`${headerClassName ?? ''} mb-4 flex items-center justify-center rounded-md text-2xl tracking-widest md:mb-0 md:w-1/3 md:text-5xl xl:w-1/4`}
      >
        {data?.title ?? <ArticleSkeleton />}
      </header>
      <p className={`${paragraphClassName ?? ''} tracking-wide sm:text-xl md:w-2/3 xl:w-3/4`}>
        {data?.body ?? Array.from({ length: 3 }, (_, index) => <ArticleSkeleton key={index} />)}
      </p>
    </article>
  );
};

export default memo(Article);
