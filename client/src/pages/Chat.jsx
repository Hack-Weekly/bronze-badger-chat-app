import React from 'react';
import { ChatBox } from 'layouts/ChatBox/ChatBox';
import { Navbar } from 'layouts/Navbar';

export const Chat = () => {
  return (
    <div className='flex min-h-screen min-w-screen box-border justify-center p-4'>
      <div className='flex flex-col w-full max-w-screen-xl bg-white shadow-xl rounded-md overflow-hidden'>
        <Navbar />
        <ChatBox />
      </div>
    </div>
  );
};
