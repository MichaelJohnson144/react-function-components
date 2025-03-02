import { memo } from 'react';
import { useFormStatus } from 'react-dom';
import CircularProgress from '@mui/material/CircularProgress';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

import CallToAction from './CallToAction/CallToAction';
import FullName from './FullName/FullName';
import Email from './Email/Email';
import Subject from './Subject/Subject';
import Message from './Message/Message';
import Button from '../../ui/Button/Button';

const SubmitButton = () => {
  const { pending } = useFormStatus();

  const buttonContent = pending ? (
    <>
      <CircularProgress size={20} />
      SUBMITTING
    </>
  ) : (
    <>
      <FontAwesomeIcon icon={faPaperPlane} />
      SUBMIT
    </>
  );

  return (
    <Button
      id={'submitButton'}
      name={'submitButton'}
      type={'submit'}
      aria-label={'Submit the form'}
      disabled={pending}
      variant={'contained'}
      className={'w-full gap-2 !bg-pink-400 !text-gray-950 hover:bg-pink-500'}
    >
      {buttonContent}
    </Button>
  );
};

const FormField = () => {
  return (
    <div
      className={
        'max-w-screen-xl rounded-2xl bg-neutral-400 p-4 drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)] dark:bg-neutral-600'
      }
    >
      <div className={'flex flex-col justify-center gap-4'}>
        <CallToAction />
        <div className={'drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)]'}>
          <div className={'flex flex-col gap-4'}>
            <FullName />
            <div className={'flex flex-col gap-4 sm:flex-row'}>
              <Email />
              <Subject />
            </div>
            <Message />
            <SubmitButton />
          </div>
        </div>
      </div>
    </div>
  );
};

FormField.displayName = 'FormField';

export default memo(FormField);
