import { useDispatch, useSelector } from 'react-redux';
import { selectError, selectIsLoading, selectVisibleContacts } from 'redux/contacts/selectors';
import { Loader } from 'components/Loader';
import { ContactForm } from 'components/ContactForm';
import { Filter } from 'components/Filter';
import { ContactList } from 'components/ContactList';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/operations';
// import { Notify } from 'notiflix';
// import { Container, SubTitile, Titile } from './Contacts.styled';


const Contacts = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
      const visibleContacts = useSelector(selectVisibleContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      {/* {error && Notify.failure('Ooops!..Something went wrong. Try to reload page')} */}
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      {visibleContacts.length === 0 ? (<h2>You have no contacts yet</h2>) :
          (<ContactList />)}
      {isLoading && !error && <Loader />}
    </>
  );
};

export default Contacts;

