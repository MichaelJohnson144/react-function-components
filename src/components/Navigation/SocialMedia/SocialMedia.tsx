import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const SocialMedia = () => {
  return (
    <div className={'flex gap-4 md:gap-6'}>
      <a
        aria-label={'LinkedIn logomark link'}
        href={'https://www.linkedin.com'}
        target={'_blank'}
        rel={'noreferrer nofollow'}
        className={'flex items-center'}
      >
        <FontAwesomeIcon icon={faLinkedin} className={'text-2xl text-[#0077B5]'} />
      </a>
      <a
        aria-label={'GitHub logomark link'}
        href={'https://github.com'}
        target={'_blank'}
        rel={'noreferrer nofollow'}
        className={'flex items-center'}
      >
        <FontAwesomeIcon icon={faGithub} className={'text-2xl text-gray-950 dark:text-white'} />
      </a>
    </div>
  );
};

SocialMedia.displayName = 'SocialMedia';

export default SocialMedia;
