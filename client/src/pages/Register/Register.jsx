import React, { useState, useEffect } from 'react';
import { Form, Card } from 'components';
import { inputsData, registerFormProps } from 'data';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'hooks/useForm';

export const Register = () => {
  const [initialValues, setInitialValues] = useState({});
  const { values, onChange } = useForm();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get('http://localhost:8080/users')
      .then(response => {
        setInitialValues(response.data);
      })
      .catch((err) => alert(err));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const changedFields = {};
    for (const [key, value] of Object.entries(values)) {
      if (value !== initialValues[key]) {
        changedFields[key] = value;
      }
    }
    axios
      .patch('http://localhost:8080/users', changedFields)
      .then(response => {
        setInitialValues(response.data);
        navigate('/login');
      })
      .catch((err) => alert(err));
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
