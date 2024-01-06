import { frontEndTechStack } from './frontEndTechStack';

const FrontEnd = () => {
  return (
    <>
      {frontEndTechStack.map((technology) => (
        <div key={technology.name}>
          <a href={technology.link} rel={'noreferrer'} target={'_blank'}>
            <img
              alt={technology.name}
              className={'font-open-sans text-slate-900 dark:text-slate-200'}
              height={24}
              src={technology.imageSrc}
              width={24}
            />
          </a>
        </div>
      ))}
    </>
  );
};

export default FrontEnd;
