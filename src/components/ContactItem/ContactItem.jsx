import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { toast } from 'react-hot-toast';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { EditModal } from 'components/Modal/Modal';
import { selectIsLoading } from 'redux/contacts/selectors';
import { RemoveLoader } from 'components/Loader';


export const ContactItem = ({ id, name, number }) => {
    const dispatch = useDispatch();
    const [isShowModal, setIsShowModal] = useState(false);
    const operation = useSelector(selectIsLoading);

    const handleDelete = async () => {
        try {
            await dispatch(deleteContact(id)).unwrap();
            toast.success(`${name} was deleted from contacts`)
        } catch (error) {
            console.log(error)
        } 
    };

    const toggleModal = () => setIsShowModal(prev => !prev);

    return (
        <>
            <Grid container spacing={2} columns={16}>
                <Grid item sm={6} >
                    <Typography
                        paragraph
                        fontSize='18px'
                        fontWeight='500'
                        color='#757575'>
                        {name}
                    </Typography>
                </Grid>
                <Grid item xs={4} >
                    <Typography
                        fontSize='18px'
                        color='#212121'
                        paragraph>
                        {number}
                    </Typography>
                </Grid>
                <Grid item xs>
                    <Button
                        type="button"
                        variant="outlined"
                        aria-label="delete"
                        size="small"
                        color="primary"
                        startIcon={operation === id ? <RemoveLoader /> : <DeleteIcon/>}
                        onClick={handleDelete}>
                        {operation === id ? 'Deleting...' : 'Delete'}
                    </Button>
                </Grid>
                <Grid item xs>
                    <Button
                        type="button"
                        variant="contained"
                        aria-label="edit"
                        size="small"
                        color="primary"
                        startIcon={<EditIcon />}
                        onClick={toggleModal}>
                        Edit
                    </Button>
                </Grid>
            </Grid>
            {isShowModal &&
                <EditModal
                onClose={toggleModal}
                id={id}
                name={name}
                number={number}
                isOpen={isShowModal} />
            }
        </>
    );
};

ContactItem.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
};
