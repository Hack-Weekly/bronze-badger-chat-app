import { ChatBubble } from 'components/ChatBubble';
import { ChatInput } from 'components/ChatInput';
import React from 'react';

export const Chat = () => {
  return (
    <div className='min-h-screen min-w-screen box-border'>
      <header className='h-[10vh] max-md:h-[8vh] bg-indigo-600 flex justify-center items-center text-white'>
        Chat App
      </header>
      <div className='flex min-w-screen box-border h-[90vh] max-md:h-[92vh]'>
        <div className='w-[25vw] max-md:hidden bg-indigo-600 opacity-50'></div>
        <div className='flex flex-col h-full max-md:w-[100vw] w-[75vw] p-4'>
          <div className='h-full flex flex-col justify-end py-2'>
            <div className='flex w-full justify-start'>
              <ChatBubble
                msgType='rcvd'
                text='Lorem ipsum'
                timestamp='11:52'
                rcvd={true}
                consecutive={false}
              ></ChatBubble>
            </div>
            <div className='flex w-full justify-end'>
              <ChatBubble
                msgType='sent'
                text='Lorem ipsum'
                timestamp='11:52'
                rcvd={true}
                consecutive={false}
              ></ChatBubble>
            </div>
          </div>
          <ChatInput></ChatInput>
        </div>
      </div>
    </div>
  );
};
