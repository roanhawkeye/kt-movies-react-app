import React, { FC } from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';

import { appRoutes } from './appRoutes';
import { AuthStatus } from './store/auth';

export type ProtectedRouteProps = RouteProps & { status: AuthStatus };

export const PrivateRoute: FC<ProtectedRouteProps> = ({
  status,
  ...props
}) => {
  return (
      status === AuthStatus.Success
        ? <Route {...props} />
        : <Redirect to={appRoutes.login} />
  );
};

export const LogInRoute: FC<ProtectedRouteProps> = ({
  status,
  ...props
}) => {
  return (
      status === AuthStatus.Success
        ? <Redirect to={appRoutes.root} />
        : <Route {...props} />
  );
};