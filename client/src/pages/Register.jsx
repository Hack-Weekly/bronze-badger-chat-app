import React from 'react';
import { Form } from '../components/Form';

export const Register = () => {
  return (
    <div className='flex min-h-screen justify-center items-center'>
      <div className='card md:flex shadow-xl w-full max-w-2xl p-10 rounded-md mx-4 gap-10'>
        <div className='card-left flex flex-col md:w-1/2 justify-center py-10 items-center'>
          <h1 className='text-gray-800 font-bold text-4xl mb-10'>Sign Up</h1>
          <Form />
        </div>
        <div className='card-right relative overflow-hidden md:flex w-1/2 i justify-around items-center hidden w-35'></div>
      </div>
    </div>
  );
};
