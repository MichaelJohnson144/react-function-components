import { memo, useCallback, useEffect, useState } from 'react';
import Skeleton, { type SkeletonProps } from '@mui/material/Skeleton';

import Heading, { type HeadingProps } from './Contents/Heading/Heading';
import Subheading, { type SubheadingProps } from './Contents/Subheading/Subheading';
import ProjectImage, { type ProjectImageProps } from './Contents/Image/Image';
import Body, { type BodyProp } from './Contents/Body/Body';
import DescriptionList, { type DescriptionListProps } from './Contents/DescriptionList/DescriptionList';

interface CardSkeletonProps extends SkeletonProps {}

export interface CardData {
  heading?: HeadingProps;
  subHeading?: SubheadingProps;
  image?: ProjectImageProps;
  body?: BodyProp;
  descriptionList?: DescriptionListProps;
}

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
      variant={'text'}
      component={'output'}
      aria-label={'Loading skeleton'}
      className={'dark:!bg-[#30A1C0]'}
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
      console.error('Failed to fetch card data:', error);
    });
  }, [fetchDataContent]);

  const renderBodySkeletons = () => Array.from({ length: 3 }, (_, index) => <CardSkeleton key={index} />);

  const renderDescriptionListSkeletons = () =>
    Array.from({ length: 2 }, (_, index) => (
      <CardSkeleton key={index} width={index === 0 ? 254 : 206} height={index === 0 ? 20 : undefined} />
    ));

  return (
    <div
      className={`${className ?? ''} relative overflow-hidden rounded-lg bg-[#087EA4]/5 p-8 backdrop-blur sm:max-w-screen-sm dark:bg-[#58C4DC]/20`}
    >
      <div className={'flex items-center justify-between'}>
        <div>
          {data?.heading ? <Heading {...data.heading} /> : <CardSkeleton width={224} height={40} />}
          {data?.subHeading ? <Subheading {...data.subHeading} /> : <CardSkeleton width={112} height={32} />}
        </div>
        {data?.image ? (
          <ProjectImage {...data.image} />
        ) : (
          <CardSkeleton
            variant={'circular'}
            width={60}
            height={60}
            className={'!hidden sm:!inline-block dark:!bg-[#30A1C0]'}
          />
        )}
      </div>
      {data?.body ? <Body {...data.body} /> : renderBodySkeletons()}
      {data?.descriptionList ? <DescriptionList {...data.descriptionList} /> : renderDescriptionListSkeletons()}
      <span
        className={`${spanClassName ?? ''} absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-[#58C4DC] via-[#087EA4] to-cyan-700 drop-shadow-[0_0px_10px_rgba(8,126,164,0.4)]`}
      />
    </div>
  );
};

Card.Skeleton = CardSkeleton;

export default memo(Card);
