import { useDispatch, useSelector } from "react-redux";
import { selectContacts, selectIsLoading } from 'redux/contacts/selectors';
import { addContact } from 'redux/contacts/operations';
import { toast } from 'react-hot-toast';
import { Box, Button, Container, TextField } from '@mui/material';
import { AddLoader } from "components/Loader";

export const ContactForm = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(selectContacts);
    const operation = useSelector(selectIsLoading);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const form = e.currentTarget;
        const name = form.elements.name.value;
        const number = form.elements.number.value;

        const newName = contacts.some(contact =>
                contact.name.toLowerCase() === name.toLowerCase());
                if (newName) {
                    toast.error(`${name} is already in contacts`);
                    return;
        }
        if (name === '' || number === '') {
            toast.error('Fields cannot be empty. Enter some data!');
            return;
        }
        try {
            await dispatch(addContact({ name: name, number: number })).unwrap();
            toast.success(`${name} is added to contacts`);
            form.reset();    
        } catch (error) {
            console.log(error)
        }
};

    return (
            <Container maxWidth="sm" sx={{ p: 4, mb: 4,
                bgcolor: '#ffffff',
                borderRadius: '10px',
                boxShadow: 3,
                }}>
                <Box component="form"
                    autoComplete="off"
                    noValidate
                    onSubmit={handleSubmit}>

                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="name"
                        label="Name"
                        name="name"
                    />

                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        type="tel"
                        id="number"
                        label="Phone Number"
                        name="number"
                        />

                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 2, mb: 2 }}
                        size="large">
                    {operation === 'add' ? <AddLoader/> : <>Add contact</>}
                    </Button>
                </Box>
            </Container>
    );
};