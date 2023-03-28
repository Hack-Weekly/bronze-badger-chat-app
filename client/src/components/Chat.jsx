import React from 'react';
import { ChatBubble } from './ChatBubble';

export const Chat = () => {
  const messages = [
    {
      type: 'rcvd',
      text: 'Lorem ipsum',
      timestamp: '11:52',
      rcvd: true,
      consecutive: false,
    },
    {
      type: 'sent',
      text: 'Lorem ipsum',
      timestamp: '11:52',
      rcvd: true,
      consecutive: false,
    },
  ];

  return (
    <div className='h-full p-4 '>
      <div className='flex flex-col py-2'>
        {messages.map((message, index) => {
          return <ChatBubble msg={message} key={index} />;
        })}
      </div>
    </div>
  );
};
