import type { ReactNode } from 'react';

export interface DescriptionListProps {
  description: string;
  details: string;
  subDescription: string;
  subDetails: ReactNode;
  className?: string;
}

const DescriptionList = ({ description, details, subDescription, subDetails, className }: DescriptionListProps) => {
  return (
    <dl
      className={`${className ?? ''} mt-6 flex gap-6 text-left font-medium tracking-wide text-gray-700 dark:text-gray-400`}
    >
      <div className={'flex flex-col-reverse'}>
        <dt className={'mt-2'}>{description}</dt>
        <dd className={'text-sm'}>{details}</dd>
      </div>
      <div className={'flex flex-col-reverse'}>
        <dt className={'mt-2'}>{subDescription}</dt>
        <dd className={'flex flex-row flex-nowrap items-center space-x-4'}>{subDetails}</dd>
      </div>
    </dl>
  );
};

DescriptionList.displayName = 'DescriptionList';

export default DescriptionList;
