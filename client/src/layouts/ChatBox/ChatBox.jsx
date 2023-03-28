import React from 'react';
import { LeftPanel } from './LeftPanel/LeftPanel';
import { RightPanel } from './RightPanel/RightPanel';

export const ChatBox = () => {
  return (
    <div className='flex h-full'>
      <LeftPanel />
      <RightPanel />
    </div>
  );
};
