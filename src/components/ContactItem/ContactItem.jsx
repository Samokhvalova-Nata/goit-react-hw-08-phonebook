import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { toast } from 'react-hot-toast';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useState } from 'react';
import {EditModal} from 'components/Modal/Modal';

const theme = createTheme({
    palette: {
    primary: {
        main: '#1976d2',
    },
    // secondary: {
    //       main: '#11cb5f',
    // },
    },
})

export const ContactItem = ({ id, name, number }) => {
    const dispatch = useDispatch();
    const [isShowModal, setIsShowModal] = useState(false);

    // console.log('isShowModal', isShowModal)

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
        <ThemeProvider theme={theme}>
            <Grid container spacing={4} columns={16}>
                <Grid item xs={6} >
                    <Typography
                        paragraph
                        fontSize='20px'
                        fontWeight='500'
                        color='#757575'>
                        {name}
                    </Typography>
                </Grid>
                <Grid item xs={6} >
                    <Typography
                        fontSize='20px'
                        color='#212121'
                        paragraph>
                        {number}
                    </Typography>
                </Grid>
                <Grid item xs>
                    <IconButton type="button"
                        aria-label="delete"
                    size="small"
                    color="primary"
                        onClick={handleDelete}>
                        <DeleteIcon />
                    </IconButton>
                </Grid>
                <Grid item xs>
                    <IconButton type="button"
                        aria-label="delete"
                        size="small"
                        color="primary"
                        onClick={toggleModal}>
                        <EditIcon />
                    </IconButton>
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
        </ThemeProvider> 
    );
};

ContactItem.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
};