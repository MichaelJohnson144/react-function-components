export interface ProjectImageProps {
  href: string;
  alt?: string;
  className?: string;
  src: string;
}

const ProjectImage = ({ href, alt, className, src }: ProjectImageProps) => {
  return (
    <div className={'shrink-0'}>
      <a href={href} rel={'noreferrer'} target={'_blank'}>
        <img
          alt={alt}
          className={`${
            className ?? ''
          } hidden text-slate-900 drop-shadow-[0_0px_10px_rgba(8,126,164,0.2)] sm:inline-block dark:text-slate-200`}
          height={50}
          src={src}
          width={56}
        />
      </a>
    </div>
  );
};

export default ProjectImage;
