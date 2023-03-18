import React from 'react';
import PropTypes from 'prop-types';
import { logo } from '../res/images';

export const Card = ({ content }) => {
  return (
    <div className='card md:flex gap-10 w-full max-w-sm md:max-w-2xl m-4 p-4 md:p-10 bg-white shadow-xl rounded-md'>
      <div className='card-left flex flex-col justify-center items-center md:w-1/2 py-10'>
        <img src={logo}></img>
        {content}
      </div>
      <div className='card-right md:flex w-1/2 justify-around items-center w-35 relative overflow-hidden i hidden'></div>
    </div>
  );
};

Card.propTypes = {
  content: PropTypes.element,
  headerText: PropTypes.string,
};
