import { FC } from 'react';

import { useRouteError, isRouteErrorResponse } from 'react-router-dom';

const ErrorPage: FC = () => {
  const error = useRouteError() as Error;
  console.log('ErrorPage > error : ', error);

  if (isRouteErrorResponse(error)) {
    return (
      <div id="error-page">
        <h1>🔥Oops!🔥</h1>
        <p>Sorry, an unexpected error has occured.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    );
  }

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occured.</p>
      <p>
        <i>{(error as Error).message}</i>
      </p>
    </div>
  );
};

export default ErrorPage;
