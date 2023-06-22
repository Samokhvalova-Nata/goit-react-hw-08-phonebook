import { useDispatch,  } from 'react-redux';
import { lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { fetchContacts } from 'redux/contacts/operations';
import ErrorPage from 'components/ErrorPage/ErrorPage';
import Layout from 'components/Layout/Layout';


const HomePage = lazy(() => import('../../pages/Home'));
const RegisterPage = lazy(() => import('../../pages/Register'));
const LoginPage = lazy(() => import('../../pages/Login'));
const ContactsPage = lazy(() => import('../../pages/Contacts'));

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/contacts' element={<ContactsPage />} />
        <Route path='*' element={<ErrorPage />} />
      </Route>
    </Routes>
    </>
    
  );
};
