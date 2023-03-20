import React from 'react';
import { Form, Card } from 'components';
import { inputsData, registerFormProps } from 'data';

export const Register = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className='flex min-h-screen justify-center items-center'>
      <Card>
        <Form
          inputsData={inputsData.filter((item) => item.register)}
          handleSubmit={handleSubmit}
          {...registerFormProps}
        />
      </Card>
    </div>
  );
};
