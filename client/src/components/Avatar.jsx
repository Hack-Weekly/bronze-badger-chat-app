import React from 'react';
import PropTypes from 'prop-types';

export const Avatar = ({ img, alt }) => {
  const handleBtnClick = () => {};

  return (
    <button onClick={handleBtnClick} className='rounded-full w-10 h-10 overflow-hidden'>
      <img src={img} alt={alt + 'avatar'} />
    </button>
  );
};

Avatar.propTypes = {
  img: PropTypes.string,
  alt: PropTypes.string,
};
