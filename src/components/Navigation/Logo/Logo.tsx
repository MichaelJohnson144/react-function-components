/* If you utilize this component in a Next.js application,
 you must replace the `<a>` tag with the framework's built-in `<Link>` tag. */

import { handleOnClickPlaceholder } from '../../../utils/placeholderEventHandlers';

const Logo = () => {
  return (
    <a href={'/'} onClick={handleOnClickPlaceholder}>
      <h2 className={'ml-2 font-black text-slate-900 dark:text-slate-200 lg:ml-0'}>
        Your&nbsp;&nbsp;Logo
      </h2>
    </a>
  );
};

export default Logo;
