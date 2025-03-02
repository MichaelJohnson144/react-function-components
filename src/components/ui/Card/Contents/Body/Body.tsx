export interface BodyProp {
  paragraph?: string;
  className?: string;
}

const Body = ({ paragraph, className }: BodyProp) => {
  return (
    <p
      className={`${className ?? ''} font-open-sans mt-4 max-w-prose text-left tracking-wide text-gray-700 dark:text-gray-300`}
    >
      {paragraph}
    </p>
  );
};

Body.displayName = 'Body';

export default Body;
