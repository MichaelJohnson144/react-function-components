import { startTransition, useActionState, useRef } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import FormField from './FormField/FormField';

interface FormState {
  error: string | null;
  success: { message: string } | null;
}

const getErrorMessage = (error: unknown): string => {
  if (!(error instanceof Error)) {
    return 'An unexpected error occurred. Please try again.';
  }

  const errorMessage = error.message.toLowerCase();
  if (errorMessage.includes('network')) {
    return 'Please check your internet connection and try again.';
  } else if (errorMessage.includes('timeout')) {
    return 'Request timed out. Please try again later.';
  }

  return error.message;
};

const Form = () => {
  const methods = useForm();
  const formDataRef = useRef<Record<string, string> | null>(null);

  const [, submitAction] = useActionState<FormState>(
    async (_: FormState) => {
      if (!formDataRef.current) {
        return { error: null, success: null };
      }

      const formData = formDataRef.current;
      try {
        const response = await fetch('/api/form', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });
        const result = await response.json();

        if (!response.ok) {
          console.error(`${response.status} ${response.statusText}`);
          const errorMessage = getErrorMessage(
            new Error(result.error || 'An unknown error has occurred. Please try again.'),
          );
          return { error: errorMessage, success: null };
        }

        console.log(`${response.status} ${response.statusText}. Your form was submitted successfully.`);
        methods.reset();
        return { error: null, success: result };
      } catch (error: unknown) {
        console.error('An unexpected error has occurred:', error);
        return { error: getErrorMessage(error), success: null };
      }
    },
    { error: null, success: null },
  );

  const onSubmit = (data: Record<string, string>) => {
    formDataRef.current = data;
    startTransition(() => {
      submitAction();
    });
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <FormField />
      </form>
    </FormProvider>
  );
};

export default Form;
