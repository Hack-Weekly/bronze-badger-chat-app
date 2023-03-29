import { ICONS_BASE_COLOR } from 'constants';

export const iconsCustomStyle = {
  sx: {
    color: ICONS_BASE_COLOR,
  },
};

export const authBtnStyles = {
  fontSize: '18px',
  border: 'solid 1px transparent',
  borderRadius: '0.5rem',
  width: '100%',
  '&:hover': { border: 'solid 1px #474bff', color: '#474bff', background: 'white' },
};
