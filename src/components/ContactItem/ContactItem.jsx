import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import {Item, Text, Button} from './ContactItem.styled'
import { toast } from 'react-hot-toast';

export const ContactItem = ({ id, name, number }) => {
    const dispatch = useDispatch();
    const handleDelete = async () => {
        try {
            await dispatch(deleteContact(id)).unwrap();
            toast.success(`${name} was deleted from contacts`)
        } catch (error) {
            console.log(error)
        } 
    };

    return (
        <Item>
            <Text>{name}</Text>
            <Text>{number}</Text>
            <Button type='button'
                onClick={handleDelete}>
                Delete
            </Button>
        </Item>
    );
};

ContactItem.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
};