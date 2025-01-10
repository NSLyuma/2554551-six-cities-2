import { useSelector } from 'react-redux';
import { PropsWithChildren } from 'react';
import { Navigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { selectAuthorizationStatus } from '../../store/user/user.selectors';

const PrivateRoute = ({ children }: PropsWithChildren) => {
  const authorizationStatus = useSelector(selectAuthorizationStatus);

  if (authorizationStatus === AuthorizationStatus.Auth) {
    return children;
  } else if (authorizationStatus === AuthorizationStatus.Unknown) {
    return null;
  } else {
    return <Navigate to={AppRoute.Login} />;
  }
};

export default PrivateRoute;
