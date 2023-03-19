import React from 'react';
import PropTypes from 'prop-types';

export const Input = ({ iconLeft, iconRight, type, placeholder, id, name }) => {
  return (
    <>
      <label htmlFor={id} className='sr-only'>
        {placeholder}
      </label>
      <div className='flex justify-between items-center border-2 h-14 py-2 px-3 rounded-xl mb-4 hover:border-indigo-400 transition ease-in-out'>
        {iconLeft}
        <input
          className='w-full pl-2 outline-none border-none '
          type={type}
          id={id}
          name={name}
          placeholder={placeholder}
        />
        {iconRight}
      </div>
    </>
  );
};

Input.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,

  iconLeft: PropTypes.element,
  iconRight: PropTypes.element,
};
