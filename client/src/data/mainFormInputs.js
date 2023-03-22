import React from 'react';
import { IconButton } from '@mui/material';
import { iconsCustomStyle } from '../constants/styles';

import {
  FingerprintIcon,
  AlternateEmailIcon,
  LockIcon,
  RestartAltIcon,
  RemoveRedEyeIcon,
} from '../constants/icons';

export const inputsData = [
  {
    type: 'text',
    id: 'username-input',
    placeholder: 'Username',
    register: true,
    icons: {
      left: <FingerprintIcon {...iconsCustomStyle} />,
    },
    name: 'username',
  },
  {
    type: 'email',
    id: 'email-input',
    placeholder: 'Email address',
    login: true,
    register: true,
    icons: {
      left: <AlternateEmailIcon {...iconsCustomStyle} />,
    },
    name: 'email',
  },
  {
    type: 'password',
    id: 'password-input',
    placeholder: 'Password',
    register: true,
    login: true,
    icons: {
      left: <LockIcon {...iconsCustomStyle} />,
      right: (
        <IconButton>
          <RemoveRedEyeIcon {...iconsCustomStyle} />
        </IconButton>
      ),
    },
    name: 'password',
  },
  {
    type: 'password',
    id: 'password-input-x2',
    placeholder: 'Confirm password',
    register: true,
    icons: {
      left: <RestartAltIcon {...iconsCustomStyle} />,
      right: (
        <IconButton>
          <RemoveRedEyeIcon {...iconsCustomStyle} />
        </IconButton>
      ),
    },
    name: 'passwordRepeat',
  },
];
