import React from 'react';
import PropTypes from 'prop-types';

export const LeftPane = ({ children }) => {
  return (
    <div className='card-left flex flex-col justify-center items-center md:w-1/2 py-14'>
      {children}
    </div>
  );
};

LeftPane.propTypes = {
  children: PropTypes.element,
};
