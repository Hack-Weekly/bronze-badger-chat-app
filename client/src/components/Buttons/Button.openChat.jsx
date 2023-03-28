import React from 'react';
import PropTypes from 'prop-types';
import { Button, UserCard } from 'components';
import DoubleCheck from 'assets/double-check.svg';

export const ButtonOpenChat = ({ chat }) => {
  const handleClick = () => {};
  return (
    <Button onClick={handleClick}>
      <UserCard
        user={chat.user}
        content={{
          right: <span className='text-xs text-slate-400'>{chat.message.timestamp}</span>,
          main: (
            <div className='flex items-center gap-1'>
              <img className='w-4 text-blue-500' src={DoubleCheck} />
              <span className='text-sm text-slate-400'>{chat.message.text}</span>
            </div>
          ),
        }}
      />
    </Button>
  );
};

ButtonOpenChat.propTypes = {
  chat: PropTypes.object,
};
