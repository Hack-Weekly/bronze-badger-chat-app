import React from 'react';
import DoubleCheck from 'assets/double-check.svg';

export const UserCard = () => {
  return (
    <div className='flex items-center gap-2 w-full rounded-lg hover:bg-gray-100 relative p-2'>
      <div className='rounded-full bg-sky-200 w-11 h-11'></div>
      <div>
        <span className='font-bold'>Alex Store</span>
        <div className='flex items-center gap-1'>
          <img className='w-4 text-blue-500' src={DoubleCheck} />
          <span className='text-sm'>Lorem ipsum dolor sit amet,</span>
        </div>
      </div>
      <span className='absolute right-2 top-1 text-xs'>05:15</span>
    </div>
  );
};
