import React, { useContext } from 'react';
import { Route, Navigate } from 'react-router-dom';
import { AuthContext } from './auth';


const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
    const { user } = useContext(AuthContext);
    return (
      <Route
        {...rest}
        render={(routeProps) =>
          !user ? <Navigate to="/Login" replace={true} />: <RouteComponent {...routeProps} />
        }
      />
    );
  };

  export default PrivateRoute;