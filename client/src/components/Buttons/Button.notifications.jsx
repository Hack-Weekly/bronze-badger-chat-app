import React from 'react';
import { IconButton, NotificationsIcon } from 'constants/icons';

export const ButtonNotifs = () => {
  return (
    <IconButton
      classes={{ root: 'shadow-xl' }}
      sx={{
        '&:hover': { backgroundColor: '#474bff', color: 'white' },
        backgroundColor: 'white',
        color: '#474bff',
        borderRadius: '50%',
      }}
    >
      <NotificationsIcon />
    </IconButton>
  );
};
