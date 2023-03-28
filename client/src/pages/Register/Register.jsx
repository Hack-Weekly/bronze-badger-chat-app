import React, { useMemo } from 'react';
import { FormAuth} from 'components';
import { Card } from 'layouts';
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

  const filteredInputsData = useMemo(
    () => inputsData.filter(({ register }) => register),
    []
  );

  return (
    <div className='flex min-h-screen justify-center items-center'>
      <Card>
        <Form
          inputsData={filteredInputsData}
          handleSubmit={handleSubmit}
          {...registerFormProps}
          values={values}
          onChange={onChange}
        />
      </Card>
    </div>
  );
};
