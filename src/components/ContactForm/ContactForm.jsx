import { FormStyled, Label, Input, Error, Button } from './ContactForm.styled';
import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { useDispatch, useSelector } from "react-redux";
import { selectContacts } from 'redux/contacts/selectors';
import { addContact } from 'redux/contacts/operations';
import { toast } from 'react-hot-toast';

const schema = yup.object().shape({
    name: yup.string().required(),
    number: yup.string().required().min(9),
});

const initialValues = {
    name: '',
    number: ''
};

export const ContactForm = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(selectContacts);

    const handleSubmit = async (values, { resetForm }) => {
        const newName = contacts.some(contact =>
                contact.name.toLowerCase() === values.name.toLowerCase());
                if (newName) {
                    toast.error(`${values.name} is already in contacts`);
                    return;
        }
        try {
            await dispatch(addContact({ name: values.name, number: values.number })).unwrap();
            resetForm();
            toast.success(`${values.name} is added to contacts`);
        } catch (error) {
            console.log(error)
        }
    };

        return (
            <Formik 
                initialValues={initialValues} 
                onSubmit={handleSubmit}
                validationSchema={schema}>
                <FormStyled >
                    <Label htmlFor='name'>Name</Label>
                    <Input type="text" name="name" />
                    <ErrorMessage component={Error} name="name" />

                    <Label htmlFor='number'>Number</Label>
                    <Input type="tel" name="number" />
                    <ErrorMessage component={Error} name="number"/>
                    <Button type="submit">Add contact</Button>
                </FormStyled>
            </Formik>
        );
};