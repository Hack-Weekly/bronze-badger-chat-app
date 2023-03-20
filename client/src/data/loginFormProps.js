import React from 'react';

export const loginFormProps = {
  cta: {
    text: "Don't have an account?",
    link: '/register',
    linkText: 'Sign up',
  },
  buttonText: 'Sign In',
  headerText: (
    <>
      Welcome back <span className='accent'>.</span>
    </>
  ),
};
