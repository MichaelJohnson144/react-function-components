import { ReactNode } from 'react';

export interface DescriptionListProps {
  className?: string;
  description?: string;
  details?: string;
  subDescription?: string;
  subDetails: ReactNode;
}

const DescriptionList = ({
  className,
  description,
  details,
  subDescription,
  subDetails,
}: DescriptionListProps) => {
  return (
    <dl
      className={`${
        className ?? ''
      } mt-6 flex gap-6 text-left font-medium tracking-wide text-slate-900 dark:text-slate-200`}
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

export default DescriptionList;
