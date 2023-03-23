import React from 'react';
import { ChatBubble, ChatInput, UserCard, Input } from 'components';
import { MoreHorizIcon, IconButton, AddIcon, NotificationsIcon, SearchIcon } from 'constants/icons';
import JaneDoe from '../assets/user-1.jpg';
import JohnDoe from '../assets/user-2.jpg';

export const Chat = () => {
  return (
    <div className='flex min-h-screen min-w-screen box-border justify-center p-4'>
      <div className='flex flex-col w-full max-w-screen-xl bg-white shadow-xl rounded-md overflow-hidden'>
        <div className='flex items-center justify-between p-4 h-14 shadow-xl bg-slate-200'>
          <div></div>
          <div className='flex gap-3'>
            <IconButton
              classes={{ root: 'shadow-xl' }}
              sx={{
                '&:hover': { backgroundColor: '#474bff', color: 'white' },
                backgroundColor: 'white',
                color: '#474bff',
                borderRadius: '50%',
              }}
            >
              <NotificationsIcon />
            </IconButton>
            <div className='flex items-center ml-4'>
              <span className='font-bold'>Jane Doe</span>
            </div>
            <div className='rounded-full bg-green-200 w-10 h-10 overflow-hidden'>
              <img src={JaneDoe} alt='' />
            </div>
          </div>
        </div>
        <div className='flex h-full'>
          <div className='flex flex-col w-2/6 border-r border-slate-200 p-4'>
            <div className='flex items-center justify-between p-4 h-20 border-b border-slate-200'>
              <form className='w-full'>
                <Input placeholder='Search...' icons={{ left: <SearchIcon /> }} />
              </form>
            </div>
            <div className='flex flex-col justify-between h-full'>
              <div className='mt-6'>
                <UserCard user={{ img: JohnDoe }} />
                <UserCard user={{ img: JohnDoe }} />
                <UserCard user={{ img: JohnDoe }} />
                <UserCard user={{ img: JohnDoe }} />
                <UserCard user={{ img: JohnDoe }} />
              </div>
              <div className='flex gap-4'>
                <IconButton
                  classes={{ root: 'shadow-xl' }}
                  sx={{
                    '&:hover': { color: '#474bff' },
                    color: 'white',
                    backgroundColor: '#474bff',
                    borderRadius: '50%',
                    width: '60px',
                    height: '60px',
                  }}
                >
                  <AddIcon />
                </IconButton>
              </div>
            </div>
          </div>
          <div className='w-4/6 p-4 flex flex-col justify-between'>
            <div>
              <div className='flex justify-between gap-2 w-full  rounded-lg p-4 border-b border-slate-200 h-20'>
                <div className='flex gap-3'>
                  <div className='rounded-full bg-green-200 w-10 h-10 overflow-hidden'>
                    <img src={JohnDoe} alt='' />
                  </div>
                  <div>
                    <span className='font-bold'>Alex Store</span>
                    <div className='flex items-center gap-1'>
                      <span className='text-sm text-slate-400'>Active now</span>
                    </div>
                  </div>
                </div>
                <IconButton
                  classes={{ root: 'rounded-full bg-white shadow-xl' }}
                  sx={{
                    width: '40px',
                    height: '40px',
                  }}
                >
                  <MoreHorizIcon />
                </IconButton>
              </div>
            </div>
            <div className='h-full p-4 '>
              <div className='flex flex-col justify-end py-2'>
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
            </div>
            <ChatInput />
          </div>
        </div>
      </div>
    </div>
  );
};
