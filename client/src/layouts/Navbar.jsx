import React from 'react';
import { AdminCard } from 'components';
import { ButtonNotifs } from 'components/Buttons';
import JaneDoe from 'assets/user-1.jpg';

export const Navbar = () => {
  return (
    <div className='flex items-center justify-end gap-3 p-4 h-14 shadow-xl bg-slate-200'>
      <ButtonNotifs />
      <AdminCard user={{ name: 'Jane Doe', img: JaneDoe }} />
    </div>
  );
};
