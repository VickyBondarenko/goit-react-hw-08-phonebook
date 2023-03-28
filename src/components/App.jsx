import { lazy, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './Layout';
import { useDispatch, useSelector } from 'react-redux';
import { refreshUser } from '../redux/auth/operations';
import { PrivateRoute } from '../hoc/PrivateRoute';
import { PublicRoute } from '../hoc/PublicRoute';
import { selectIsRefreshing } from '../redux/auth/selectors';

const Home = lazy(() => import('../Pages/Home/Home'));
const Registration = lazy(() => import('../Pages/Registration/Registration'));
const Login = lazy(() => import('../Pages/Login/Login'));
const Contacts = lazy(() => import('../Pages/Contacts/Contacts'));

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return isLoading ? (
    <div>
      <h1>Loading...</h1>
    </div>
  ) : (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="/register"
            element={
              <PublicRoute>
                <Registration />
              </PublicRoute>
            }
          />
          <Route
            path="/login"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute>
                <Contacts />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </div>
  );
};
