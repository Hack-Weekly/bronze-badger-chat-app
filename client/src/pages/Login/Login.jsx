import React from 'react';
import { Form, Card } from '../../components';
import { restFormProps, inputItems } from './loginFormProps';

export const Login = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className='flex min-h-screen justify-center items-center'>
      <Card>
        <Form
          headerText={
            <>
              Welcome back <span className='accent'>.</span>
            </>
          }
          inputItems={inputItems}
          handleSubmit={handleSubmit}
          {...restFormProps}
        />
      </Card>
    </div>
  );
};
