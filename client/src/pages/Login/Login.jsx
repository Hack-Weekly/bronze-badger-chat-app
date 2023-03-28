import React, { useCallback, useMemo } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import { FormAuth } from 'components';
import { Card } from 'layouts';
import { inputsData, loginFormProps } from 'data';
import { useForm } from 'hooks/useForm';

const apiClient = axios.create({
  baseURL: 'http://localhost:8080',
});

export const Login = () => {
  const { values, onChange } = useForm();
  const navigate = useNavigate();

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();

      try {
        const { access_token } = await apiClient.post('/login', values);
        localStorage.setItem('token', access_token);
        navigate('/chat');
      } catch (err) {
        alert(err);
      }
    },
    [navigate, values],
  );

  const filteredInputsData = useMemo(() => inputsData.filter(({ login }) => login), []);

  return (
    <div className='flex min-h-screen justify-center items-center'>
      <Card>
        <FormAuth
          inputsData={filteredInputsData}
          handleSubmit={handleSubmit}
          {...loginFormProps}
          values={values}
          onChange={onChange}
        />
      </Card>
    </div>
  );
};
