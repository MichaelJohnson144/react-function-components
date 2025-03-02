import { handleOnClickPlaceholder } from '@/utils/placeholderEventHandler';

const Logo = () => {
  return (
    <a href={'/'} onClick={handleOnClickPlaceholder}>
      <h2 className={'font-black text-gray-950 dark:text-white'}>Your Logo</h2>
    </a>
  );
};

Logo.displayName = 'Logo';

export default Logo;
