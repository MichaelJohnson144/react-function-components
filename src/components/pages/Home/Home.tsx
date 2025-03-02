import ReactLogomark from '@/components/ui/icons';

const Home = () => {
  return (
    <article>
      <section
        className={'font-bebas-neue flex min-h-dvh flex-col items-center justify-center text-gray-950 dark:text-white'}
      >
        <h1 className={'font-bebas-neue'}>W E L C O M E!</h1>
        <div className={'flex flex-col p-2 sm:flex-row'}>
          <a
            aria-label={'Redirect to the Vite.js website'}
            href={'https://vite.dev/'}
            target={'_blank'}
            rel={'noreferrer nofollow'}
          >
            <img
              alt={'Vite Logomark'}
              src={'https://vite.dev/logo.svg'}
              width={24}
              height={24}
              className={'w-24 p-2 sm:size-32'}
            />
          </a>
          <a
            aria-label={'Redirect to the React website'}
            href={'https://react.dev/'}
            target={'_blank'}
            rel={'noreferrer nofollow'}
          >
            <ReactLogomark className={'w-24 p-2 sm:size-32'} />
          </a>
        </div>
        <h2 className={'font-bebas-neue mx-1 tracking-widest sm:mx-0'}>
          PLEASE, CHOOSE FROM ANY OF THE FAMILIES OF "OPINIONATED" REUSABLE REACT FUNCTION COMPONENTS
        </h2>
      </section>
    </article>
  );
};

Home.displayName = 'Home';

export default Home;
