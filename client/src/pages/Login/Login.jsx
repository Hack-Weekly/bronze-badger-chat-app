import React from 'react';
import { Form, Card } from 'components';
import { inputsData, loginFormProps } from 'data';

export const Login = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className='flex min-h-screen justify-center items-center'>
      <Card>
        <Form
          inputsData={inputsData.filter((item) => item.login)}
          handleSubmit={handleSubmit}
          {...loginFormProps}
        />
      </Card>
    </div>
  );
};
