import { ChatBubble } from 'components/ChatBubble';
import { ChatInput } from 'components/ChatInput';
import ResponsiveDrawer from 'components/Drawer';
import { Header } from 'components/Header';
import React from 'react';

export const Chat = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <div className='min-h-screen min-w-screen box-border'>
      <Header handleDrawerToggle={handleDrawerToggle} />
      <div className='flex min-w-screen box-border h-[90vh] max-md:h-[92vh]'>
        <ResponsiveDrawer mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle} />
        <div className='flex flex-col h-full max-md:w-[100vw] w-full p-4'>
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
