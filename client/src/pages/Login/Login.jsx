import React, { useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'hooks/useForm';
import { FormAuth } from 'components';
import { Card } from 'layouts';
import { inputsData, loginFormProps } from 'data';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useSignIn } from 'react-auth-kit';

const apiClient = axios.create({
  baseURL: 'http://localhost:8080',
});

export const Login = () => {
  const { values, onChange } = useForm();
  const signIn = useSignIn();
  const navigate = useNavigate();

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();

      try {
        const { access_token } = await apiClient.post('/login', values);
        if (
          signIn({
            token: access_token,
            expiresIn: 1440,
            tokenType: 'Bearer',
            authState: { email: values.email },
          })
        )
          navigate('/chat');
        else throw new Error('Error during log-in');
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
