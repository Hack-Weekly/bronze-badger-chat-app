import React, { useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'hooks/useForm';
import { Form, Card } from 'components';
import { inputsData, loginFormProps } from 'data';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:8080',
});

export const Login = () => {
  const { values, onChange } = useForm();
  const navigate = useNavigate();

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();

    try {
      const { access_token } = await apiClient.post('/login', values);
      localStorage.setItem('token', access_token);
      navigate('/chat');
    } catch (err) {
      alert(err);
    }
  }, [navigate, values]);

  const filteredInputsData = useMemo(
    () => inputsData.filter(({ login }) => login),
    []
  );

  return (
    <div className='flex min-h-screen justify-center items-center'>
      <Card>
        <Form
          inputsData={filteredInputsData}
          handleSubmit={handleSubmit}
          values={values}
          onChange={onChange}
          {...loginFormProps}
        />
      </Card>
    </div>
  );
};

Login.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  values: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
};
