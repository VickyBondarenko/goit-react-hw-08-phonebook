import React from 'react';
import { Navigate } from 'react-router-dom';
import { selectIsLoggedIn } from '../redux/auth/selectors';
import { useSelector } from 'react-redux';
export const PrivateRoute = ({ children }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  console.log('Render privateRoute component: ', isLoggedIn);
  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }

  return children;
};
