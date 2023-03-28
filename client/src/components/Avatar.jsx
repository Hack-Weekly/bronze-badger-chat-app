import React from 'react';
import PropTypes from 'prop-types';

export const Avatar = ({ img, alt }) => {
  return (
    <div className='rounded-full w-10 h-10 overflow-hidden'>
      <img src={img} alt={alt + 'avatar'} />
    </div>
  );
};

Avatar.propTypes = {
  img: PropTypes.string,
  alt: PropTypes.string,
};
