import { useDispatch,  } from 'react-redux';
import { lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import ErrorPage from 'components/ErrorPage/ErrorPage';
import Layout from 'components/Layout/Layout';
import { useAuth } from 'hooks';
import { refresh } from 'redux/auth/operations';
import { Loader } from './Loader';
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';


const HomePage = lazy(() => import('../pages/Home'));
const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/Login'));
const ContactsPage = lazy(() => import('../pages/Contacts'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refresh());
  }, [dispatch]);

  return (
    isRefreshing ? (<Loader/>) :
      (<Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path='/register' element={<PublicRoute><RegisterPage /></PublicRoute>} />
        <Route path='/login' element={<PublicRoute><LoginPage /></PublicRoute>} />
        <Route path='/contacts' element={<PrivateRoute><ContactsPage /></PrivateRoute>} />
        <Route path='*' element={<ErrorPage />} />
      </Route>
    </Routes>)
  
  );
};
