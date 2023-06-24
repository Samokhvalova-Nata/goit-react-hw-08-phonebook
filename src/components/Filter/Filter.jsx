import { useDispatch, useSelector } from 'react-redux';
import { updateFilter } from 'redux/filter/filterSlice';
import { selectFilter } from 'redux/contacts/selectors';
import { Container, TextField, Typography } from '@mui/material';

export const Filter = () => {
    const filter = useSelector(selectFilter);
    const dispatch = useDispatch();

    const handleChangeFilter = (e) => {
        dispatch(updateFilter(e.currentTarget.value))
    };

    return (
        <Container maxWidth="sm">
            <Typography sx={{ mb: 1 }}
                fontSize='22px'
                color='#212121'
                fontWeight='700'
                paragraph
                align="center">
                Find contacts by name
            </Typography>
            <TextField
                sx={{ mb: 1 }}
                margin="normal"
                fullWidth
                name="filter"
                value={filter}
                onChange={handleChangeFilter}/>
        </Container>
    );
};
