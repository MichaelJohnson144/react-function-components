import { Controller, useFormContext } from 'react-hook-form';
import InputAdornment from '@mui/material/InputAdornment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAt } from '@fortawesome/free-solid-svg-icons';

import { CustomTextField } from '../CustomTextField';
import { emailPattern } from '../regEx';

const Email = () => {
  const {
    control,
    formState: { errors },
    register,
  } = useFormContext();

  return (
    <Controller
      name={'email'}
      defaultValue={''}
      control={control}
      render={({ field: { ref, value } }) => (
        <CustomTextField
          id={'email'}
          label={'Email *'}
          autoComplete={'email'}
          type={'email'}
          inputRef={ref}
          {...register('email', {
            pattern: emailPattern,
            required: true,
            maxLength: 254,
          })}
          error={!!errors.email}
          helperText={errors.email ? 'Please, enter a valid email address' : ''}
          variant={'outlined'}
          fullWidth
          slotProps={{
            input: {
              endAdornment: (
                <InputAdornment className={'text-2xl !text-pink-400 sm:text-3xl'} position={'end'}>
                  <FontAwesomeIcon icon={faAt} />
                </InputAdornment>
              ),
            },
          }}
          value={value}
        />
      )}
    />
  );
};

Email.displayName = 'Email';

export default Email;
