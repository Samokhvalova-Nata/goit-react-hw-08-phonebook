import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockPersonOutlinedIcon from '@mui/icons-material/LockPersonOutlined';
import Typography from '@mui/material/Typography';
import { useDispatch, useSelector } from 'react-redux';
import { login } from 'redux/auth/operations';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { selectIsAuthLoading } from 'redux/auth/selectors';
import { AddLoader } from "components/Loader";


export function LoginForm() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const authOperation = useSelector(selectIsAuthLoading);

    // console.log('authOperation', authOperation);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        try {
            await dispatch(login({
            email: form.elements.email.value,
            password: form.elements.password.value,
        })).unwrap();
            toast.success(`Welcome, ${form.elements.email.value}`);
            form.reset();
        } catch (error) {
            toast.error('Login error. Please enter correct data')
        }
    };

    return (
        <Grid container component='main'
            sx={{
            minHeight: '80vh',
            marginTop: 1.5,
            marginBottom: 1.5}}>
            <CssBaseline />
            <Grid item xs={false} sm={4} md={7} sx={{
                backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)',
                    backgroundRepeat: 'no-repeat',
                    backgroundColor: (t) =>
                    t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            />
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                <Box sx={{
                    my: 8,
                    mx: 4,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}>
                    <Avatar sx={{ m: 1, bgcolor: '#1976d2' }} >
                        <LockPersonOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5" fontFamily= 'Ubuntu'>
                        Sign in
                    </Typography>
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email"
                            name="email"
                            autoComplete="email"
                            autoFocus
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            {authOperation === 'login' ? <AddLoader/> : <>Sign In</>}
                        </Button>
                        <Grid container justifyContent="center">
                            <Grid item>
                                <Link component="button"
                                    variant="body2"
                                    onClick={() => navigate('/register')}>
                                    Don't have an account? Sign Up
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Grid>
        </Grid>
);
};