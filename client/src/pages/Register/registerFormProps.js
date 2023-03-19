import { iconsCustomStyle } from '../../res/styles';

import {
  FingerprintIcon,
  AlternateEmailIcon,
  LockIcon,
  RestartAltIcon,
  RemoveRedEyeIcon,
} from '../../res/icons';

export const restFormProps = {
  buttonText: 'Sign Up',
  cta: {
    text: 'Already an user?',
    link: '/login',
    linkText: 'Log in',
  },
};

export const inputItems = [
  {
    iconLeft: FingerprintIcon,
    iconsStyle: iconsCustomStyle,
    type: 'text',
    id: 'username-input',
    placeholder: 'Username',
  },
  {
    iconLeft: AlternateEmailIcon,
    iconsStyle: iconsCustomStyle,
    type: 'email',
    id: 'email-input',
    placeholder: 'Email address',
  },
  {
    iconLeft: LockIcon,
    iconRight: RemoveRedEyeIcon,
    iconsStyle: iconsCustomStyle,
    type: 'password',
    id: 'password-input',
    placeholder: 'Password',
  },
  {
    iconLeft: RestartAltIcon,
    iconRight: RemoveRedEyeIcon,
    iconsStyle: iconsCustomStyle,
    type: 'password-input-x2',
    id: 'password-input-x2-input',
    placeholder: 'Confirm password',
  },
];
