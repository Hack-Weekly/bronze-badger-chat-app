import React from 'react';
import { Avatar } from './Avatar';
import PropTypes from 'prop-types';

export const UserCard = ({ user, content }) => {
  return (
    <div className='flex justify-between gap-3 w-full'>
      <div className='flex gap-2'>
        <Avatar img={user.img} alt={user.name} />
        <div>
          <span className='font-bold'>{user.name}</span>
          <div className='flex items-center gap-1'>{content.main}</div>
        </div>
      </div>
      {content.right}
    </div>
  );
};

UserCard.propTypes = {
  user: PropTypes.object,
  content: PropTypes.object,
};
