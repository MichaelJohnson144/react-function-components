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
}

const CardSkeleton = ({ ...rest }: CardSkeletonProps) => {
  return (
    <Skeleton
      animation={'wave'}
      className={'w-full dark:bg-slate-200/10'}
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
      } relative mx-4 max-w-sm overflow-hidden rounded-lg bg-[#002F4D]/5 p-6 backdrop-blur sm:max-w-screen-sm md:mx-0 lg:p-8 dark:bg-[#002F4D]/60`}
    >
      <div className={'flex items-center justify-between'}>
        <div>
          {data?.heading ? (
            <Heading {...data.heading} className={className} />
          ) : (
            <CardSkeleton height={40} width={224} />
          )}
          {data?.subHeading ? (
            <Subheading {...data.subHeading} className={className} />
          ) : (
            <CardSkeleton height={32} width={112} />
          )}
        </div>
        {data?.image ? (
          <ProjectImage {...data.image} className={className} />
        ) : (
          <CardSkeleton height={60} variant={'circular'} width={60} />
        )}
      </div>
      {data?.body ? (
        <Body {...data.body} className={className} />
      ) : (
        Array.from({ length: 3 }, (_, index) => <CardSkeleton key={index} />)
      )}
      {data?.descriptionList ? (
        <DescriptionList {...data.descriptionList} className={className} />
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
          className ?? ''
        } absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-cyan-500 via-cyan-600 to-cyan-700 drop-shadow-[0_0px_10px_rgba(8,126,164,0.4)]`}
      />
    </div>
  );
};

export default Card;
