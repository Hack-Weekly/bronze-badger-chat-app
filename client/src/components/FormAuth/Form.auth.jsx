import React from 'react';
import PropTypes from 'prop-types';

import { Input } from '../Input';
import { Button } from 'components';
import { authBtnStyles } from 'constants/styles';

export const FormAuth = ({
  inputsData = [],
  headerText = '',
  buttonText = '',
  cta,
  handleSubmit,
  values,
  onChange,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <h1 className='mb-12'>{headerText}</h1>
      <div className='mb-12 flex flex-col gap-4'>
        {inputsData.map((item) => {
          return (
            <Input
              key={item.id}
              value={values[item.name]}
              onChange={onChange}
              {...item}
              required={true}
            />
          );
        })}
      </div>
      <Button type='submit' options={{ sx: authBtnStyles }}>
        <span> {buttonText}</span>
      </Button>
      <p className='text-sm ml-2 text-gray-600 mt-4'>
        {cta.text}{' '}
        <a className='cursor-pointer transition ease-in-out hover:text-indigo-500' href={cta.link}>
          {cta.linkText}
        </a>
      </p>
    </form>
  );
};

FormAuth.propTypes = {
  inputsData: PropTypes.array,
  headerText: PropTypes.node,
  buttonText: PropTypes.string,
  cta: PropTypes.object,
  handleSubmit: PropTypes.func,
  values: PropTypes.object,
  onChange: PropTypes.func,
};
