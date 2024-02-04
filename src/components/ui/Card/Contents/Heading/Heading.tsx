/* If you utilize this component in a Next.js application,
 you must replace the `<a>` tag with the framework's built-in `<Link>` tag. */

export interface HeadingProps {
  href: string;
  className?: string;
  heading?: string;
}

const Heading = ({ href, className, heading }: HeadingProps) => {
  return (
    <a href={href} rel={'noreferrer nofollow'} target={'_blank'}>
      <h1 className={`${className ?? ''} text-left font-medium text-slate-900 dark:text-slate-200`}>
        {heading}
      </h1>
    </a>
  );
};

export default Heading;
