import React from 'react';
import PropTypes from 'prop-types';
import { IconButton } from '@mui/material';
import { Input } from '../Input';
import { Button } from '../Button';
import { primaryButtonClass } from '../../res/styles';

export const Form = ({ inputItems = [], headerText = '', buttonText = '', cta }) => {
  return (
    <form>
      <h1 className='mb-12'>{headerText}</h1>
      {inputItems.map((item) => {
        return (
          <Input
            key={item.id}
            iconLeft={item.iconLeft ? <item.iconLeft {...item.iconsStyle} /> : <></>}
            iconRight={
              item.iconRight ? (
                <IconButton>
                  <item.iconRight {...item.iconsStyle} />
                </IconButton>
              ) : (
                <></>
              )
            }
            type={item.type}
            id={item.id}
            placeholder={item.placeholder}
          />
        );
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
  inputItems: PropTypes.array,
  headerText: PropTypes.node,
  buttonText: PropTypes.string,
  cta: PropTypes.object,
};
