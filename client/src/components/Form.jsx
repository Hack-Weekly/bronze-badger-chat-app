import React from 'react';
import { Input } from './Input';
import { Button } from './Button';
import { iconsCustomStyle } from '../res/styles';

import {
  FingerprintIcon,
  AlternateEmailIcon,
  LockIcon,
  RestartAltIcon,
  RemoveRedEyeIcon,
  IconButton,
} from '../res/icons';

export const Form = () => {
  return (
    <form>
      <Input
        iconLeft={<FingerprintIcon {...iconsCustomStyle} />}
        type='text'
        id='username-input'
        placeholder='Username'
      />
      <Input
        iconLeft={<AlternateEmailIcon {...iconsCustomStyle} />}
        type='email'
        id='email-input'
        placeholder='Email Address'
      />
      <Input
        iconLeft={<LockIcon {...iconsCustomStyle} />}
        iconRight={
          <IconButton>
            <RemoveRedEyeIcon fontSize='small' {...iconsCustomStyle} />
          </IconButton>
        }
        type='password'
        id='password-input'
        placeholder='Password'
      />
      <Input
        iconLeft={<RestartAltIcon {...iconsCustomStyle} />}
        iconRight={
          <IconButton>
            <RemoveRedEyeIcon fontSize='small' {...iconsCustomStyle} />
          </IconButton>
        }
        type='password'
        id='password-input-x2'
        placeholder='Confirm password'
      />
      <Button
        type='submit'
        className='w-full mt-4 mb-2 py-2 border border-indigo-300 rounded-xl bg-indigo-600 text-white font-semibold transition ease-in-out hover:border-indigo-400 hover:text-indigo-500 hover:bg-white'
      >
        {'Sign Up'}
      </Button>
      <p className='text-sm ml-2'>
        Already an user?{' '}
        <a className='cursor-pointer transition ease-in-out hover:text-indigo-500' href='/login'>
          Log In
        </a>
      </p>
    </form>
  );
};
