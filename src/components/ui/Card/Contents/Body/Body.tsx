export interface BodyProp {
  className?: string;
  paragraph?: string;
}

const Body = ({ className, paragraph }: BodyProp) => {
  return (
    <p
      className={`${
        className ?? ''
      } mt-4 max-w-prose text-left font-open-sans tracking-wide text-slate-900 dark:text-slate-200`}
    >
      {paragraph}
    </p>
  );
};

export default Body;
