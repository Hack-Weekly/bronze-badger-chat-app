import React from 'react';
import { Form, Card } from 'components';
import { inputsData, registerFormProps } from 'data';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'hooks/useForm';

const apiClient = axios.create({
  baseURL: 'http://localhost:8080',
});

export const Register = () => {
  const { values, onChange } = useForm();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await apiClient.post('/users', values);
      navigate('/login');
    } catch (err) {
      alert(err);
    }
  };

  return (
    <div className='flex min-h-screen justify-center items-center'>
      <Card>
        <Form
          inputsData={inputsData.filter((item) => item.register)}
          handleSubmit={handleSubmit}
          {...registerFormProps}
          values={values}
          onChange={onChange}
        />
      </Card>
    </div>
  );
};
