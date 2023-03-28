import React from 'react';
import { Input } from './Input';
import { SearchIcon } from 'constants/icons';

export const SearchForm = () => {
  return (
    <div className='flex items-center justify-between p-4 mb-2 h-20 border-b border-slate-200'>
      <form className='w-full'>
        <Input placeholder='Search...' icons={{ left: <SearchIcon /> }} />
      </form>
    </div>
  );
};
