import React from 'react';
import { ChatInput, UserCard, Chat } from 'components';
import { ButtonOptions } from 'components/Buttons';
import JohnDoe from 'assets/user-2.jpg';

export const RightPanel = () => {
  const user = {
    name: 'Alex store',
    isActive: true,
    img: JohnDoe,
  };

  return (
    <div className='w-4/6 p-4 flex flex-col justify-between'>
      <div className='flex justify-between gap-2 w-full  rounded-lg p-4 border-b border-slate-200 h-20'>
        <UserCard
          user={user}
          content={{
            main: (
              <span className='text-sm text-slate-400'>
                {user.isActive ? 'Active' : 'Offline'} now
              </span>
            ),
          }}
        />
        <ButtonOptions />
      </div>
      <Chat />
      <ChatInput />
    </div>
  );
};
