export interface HeadingProps {
  href: string;
  heading?: string;
  className?: string;
}

const Heading = ({ href, heading, className }: HeadingProps) => {
  return (
    <a href={href} target={'_blank'} rel={'noreferrer nofollow'}>
      <h1 className={`${className ?? ''} text-left font-medium text-gray-950 dark:text-white`}>{heading}</h1>
    </a>
  );
};

Heading.displayName = 'Heading';

export default Heading;
