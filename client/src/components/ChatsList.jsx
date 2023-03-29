import React from 'react';
import PropTypes from 'prop-types';
import { ChatPreview } from './ChatPreview';

export const ChatsList = ({ chats }) => {
  return (
    <div className='flex flex-col justify-between h-full'>
      {chats.map((chat, index) => {
        return <ChatPreview key={index} chat={chat}></ChatPreview>;
      })}
    </div>
  );
};

ChatsList.propTypes = {
  chats: PropTypes.array,
};
