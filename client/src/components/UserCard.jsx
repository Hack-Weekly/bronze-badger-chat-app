import React from 'react';
import { Avatar } from './Avatar';
import PropTypes from 'prop-types';

export const UserCard = ({ user, content }) => {
  return (
    <div className='flex justify-between gap-3 w-full'>
      <div className='flex gap-2'>
        <Avatar img={user.img} alt={user.name} />
        {user?.name && (
          <div className='text-left'>
            <span className='font-bold'>{user.name}</span>
            {content?.main && (
              <span className='flex items-center gap-1 text-sm text-slate-400'>{content.main}</span>
            )}
          </div>
        )}
      </div>
      {content?.right}
    </div>
  );
};

UserCard.propTypes = {
  user: PropTypes.object,
  content: PropTypes.object,
};
