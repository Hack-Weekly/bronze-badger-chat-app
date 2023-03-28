import React from 'react';
import PropTypes from 'prop-types';
import { IconButton } from 'constants/icons';

export const Button = ({ options, isLight, children }) => {
  return (
    <IconButton
      classes={{ root: `shadow-xl transition ease-in-out ${options?.classes}` }}
      sx={
        isLight
          ? {
              '&:hover': { backgroundColor: '#474bff', color: 'white' },
              backgroundColor: 'white',
              color: '#474bff',
              ...options?.sx,
            }
          : {
              '&:hover': { color: '#474bff' },
              color: 'white',
              backgroundColor: '#474bff',
              ...options?.sx,
            }
      }
    >
      {children}
    </IconButton>
  );
};

Button.propTypes = {
  children: PropTypes.element,
  options: PropTypes.object,
  isLight: PropTypes.bool,
};
