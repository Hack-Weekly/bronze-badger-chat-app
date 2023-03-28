import React from 'react';
import { UserCard, Button } from 'components';
import { NotificationsIcon } from 'constants/icons';
import JaneDoe from 'assets/user-1.jpg';

export const Navbar = () => {
  return (
    <div className='flex items-center justify-end gap-3 p-4 h-14 shadow-xl bg-slate-200'>
      <Button options={{ sx: { borderRadius: '50%' } }} isLight={true}>
        <NotificationsIcon />
      </Button>
      <div>
        <UserCard user={{ img: JaneDoe }} />
      </div>
    </div>
  );
};
