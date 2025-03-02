import { Controller, useFormContext } from 'react-hook-form';
import InputAdornment from '@mui/material/InputAdornment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

import { CustomTextField } from '../CustomTextField';
import { fullNamePattern } from '../regEx';

const FullName = () => {
  const {
    control,
    formState: { errors },
    register,
  } = useFormContext();

  return (
    <Controller
      name={'fullName'}
      defaultValue={''}
      control={control}
      render={({ field: { ref, value } }) => (
        <CustomTextField
          id={'fullName'}
          label={'Full Name *'}
          autoComplete={'name'}
          type={'text'}
          inputRef={ref}
          {...register('fullName', {
            pattern: fullNamePattern,
            required: true,
          })}
          error={!!errors.fullName}
          helperText={errors.fullName ? 'Please enter your full name with leading caps ' : ''}
          variant={'outlined'}
          fullWidth
          slotProps={{
            input: {
              endAdornment: (
                <InputAdornment className={'text-2xl !text-pink-400 sm:text-3xl'} position={'end'}>
                  <FontAwesomeIcon icon={faUser} />
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

FullName.displayName = 'FullName';

export default FullName;
