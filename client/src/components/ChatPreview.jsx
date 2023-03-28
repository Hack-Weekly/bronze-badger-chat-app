import React from 'react';
import PropTypes from 'prop-types';
import { UserCard } from 'components';
import DoubleCheck from 'assets/double-check.svg';

export const ChatPreview = ({ chat }) => {
  const handleBtnClick = () => {};

  return (
    <div
      onClick={() => handleBtnClick()}
      className='p-2 rounded-md transition ease-in-out hover:bg-slate-100 cursor-pointer'
    >
      <UserCard
        user={chat.user}
        content={{
          right: <span className='text-xs text-slate-400'>{chat.message.timestamp}</span>,
          main: (
            <>
              <img className='w-4 text-blue-500' src={DoubleCheck} />
              <span className='text-sm text-slate-400'>{chat.message.text}</span>
            </>
          ),
        }}
      />
    </div>
  );
};

ChatPreview.propTypes = {
  chat: PropTypes.object,
};
