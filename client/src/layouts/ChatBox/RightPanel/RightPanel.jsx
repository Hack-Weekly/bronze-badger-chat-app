import React from 'react';
import { ChatInput, UserCard, Chat } from 'components';
import { Button } from 'components/Button';
import { MoreHorizIcon } from 'constants/icons';
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
            main: `${user.isActive ? 'Active' : 'Offline'} now`,
          }}
        />
        <Button
          options={{ sx: { borderRadius: '50%', width: '40px', height: '40px' } }}
          isLight={true}
        >
          <MoreHorizIcon />
        </Button>
      </div>
      <Chat />
      <ChatInput />
    </div>
  );
};
