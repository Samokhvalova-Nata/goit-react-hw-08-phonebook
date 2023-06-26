import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockPersonOutlinedIcon from '@mui/icons-material/LockPersonOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useDispatch, useSelector } from 'react-redux';
import { register } from 'redux/auth/operations';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { selectIsAuthLoading } from 'redux/auth/selectors';
import { AddLoader } from "components/Loader";

export function RegisterForm() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const authOperation = useSelector(selectIsAuthLoading);

    // console.log('authOperation', authOperation)

    const handleSubmit = async (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        try {
            await dispatch(register({
            name: form.elements.name.value,
            email: form.elements.email.value,
            password: form.elements.password.value,
            })).unwrap();
            form.reset();
            toast.success('Congrats! You have been registred');
        } catch (error) {
            toast.error('User with such data already exist')
        }
    };

    return (
        <Container component='main' maxWidth="xs" sx={{ height: '100vh' }}>
            <CssBaseline />
            <Box
                sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                }}>
                <Avatar sx={{ m: 1, bgcolor: '#1976d2' }}>
                    <LockPersonOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign up
                </Typography>
                <Box component="form" autoComplete="off" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} >
                            <TextField
                                autoComplete="given-name"
                                name="name"
                                required
                                fullWidth
                                id="name"
                                label="Name"
                                autoFocus
                                />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                id="email"
                                label="Email"
                                name="email"
                                autoComplete="email"
                                />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="new-password"
                                />
                        </Grid>
                    </Grid>
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    >
                        {authOperation === 'register' ? <AddLoader/> : <>Sign Up</>}
                </Button>
                <Grid container justifyContent="center">
                    <Grid item>
                        <Link component="button"
                            variant="body2"
                            onClick={() => navigate('/login')}>
                            Already have an account? Sign in
                        </Link>
                    </Grid>
                </Grid>
                </Box>
            </Box>
        </Container>
);
};