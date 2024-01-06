export interface HeadingProps {
  href: string;
  className?: string;
  heading?: string;
}

const Heading = ({ href, className, heading }: HeadingProps) => {
  return (
    <a href={href} rel={'noreferrer'} target={'_blank'}>
      <h1 className={`${className ?? ''} text-left font-medium text-slate-900 dark:text-slate-200`}>
        {heading}
      </h1>
    </a>
  );
};

export default Heading;
