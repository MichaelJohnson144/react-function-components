export interface SubheadingProps {
  className?: string;
  subHeading?: string;
  href: string;
  alt?: string;
  src: string;
}

const Subheading = ({ className, subHeading, href, alt, src }: SubheadingProps) => {
  return (
    <div
      className={`${
        className ?? ''
      } mt-2 flex flex-row items-center space-x-2 font-open-sans text-slate-900 dark:text-slate-200`}
    >
      <h2 className={'text-left'}>{subHeading}</h2>
      <a href={href} rel={'noreferrer'} target={'_blank'}>
        <img alt={alt} height={24} src={src} width={24} />
      </a>
    </div>
  );
};

export default Subheading;
