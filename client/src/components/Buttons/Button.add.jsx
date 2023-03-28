import React from 'react';
import { IconButton, AddIcon } from 'constants/icons';

export const ButtonAdd = () => {
  return (
    <IconButton
      classes={{ root: 'shadow-xl' }}
      sx={{
        '&:hover': { color: '#474bff' },
        color: 'white',
        backgroundColor: '#474bff',
        borderRadius: '50%',
        width: '60px',
        height: '60px',
      }}
    >
      <AddIcon />
    </IconButton>
  );
};
