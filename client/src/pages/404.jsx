import React from 'react';
import { Link, useRouteError } from 'react-router-dom';
import { Button } from 'components/Button';
import { authBtnStyles } from 'constants/styles';

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className='flex w-screen h-screen flex-col justify-center items-center gap-4'>
      <h1 className='text-3xl font-bold'>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <Link to='/'>
        <Button options={{ sx: { ...authBtnStyles, padding: '0.4rem 2rem' } }}>
          <span>Home</span>
        </Button>
      </Link>
    </div>
  );
}
