import React from 'react';
import { Form, Card } from 'components';
import { inputsData, loginFormProps } from 'data';
import { useForm } from 'hooks/useForm';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

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
        <Form
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
