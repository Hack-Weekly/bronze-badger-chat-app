import React from 'react';
import PropTypes from 'prop-types';

export const Card = ({ children }) => {
  return (
    <div className='card md:flex w-full max-w-sm md:max-w-4xl m-4 bg-white shadow-xl rounded-md overflow-hidden'>
      {children}
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.array,
};
