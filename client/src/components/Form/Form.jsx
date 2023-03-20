import React from 'react';
import PropTypes from 'prop-types';

import { Input } from '../Input';
import { Button } from '../Button';
import { primaryButtonClass } from 'constants/styles';

export const Form = ({ inputsData = [], headerText = '', buttonText = '', cta, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <h1 className='mb-12'>{headerText}</h1>
      {inputsData.map((item) => {
        return <Input key={item.id} {...item} />;
      })}
      <Button type='submit' {...primaryButtonClass}>
        {buttonText}
      </Button>
      <p className='text-sm ml-2 text-gray-600'>
        {cta.text}{' '}
        <a className='cursor-pointer transition ease-in-out hover:text-indigo-500' href={cta.link}>
          {cta.linkText}
        </a>
      </p>
    </form>
  );
};

Form.propTypes = {
  inputsData: PropTypes.array,
  headerText: PropTypes.node,
  buttonText: PropTypes.string,
  cta: PropTypes.object,
  handleSubmit: PropTypes.func,
};
