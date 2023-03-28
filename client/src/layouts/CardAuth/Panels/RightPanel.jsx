import React from 'react';
import PropTypes from 'prop-types';

export const RightPanel = ({ children }) => {
  return (
    <div className='card-right hidden md:flex md:block w-1/2 items-stretch items-center w-35 py-14 pr-6'>
      {children}
    </div>
  );
};

RightPanel.propTypes = {
  children: PropTypes.element,
};
