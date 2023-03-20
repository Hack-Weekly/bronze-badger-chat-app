import React from 'react';
import PropTypes from 'prop-types';
import { LeftPane, RightPane } from './Panes';
import { FormSwiper } from 'components/Form/FormSwiper';

export const Card = ({ children }) => {
  return (
    <div className='card md:flex w-full max-w-sm md:max-w-4xl m-4 bg-white shadow-xl rounded-md overflow-hidden'>
      <LeftPane>{children}</LeftPane>
      <RightPane>
        <FormSwiper />
      </RightPane>
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.element,
};
