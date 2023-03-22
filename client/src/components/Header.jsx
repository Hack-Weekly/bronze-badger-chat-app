import React from 'react';
import PropTypes from 'prop-types';
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton } from '@mui/material';

export const Header = (props) => {
  const clickHandler = () => {
    props.handleDrawerToggle();
  };

  return (
    <header className='h-[10vh] max-md:h-[8vh] w-screen px-4 flex justify-between md:justify-center items-center bg-[#474bff] bg-opacity-25 border-[#474bff] border-b-2'>
      <IconButton
        color='inherit'
        aria-label='open drawer'
        edge='start'
        onClick={clickHandler}
        sx={{ mr: 2, display: { sm: 'none' } }}
      >
        <MenuIcon fontSize='large' />
      </IconButton>

      <div className='max-md:hidden w-[360px]'></div>
      <title className='flex justify-center items-center'>
        <h1 className='text-4xl max-md:text-2xl'>
          badger chat
          <span className='accent'>.</span>
        </h1>
      </title>
      <div className='md:hidden w-[35px]'></div>
    </header>
  );
};

Header.propTypes = {
  handleDrawerToggle: PropTypes.func,
};
