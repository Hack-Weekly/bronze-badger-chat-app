import React from 'react';
import { MoreHorizIcon, IconButton } from 'constants/icons';

export const ButtonOptions = () => {
  return (
    <IconButton
      classes={{ root: 'rounded-full bg-white shadow-xl' }}
      sx={{
        width: '40px',
        height: '40px',
      }}
    >
      <MoreHorizIcon />
    </IconButton>
  );
};
