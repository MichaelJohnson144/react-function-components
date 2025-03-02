const CallToAction = () => {
  return (
    <section className={'drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)] dark:text-white'}>
      <div className={'drop-shadow-[0_5px_3px_rgba(0,0,0,0.2)]'}>
        <div className={'mb-4 flex items-center justify-center'}>
          <span className={'grow border-x-0 border-b-4 border-t-0 border-solid border-pink-400'} />
          <h1 className={'mx-2 text-4xl text-gray-950 sm:text-5xl dark:text-white'}>C O N T A C T</h1>
          <span className={'grow border-x-0 border-b-4 border-t-0 border-solid border-pink-400'} />
        </div>
        <p className={'font-open-sans tracking-widest text-gray-950 sm:text-lg dark:text-white'}>
          INTERESTED IN <span className={'rounded-xs bg-pink-400 px-0.5 dark:text-gray-950'}>BOOKING ME? GREAT!</span>{' '}
          THEN PLEASE{' '}
          <span className={'rounded-xs bg-pink-400 px-0.5 dark:text-gray-950'}>FILL OUT THE FORM BELOW</span> AND WE
          WILL <span className={'rounded-xs bg-pink-400 px-0.5 dark:text-gray-950'}>GET IN TOUCH</span> SHORTLY
        </p>
      </div>
    </section>
  );
};

CallToAction.displayName = 'CallToAction';

export default CallToAction;
