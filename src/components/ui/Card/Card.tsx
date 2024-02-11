/* If you utilize this component in a Next.js application, you must add React's `use client`
 directive above these import statements or a parent's you may subject it to since the new App Router
 (`app`) leverage React Server Components by default. */

import { useState, useCallback, useEffect } from 'react';
import Skeleton, { SkeletonProps } from '@mui/material/Skeleton';

import Heading, { HeadingProps } from './Contents/Heading/Heading';
import Subheading, { SubheadingProps } from './Contents/Subheading/Subheading';
import ProjectImage, { ProjectImageProps } from './Contents/Image/Image';
import Body, { BodyProp } from './Contents/Body/Body';
import DescriptionList, { DescriptionListProps } from './Contents/DescriptionList/DescriptionList';

interface CardSkeletonProps extends SkeletonProps {}

export type CardData = {
  heading?: HeadingProps;
  subHeading?: SubheadingProps;
  image?: ProjectImageProps;
  body?: BodyProp;
  descriptionList?: DescriptionListProps;
};

export interface CardProps {
  getDataContent?: () => Promise<CardData>;
  heading?: HeadingProps;
  subHeading?: SubheadingProps;
  image?: ProjectImageProps;
  body?: BodyProp;
  descriptionList?: DescriptionListProps;
  className?: string;
  spanClassName?: string;
}

const CardSkeleton = ({ ...rest }: CardSkeletonProps) => {
  return (
    <Skeleton
      animation={'wave'}
      className={'dark:bg-slate-200/15'}
      data-testid={'skeleton'}
      variant={'text'}
      {...rest}
    />
  );
};

const Card = ({
  getDataContent,
  heading,
  subHeading,
  image,
  body,
  descriptionList,
  className,
  spanClassName,
}: CardProps) => {
  const [data, setData] = useState<CardData | null>(null);

  const fetchDataContent = useCallback(async () => {
    const result = await getDataContent?.();
    setData(result ?? { heading, subHeading, image, body, descriptionList });
  }, [getDataContent, heading, subHeading, image, body, descriptionList]);

  useEffect(() => {
    fetchDataContent().catch((error) => {
      /* Handle any errors that might occur during the execution of the `fetchDataContent` function here: */
      console.error(error);
    });
  }, [fetchDataContent]);

  return (
    <div
      className={`${
        className ?? ''
      } relative overflow-hidden rounded-lg bg-[#002F4D]/5 p-6 backdrop-blur dark:bg-[#002F4D]/60 sm:max-w-screen-sm lg:p-8`}
      /* To ensure optimal display on mobile devices across various browsers within a responsive and adaptive grid system,
       including one with four cards, consider applying the `w-11/12`
       width utility class to the `ClassName.` */
    >
      <div className={'flex items-center justify-between'}>
        <div>
          {data?.heading ? <Heading {...data.heading} /> : <CardSkeleton height={40} width={224} />}
          {data?.subHeading ? (
            <Subheading {...data.subHeading} />
          ) : (
            <CardSkeleton height={32} width={112} />
          )}
        </div>
        {data?.image ? (
          <ProjectImage {...data.image} />
        ) : (
          <CardSkeleton
            className={'!hidden dark:bg-slate-200/15 sm:!inline-block'}
            height={60}
            variant={'circular'}
            width={60}
          />
        )}
      </div>
      {data?.body ? (
        <Body {...data.body} />
      ) : (
        Array.from({ length: 3 }, (_, index) => <CardSkeleton key={index} />)
      )}
      {data?.descriptionList ? (
        <DescriptionList {...data.descriptionList} />
      ) : (
        Array.from({ length: 2 }, (_, index) => (
          <CardSkeleton
            height={index === 0 ? 20 : undefined}
            key={index}
            width={index === 0 ? 254 : 206}
          />
        ))
      )}
      <span
        className={`${
          spanClassName ?? ''
        } absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-cyan-500 via-cyan-600 to-cyan-700 drop-shadow-[0_0px_10px_rgba(8,126,164,0.4)]`}
      />
    </div>
  );
};

export default Card;
