import { useState } from 'react';
import { useForm, SubmitHandler, FieldValues, FormProvider } from 'react-hook-form';

import FormField from './FormField/FormField';

const Form = () => {
  const [isLoading, setIsLoading] = useState(false);
  const methods = useForm();

  const mockOnSubmit: SubmitHandler<FieldValues> = async (formData) => {
    setIsLoading(true);
    console.log(formData);

    try {
      /* Perform any asynchronous operations within this statement (I.e., `async yourOperation()`),
       and ignore the misuse of promise warning that `{methods.handleSubmit(mockOnSubmit)}`
       continually raises because the function returns a promise instead of void.

       Also,
       I strongly recommend leveraging SWR
       (Derived from `stale-while-revalidate`,
       an HTTP cache invalidation strategy popularized by HTTP RFC 5861),
       an excellent React hooks library for efficient data fetching,
       developed by the talented team behind Next.js, the React framework at Vercel. */
    } catch (error) {
      // Handle any errors that might occur in this statement, for example:
      console.error('Internal Server', error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(mockOnSubmit)}>
        <FormField isLoading={isLoading} />
      </form>
    </FormProvider>
  );
};

export default Form;
