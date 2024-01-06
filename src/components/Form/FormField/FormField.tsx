import CircularProgress from '@mui/material/CircularProgress';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { memo } from 'react';

import CallToAction from './CallToAction';
import Name from './Name';
import Email from './Email';
import Subject from './Subject';
import Message from './Message';
import Button from '../../ui/Button/Button';

interface FormFieldProp {
  isLoading: boolean;
}

const FormField = ({ isLoading }: FormFieldProp) => {
  return (
    <div
      className={
        'mx-4 rounded-2xl bg-neutral-400 p-4 drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)] dark:bg-neutral-600'
      }
    >
      <CallToAction />
      <div className={'drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)]'}>
        <div className={'flex flex-col space-y-4'}>
          <Name />
          <div className={'space-y-4 sm:flex sm:space-y-0'}>
            <Email />
            <span className={'sm:mx-2'} />
            <Subject />
          </div>
          <Message />
          <Button
            aria-label={'Submit the form'}
            className={'w-full !bg-pink-400 hover:!bg-pink-500 dark:!text-black'}
            color={'inherit'}
            disabled={isLoading}
            id={'submitButton'}
            name={'submitButton'}
            type={'submit'}
            variant={'contained'}
          >
            {isLoading ? (
              <>
                <CircularProgress className={'text-black'} size={20} />
                <span className={'mx-1'} />
                SUBMITTING
              </>
            ) : (
              <>
                <FontAwesomeIcon icon={faPaperPlane} />
                <span className={'mx-1'} />
                SUBMIT
              </>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default memo(FormField);
