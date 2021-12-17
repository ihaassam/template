import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => {
 const token = JSON.parse(localStorage.getItem('userData'))
  return (
    <Route
      {...rest}
      render={(props) =>
       token ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};
export default PrivateRoute;
