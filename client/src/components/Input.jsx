import React from 'react';
import PropTypes from 'prop-types';

export const Input = ({ icons, type, placeholder, id, name, value, onChange, required }) => {
  return (
    <>
      <label htmlFor={id} className='sr-only'>
        {placeholder}
      </label>
      <div className='flex justify-between items-center border-2 h-11 px-3 rounded-xl hover:border-indigo-400 transition ease-in-out'>
        {icons?.left}
        <input
          className='w-full pl-2 outline-none border-none '
          type={type}
          id={id}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
        />
        {icons?.right}
      </div>
    </>
  );
};

Input.propTypes = {
  icons: PropTypes.object,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  required: PropTypes.bool,
};
