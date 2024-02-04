import { useFormContext, Controller } from 'react-hook-form';
import InputAdornment from '@mui/material/InputAdornment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMessage } from '@fortawesome/free-solid-svg-icons';
import { FocusEvent, ChangeEvent } from 'react';

import { CustomTextField } from '../CustomTextField';

const Message = () => {
  const {
    control,
    formState: { errors },
    register,
  } = useFormContext();

  return (
    <Controller
      control={control}
      defaultValue={null}
      name={'message'}
      render={({ field: { ref, value } }) => (
        <CustomTextField
          autoComplete={'off'}
          error={!!errors.message}
          fullWidth={true}
          helperText={errors.message ? 'Please enter your message' : null}
          id={'message'}
          InputProps={{
            endAdornment: (
              <InputAdornment className={'!text-2xl !text-pink-400 sm:!text-3xl'} position={'end'}>
                <FontAwesomeIcon icon={faMessage} />
              </InputAdornment>
            ),
          }}
          inputRef={ref}
          label={'Message *'}
          multiline={true}
          {...register('message', {
            onBlur: (event: FocusEvent<HTMLInputElement>) => event,
            onChange: (event: ChangeEvent<HTMLInputElement>) => event,
            pattern: /.+/g,
            required: true,
            value: value,
          })}
          rows={4}
          variant={'outlined'}
        />
      )}
    />
  );
};

export default Message;
