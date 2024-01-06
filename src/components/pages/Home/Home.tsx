const Home = () => {
  return (
    <article>
      <section
        className={
          'flex min-h-dvh flex-col items-center justify-center bg-zinc-800 font-bebas-neue text-white'
        }
      >
        <h1 className={'font-bebas-neue'}>W E L C O M E!</h1>
        <div className={'flex flex-col p-2 sm:flex-row'}>
          <a
            aria-label={'Redirect to the Vite.js website'}
            href={'https://vitejs.dev/'}
            rel={'noreferrer'}
            target={'_blank'}
          >
            <img
              alt={'React Logomark'}
              className={'w-24 p-2 sm:h-32 sm:w-32'}
              src={'https://vitejs.dev/logo.svg'}
            />
          </a>
          <a
            aria-label={'Redirect to the React website'}
            href={'https://react.dev/'}
            rel={'noreferrer'}
            target={'_blank'}
          >
            <img
              alt={'Vite Logomark'}
              className={'w-24 p-2 sm:h-32 sm:w-32'}
              src={'/react-logomark.svg'}
            />
          </a>
        </div>
        <h2 className={'font-bebas-neue tracking-widest'}>
          PLEASE, CHOOSE FROM ANY OF THE FAMILIES OF &quot;OPINIONATED&quot; REUSABLE REACT FUNCTION
          COMPONENTS
        </h2>
      </section>
    </article>
  );
};

export default Home;
