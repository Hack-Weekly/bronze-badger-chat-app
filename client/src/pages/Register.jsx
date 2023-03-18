import React from 'react';
import { Form, Card } from '../components';

export const Register = () => {
  return (
    <div className='flex min-h-screen justify-center items-center'>
      <Card content={<Form />} headerText={'Sign Up'} />
    </div>
  );
};
