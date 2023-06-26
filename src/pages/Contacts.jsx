import { useDispatch, useSelector } from 'react-redux';
import { selectError, selectIsLoading, selectVisibleContacts } from 'redux/contacts/selectors';
import { MainLoader } from 'components/Loader';
import { ContactForm } from 'components/ContactForm';
import { Filter } from 'components/Filter';
import { ContactList } from 'components/ContactList';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/operations';
import { Box, Container, Typography } from '@mui/material';
import { Helmet } from 'react-helmet';


const Contacts = () => {
  const error = useSelector(selectError);
  const visibleContacts = useSelector(selectVisibleContacts);
  const dispatch = useDispatch();
  const operation = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
      <Container component='main' maxWidth="md" sx={{ minHeight: '100vh' }}>

      <Helmet>
        <title>Contacts</title>
      </Helmet>
      <Box sx={{
        marginTop: 4,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        }}>

          <Typography
            sx={{ mb: 4 }}
            variant="h1"
            fontSize='44px'
            fontWeight='700'
            align="center"
            gutterBottom>
            Phonebook
          </Typography>
          <ContactForm />

          <Typography
            sx={{ mb: 3 }}
            variant="h2"
            fontSize='34px'
            fontWeight='700'
            align="center"
            gutterBottom>
            Contacts
          </Typography>
        <Filter />

        {operation === 'fetch' && !error && <MainLoader />}
        {visibleContacts.length === 0
          ? (<Typography sx={{ my: 2 }}
                fontSize='18px'
                color='#212121'
                fontWeight='700'
                paragraph
                align="center">You have no contacts yet</Typography>)
          : (<ContactList />)}
      </Box>
    </Container>
  );
};

export default Contacts;
