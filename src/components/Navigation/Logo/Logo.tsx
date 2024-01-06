import { handleOnClickPlaceholder } from '../../../utils/placeholderEventHandlers';

const Logo = () => {
  return (
    <a href={'/'} onClick={handleOnClickPlaceholder}>
      <h2 className={'ml-2 font-black text-slate-900 lg:ml-0 dark:text-slate-200'}>
        Your
        <span className={'mx-1.5'} />
        Logo
      </h2>
    </a>
  );
};

export default Logo;
