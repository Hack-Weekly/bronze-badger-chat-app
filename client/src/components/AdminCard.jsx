import React from 'react';
import { Avatar } from './Avatar';
import PropTypes from 'prop-types';

export const AdminCard = ({ user }) => {
  return (
    <>
      <span className='font-bold'>{user.name}</span>
      <Avatar img={user.img} alt={user.name} />
    </>
  );
};

AdminCard.propTypes = {
  user: PropTypes.object,
};
