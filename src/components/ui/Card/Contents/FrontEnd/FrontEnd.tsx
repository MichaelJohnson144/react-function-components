import type { ReactNode } from 'react';

import { frontEndTechStack } from './frontEndTechStack';

export interface TechnologyProps {
  href: string;
  alt: string;
  src?: string;
  icon?: ReactNode;
}

const TechnologyContent = ({ technology }: { technology: TechnologyProps }) => {
  if (technology.icon) {
    return technology.icon;
  } else if (technology.src) {
    return <img alt={technology.alt} src={technology.src} width={24} height={24} />;
  }

  return <span className={'font-open-sans text-gray-950 dark:text-white'}>{technology.alt}</span>;
};

const FrontEnd = () => {
  return (
    <>
      {frontEndTechStack.map((technology) => (
        <div key={technology.alt}>
          <a href={technology.href} target={'_blank'} rel={'noreferrer nofollow'}>
            <TechnologyContent technology={technology} />
          </a>
        </div>
      ))}
    </>
  );
};

FrontEnd.displayName = 'FrontEnd';

export default FrontEnd;
