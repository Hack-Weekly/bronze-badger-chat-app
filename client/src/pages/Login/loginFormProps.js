import { iconsCustomStyle } from '../../res/styles';
import { AlternateEmailIcon, LockIcon, RemoveRedEyeIcon } from '../../res/icons';

export const restFormProps = {
  buttonText: 'Sign In',
  cta: {
    text: "Don't have an account?",
    link: '/register',
    linkText: 'Sign up',
  },
};

export const inputItems = [
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
];
