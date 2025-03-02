import { Controller, useFormContext } from 'react-hook-form';

import { CustomTextField } from '../CustomTextField';
import { nonEmptyPattern } from '../regEx';

const Message = () => {
  const {
    control,
    formState: { errors },
    register,
  } = useFormContext();

  return (
    <Controller
      name={'message'}
      defaultValue={''}
      control={control}
      render={({ field: { ref, value } }) => (
        <CustomTextField
          id={'message'}
          label={'Message *'}
          autoComplete={'off'}
          multiline={true}
          rows={4}
          inputRef={ref}
          {...register('message', {
            pattern: nonEmptyPattern,
            required: true,
          })}
          error={!!errors.message}
          helperText={errors.message ? 'Please enter your message' : ''}
          variant={'outlined'}
          fullWidth
          value={value}
        />
      )}
    />
  );
};

Message.displayName = 'Message';

export default Message;
