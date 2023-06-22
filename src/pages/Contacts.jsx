import { useSelector } from 'react-redux';
import { selectError, selectIsLoading } from 'redux/contacts/selectors';
import { Loader } from 'components/Loader';
import { ContactForm } from 'components/ContactForm';
import { Filter } from 'components/Filter';
import { ContactList } from 'components/ContactList';
// import { Container, SubTitile, Titile } from './Contacts.styled';


const Contacts = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  return (
    <>
      {/* {error && Notify.failure('Ooops!..Something went wrong. Try to reload page')} */}
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      {isLoading && !error && <Loader />}
      <ContactList />
    </>
  );
};

export default Contacts;