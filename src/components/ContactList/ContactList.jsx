import { useSelector } from 'react-redux';
import { ContactItem } from '../ContactItem/ContactItem';
import { selectVisibleContacts } from 'redux/contacts/selectors';
import { Box, Container } from '@mui/material';

export const ContactList = () => {
    const visibleContacts = useSelector(selectVisibleContacts);

    return (
        <Container sx={{ mt: 4 }} maxWidth="md">
            <Box sx={{ p: 4,
                bgcolor: '#ffffff',
                borderRadius: '10px',
                boxShadow: 3,}} component='ul'>
                {visibleContacts.map(({ id, name, number }) => (
                <ContactItem
                    key={id}
                    id={id}
                    name={name}
                    number={number}
                />
            ))}
            </Box>
        </Container>
    );
};