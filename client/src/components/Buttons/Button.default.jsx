import React from 'react';
import PropTypes from 'prop-types';

export const Button = ({ type = 'button', ...rest }) => {
  return <button type={type} {...rest}></button>;
};

Button.propTypes = {
  type: PropTypes.string,
};
