import { useFormContext, Controller } from 'react-hook-form';
import InputAdornment from '@mui/material/InputAdornment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAt } from '@fortawesome/free-solid-svg-icons';
import { FocusEvent, ChangeEvent } from 'react';

import { CustomTextField } from '../CustomTextField';

const Email = () => {
  const {
    control,
    formState: { errors },
    register,
  } = useFormContext();

  return (
    <Controller
      control={control}
      defaultValue={null}
      name={'email'}
      render={({ field: { ref, value } }) => (
        <CustomTextField
          autoComplete={'email'}
          error={!!errors.email}
          fullWidth={true}
          helperText={errors.email ? 'Please enter a valid email address' : null}
          id={'email'}
          InputProps={{
            endAdornment: (
              <InputAdornment className={'!text-2xl !text-pink-400 sm:!text-3xl'} position={'end'}>
                <FontAwesomeIcon icon={faAt} />
              </InputAdornment>
            ),
          }}
          inputRef={ref}
          label={'Email *'}
          {...register('email', {
            max: 254,
            onBlur: (event: FocusEvent<HTMLInputElement>) => event,
            onChange: (event: ChangeEvent<HTMLInputElement>) => event,
            pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/gim,
            required: true,
            value: value,
          })}
          type={'email'}
          variant={'outlined'}
        />
      )}
    />
  );
};

export default Email;
