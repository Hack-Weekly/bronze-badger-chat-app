import React from 'react';
import PropTypes from 'prop-types';
import { ButtonOpenChat } from './Buttons';

export const ChatsList = ({ chats }) => {
  return (
    <div className='flex flex-col justify-between h-full'>
      {chats.map((chat, index) => {
        return <ButtonOpenChat key={index} chat={chat} />;
      })}
    </div>
  );
};

ChatsList.propTypes = {
  chats: PropTypes.array,
};
