import { Container, Titile, SubTitile } from './App.styled';
import { ContactForm } from '../ContactForm';
import { Filter } from '../Filter';
import { ContactList } from '../ContactList';
import { useDispatch, useSelector } from 'react-redux';
import { selectError, selectIsLoading } from 'redux/selectors';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
import { Loader } from '../Loader';
import { Notify } from 'notiflix';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      {error && Notify.failure('Ooops!..Something went wrong. Try to reload page')}
      <Titile>Phonebook</Titile>
      <ContactForm />
      <SubTitile>Contacts</SubTitile>
      <Filter />
      {isLoading && !error && <Loader />}
      <ContactList/>
    </Container>
  );
};
