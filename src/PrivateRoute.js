import React from 'react';
import { Redirect, Route } from 'react-router-dom';

function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        sessionStorage.getItem('id') ? (
          <Component {...props} />
        ) : (
          <Redirect to="/authentication/login/" />
        )
      }
    />
  );
}

export default PrivateRoute;

