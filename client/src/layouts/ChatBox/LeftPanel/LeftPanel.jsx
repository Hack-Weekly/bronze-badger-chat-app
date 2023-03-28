import React from 'react';
import { SearchForm, ChatsList } from 'components';
import { ButtonAdd } from 'components/Buttons';
import JohnDoe from 'assets/user-2.jpg';

export const LeftPanel = () => {
  const chats = [
    {
      user: {
        name: 'Alex Store',
        img: JohnDoe,
      },
      message: {
        text: 'Lorem ipsum',
        timestamp: '05:15',
      },
    },
  ];

  return (
    <div className='flex flex-col w-2/6 border-r border-slate-200 p-4'>
      <SearchForm />
      {chats.length ? (
        <ChatsList chats={chats} />
      ) : (
        <p className='h-full m-auto text-slate-500'>Start a new Chat</p>
      )}
      <ButtonAdd />
    </div>
  );
};
