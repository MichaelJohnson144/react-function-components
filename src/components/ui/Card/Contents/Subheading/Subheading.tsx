export interface SubheadingProps {
  href: string;
  alt: string;
  subHeading?: string;
  src: string;
  className?: string;
}

const Subheading = ({ href, alt, subHeading, src, className }: SubheadingProps) => {
  return (
    <div
      className={`${className ?? ''} font-open-sans mt-2 flex flex-row items-center gap-2 text-gray-950 dark:text-white`}
    >
      <h2 className={'text-left'}>{subHeading}</h2>
      <a href={href} target={'_blank'} rel={'noreferrer nofollow'}>
        <img alt={alt} src={src} width={24} height={24} />
      </a>
    </div>
  );
};

Subheading.displayName = 'Subheading';

export default Subheading;
