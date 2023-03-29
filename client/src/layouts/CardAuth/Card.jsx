import React from 'react';
import PropTypes from 'prop-types';
import { LeftPanel, RightPanel } from './Panels';
import { FormSwiper } from 'components/FormAuth/Swiper.auth';

export const Card = ({ children }) => {
  return (
    <div className='card md:flex w-full max-w-sm md:max-w-4xl m-4 bg-white shadow-xl rounded-md overflow-hidden'>
      <LeftPanel>{children}</LeftPanel>
      <RightPanel>
        <FormSwiper />
      </RightPanel>
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.element,
};
