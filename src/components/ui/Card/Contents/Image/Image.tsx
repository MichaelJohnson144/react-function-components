/* If you utilize this component in a Next.js application, you must replace the `<a>`
 and `<img>` tags with the framework's built-in `<Link>` and `<Image>` tags, respectively. */

export interface ProjectImageProps {
  href: string;
  alt: string;
  className?: string;
  src: string;
  heading?: string;
}

const ProjectImage = ({ href, alt, className, src, heading }: ProjectImageProps) => {
  return (
    <div className={'shrink-0'}>
      <a href={href} rel={'noreferrer nofollow'} target={'_blank'}>
        {!heading ? (
          <img
            alt={alt}
            className={`${
              className ?? ''
            } hidden text-slate-900 drop-shadow-[0_0px_10px_rgba(8,126,164,0.2)] dark:text-slate-200 sm:inline-block`}
            height={50}
            src={src}
            width={56}
          />
        ) : (
          <h2 className={`${className ?? ''} hidden sm:inline-block`}>{heading}</h2>
        )}
      </a>
    </div>
  );
};

export default ProjectImage;
