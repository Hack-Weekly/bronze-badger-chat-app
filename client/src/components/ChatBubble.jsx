import React from 'react';
import PropTypes from 'prop-types';
import { DoneIcon, DoneAllIcon } from 'constants/icons';

export const ChatBubble = ({ msg }) => {
  const bubbleClass = {
    sent: 'bg-indigo-600 text-white',
    rcvd: 'bg-indigo-100 text-indigo-600',
  };

  const pseudoClass = {
    sent: 'after:border-indigo-600 after:right-[-1rem]',
    rcvd: 'after:border-indigo-100 after:left-[-1rem]',
  };

  return (
    <div className={`flex ${msg.type === 'sent' ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`flex p-1 pl-3 md:max-w-[60%] max-w-[80%] rounded-xl relative shadow-md mx-4 mb-2 ${
          bubbleClass[msg.type]
        }`}
      >
        <div className='flex gap-3 flex-row'>
          <div className='pb-3'>{msg.text}</div>
          <div className='flex flex-row font text-xs justify-end items-end'>
            <div>{msg.timestamp}</div>
            {msg.rcvd ? <DoneAllIcon className='max-h-4' /> : <DoneIcon className='max-h-4' />}
          </div>
        </div>
        {!msg.consecutive ? (
          <div>
            <div
              className={`after:h-8 after:w-8 after:bg-transparent after:border-b-transparent after:border-l-transparent after:border-r-transparent after:border-[1rem] after:absolute after:block after:inset-y-0 ${
                pseudoClass[msg.type]
              }`}
            ></div>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

ChatBubble.propTypes = {
  msg: PropTypes.object,
};
