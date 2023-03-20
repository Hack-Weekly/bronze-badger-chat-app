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
    login: true,
    icons: {
      left: <FingerprintIcon {...iconsCustomStyle} />,
    },
    name: 'userName',
  },
  {
    type: 'email',
    id: 'email-input',
    placeholder: 'Email address',
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
    name: 'confirmPassword',
  },
];
