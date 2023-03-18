import React from 'react';
import FingerprintIcon from '@mui/icons-material/Fingerprint';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import LockIcon from '@mui/icons-material/Lock';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';

export const Form = () => {
  const iconsColor = '#484848';

  return (
    <form>
      <div className='flex items-center border-2 py-2 px-3 rounded-xl mb-4'>
        <FingerprintIcon sx={{ color: iconsColor }} />
        <input
          className='pl-2 outline-none border-none'
          type='text'
          name=''
          id=''
          placeholder='Username'
        />
      </div>
      <div className='flex items-center border-2 py-2 px-3 rounded-xl mb-4'>
        <AlternateEmailIcon sx={{ color: iconsColor }} />
        <input
          className='pl-2 outline-none border-none'
          type='email'
          name=''
          id=''
          placeholder='Email Address'
        />
      </div>
      <div className='flex items-center border-2 py-2 px-3 rounded-xl mb-4'>
        <LockIcon sx={{ color: iconsColor }} />
        <input
          className='pl-2 outline-none border-none'
          type='password'
          name=''
          id=''
          placeholder='Password'
        />
        <button>
          <RemoveRedEyeIcon fontSize='small' sx={{ color: iconsColor }} />
        </button>
      </div>
      <div className='flex items-center border-2 py-2 px-3 rounded-xl mb-10'>
        <RestartAltIcon sx={{ color: iconsColor }} />
        <input
          className='pl-2 outline-none border-none'
          type='password'
          name=''
          id=''
          placeholder='Confirm password'
        />
        <button>
          <RemoveRedEyeIcon fontSize='small' sx={{ color: iconsColor }} />
        </button>
      </div>
      <button
        type='submit'
        className='block w-full hover:bg-white hover:text-indigo-500 border border-indigo-300 hover:border-indigo-400 transition ease-in-out bg-indigo-600 mt-4 py-2 rounded-xl text-white font-semibold mb-2'
      >
        Sign Up
      </button>
      <p className='text-sm ml-2'>
        Already an user?{' '}
        <a className='hover:text-indigo-500 cursor-pointer transition ease-in-out' href='/login'>
          Log In
        </a>
      </p>
    </form>
  );
};
