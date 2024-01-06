// Feel free to integrate and configure this component with "react-router-dom" at your own leisure

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const SocialMedia = () => {
  return (
    <div className={'mb-2 mt-8 flex space-x-6 md:my-0 md:space-x-10'}>
      <a
        aria-label={'LinkedIn logomark link'}
        className={'flex items-center'}
        href={'https://www.linkedin.com/'}
        rel={'noreferrer'}
        target={'_blank'}
      >
        <FontAwesomeIcon className={'text-2xl text-[#0077B5]'} icon={faLinkedin} />
      </a>
      <a
        aria-label={'GitHub logomark link'}
        className={'flex items-center'}
        href={'https://github.com/'}
        rel={'noreferrer'}
        target={'_blank'}
      >
        <FontAwesomeIcon className={'text-2xl dark:text-white'} icon={faGithub} />
      </a>
    </div>
  );
};

export default SocialMedia;
