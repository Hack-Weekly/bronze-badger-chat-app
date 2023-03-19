import React from 'react';
import DoneIcon from '@mui/icons-material/Done';
import DoneAllIcon from '@mui/icons-material/DoneAll';

export const ChatBubble = ({ msgType, text, timestamp, rcvd, consecutive }) => {
  return (
    // Different styling for sent/rcvd message
    <div
      className={
        msgType === 'sent'
          ? 'bg-indigo-600 text-white w-fit md:max-w-[60%] max-w-[80%] p-1 pl-3 rounded-xl relative shadow-md'
          : 'bg-indigo-100 text-indigo-600 w-fit md:max-w-[60%] max-w-[80%] p-1 pl-3 rounded-xl relative shadow-md'
      }
    >
      <div className='flex gap-3 flex-row'>
        <div className='pb-3'>{text}</div>
        <div className='flex flex-row font text-xs justify-end items-end'>
          <div className=''>{timestamp}</div>
          {rcvd ? <DoneAllIcon className='max-h-4' /> : <DoneIcon className='max-h-4' />}
        </div>
      </div>
      {/* Arrow will be only on the first of consecutive messages */}
      {!consecutive ? (
        <div>
          {msgType === 'sent' ? (
            <div className='after:h-8 after:w-8 after:bg-transparent after:border-indigo-600 after:border-b-transparent after:border-l-transparent after:border-r-transparent after:border-[1rem] after:absolute after:block after:inset-y-0 after:right-[-1rem]' />
          ) : (
            <div className='after:h-8 after:w-8 after:bg-transparent after:border-indigo-100 after:border-b-transparent after:border-l-transparent after:border-r-transparent after:border-[1rem] after:absolute after:block after:inset-y-0 after:left-[-1rem]' />
          )}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

ChatBubble.propTypes = {
  msgType: String,
  consecutive: Boolean,
  text: String,
  timestamp: String,
  rcvd: Boolean,
};
