import type { ReactNode } from 'react';

export interface ProjectImageProps {
  href: string;
  alt: string;
  heading?: string;
  src?: string;
  icon?: ReactNode;
  className?: string;
}

const ProjectImage = ({ href, alt, heading, src, icon, className }: ProjectImageProps) => {
  let content: ReactNode;

  if (icon) {
    content = icon;
  } else if (!heading) {
    content = (
      <img
        alt={alt}
        src={src}
        width={56}
        height={50}
        className={`${className ?? ''} hidden drop-shadow-[0_0px_10px_rgba(8,126,164,0.2)] sm:inline-block`}
      />
    );
  } else {
    content = <h2 className={`${className ?? ''} hidden text-gray-950 dark:text-white`}>{heading}</h2>;
  }

  return (
    <div className={'shrink-0'}>
      <a href={href} target={'_blank'} rel={'noreferrer nofollow'}>
        {content}
      </a>
    </div>
  );
};

ProjectImage.displayName = 'ProjectImage';

export default ProjectImage;
