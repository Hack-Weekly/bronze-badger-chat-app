import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import { FormAuth } from 'components';
import { Card } from 'layouts';
import { inputsData, loginFormProps } from 'data';
import { useForm } from 'hooks/useForm';

export const Login = () => {
  const { values, onChange } = useForm();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:8080/login', values)
      .then((res) => localStorage.setItem('token', res.access_token))
      .then(() => navigate('/chat'))
      .catch((err) => alert(err));
  };

  return (
    <div className='flex min-h-screen justify-center items-center'>
      <Card>
        <FormAuth
          inputsData={inputsData.filter((item) => item.login)}
          handleSubmit={handleSubmit}
          {...loginFormProps}
          values={values}
          onChange={onChange}
        />
      </Card>
    </div>
  );
};
