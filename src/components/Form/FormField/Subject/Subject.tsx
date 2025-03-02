import { Controller, useFormContext } from 'react-hook-form';
import InputAdornment from '@mui/material/InputAdornment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import { CustomTextField } from '../CustomTextField';
import { nonEmptyPattern } from '../regEx';

const Subject = () => {
  const {
    control,
    formState: { errors },
    register,
  } = useFormContext();

  return (
    <Controller
      name={'subject'}
      defaultValue={''}
      control={control}
      render={({ field: { ref, value } }) => (
        <CustomTextField
          id={'subject'}
          label={'Subject *'}
          autoComplete={'on'}
          type={'text'}
          inputRef={ref}
          {...register('subject', {
            pattern: nonEmptyPattern,
            required: true,
          })}
          error={!!errors.subject}
          helperText={errors.subject ? 'Please enter a subject' : ''}
          variant={'outlined'}
          fullWidth
          slotProps={{
            input: {
              endAdornment: (
                <InputAdornment className={'text-2xl !text-pink-400 sm:text-3xl'} position={'end'}>
                  <FontAwesomeIcon icon={faEnvelope} />
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

Subject.displayName = 'Subject';

export default Subject;
