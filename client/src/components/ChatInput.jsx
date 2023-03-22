import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import SendIcon from '@mui/icons-material/Send';

export const ChatInput = (props) => {
  const [text, setText] = useState('');
  const inputRef = useRef(null);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    props.handleSubmit(e, text);
    setText('');
    inputRef.current.value = '';
  };

  return (
    <form
      onSubmit={handleSubmit}
      className='flex justify-between items-center border-2 h-14 py-2 px-3 rounded-xl hover:border-indigo-400 transition ease-in-out bg-white '
    >
      <input
        ref={inputRef}
        onChange={handleChange}
        className='pl-2 h-full outline-none border-none'
      ></input>
      <button type='submit'>
        <SendIcon className='text-indigo-400 min-h-[2rem] min-w-[2rem]' />
      </button>
    </form>
  );
};

ChatInput.propTypes = {
  handleSubmit: PropTypes.func,
};
