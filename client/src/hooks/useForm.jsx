import { useState } from 'react';

export const useForm = () => {
  const [values, setValues] = useState({});
  const onChange = (e) => setValues({ ...values, [e.target.name]: e.target.value });

  return {
    values,
    onChange,
  };
};
