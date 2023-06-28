import { Box, Button, ThemeProvider, Typography, createTheme } from "@mui/material";
import '@fontsource/ubuntu/400.css';
import '@fontsource/ubuntu/500.css';
import '@fontsource/ubuntu/700.css';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { useAuth } from "hooks";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

const theme = createTheme({
    palette: {
        primary: {
            main: '#1976d2',
        },
        secondary: {
            main: '#d9d9dc',
        },
    },
    typography: {
        button: {
            fontFamily: 'Ubuntu',
        },
    }
});

const Home = () => {
    const { isLoggedIn } = useAuth();
    const navigate = useNavigate();

    const handleStart = () => {
        isLoggedIn ? 
        navigate('/contacts') : navigate('/login')
    }
    return (
        <ThemeProvider theme={theme}>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <Box conponent='main' sx={{
                backgroundImage: 'linear-gradient(rgba(47, 48, 58, 0.4), rgba(47, 48, 58, 0.4)), url(https://source.unsplash.com/random?wallpapers)',
                backgroundRepeat: 'no-repeat',
                backgroundColor: 'rgba(0, 0, 50, 0.30 )',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                marginTop: 1.5,
                marginBottom: 1.5,
                paddingTop: 10,
                paddingBottom: 10,
                textAlign: 'center',
                minHeight: '100vh',
                }}>
                    <Typography
                        sx={{ mb: 1 }}
                        variant="h2"
                        fontSize='52px'
                        fontWeight='500'
                        fontFamily='Ubuntu'
                        color='secondary'
                        maxWidth='480px'
                        marginLeft='auto'
                        marginRight='auto'
                        >
                        Save all your contacts in
                    </Typography>
                    <Typography
                        sx={{ mb: 6 }}
                        variant="h1"
                        fontSize='56px'
                        fontWeight='700'
                        fontFamily='Ubuntu'
                        color='secondary'
                        maxWidth='480px'
                        marginLeft='auto'
                        marginRight='auto'
                        >
                        Phonebook
                    </Typography>
                    <Button
                        type="button"
                        variant="contained"
                        aria-label="Start"
                        size="large"
                        color="primary"
                        endIcon={<KeyboardArrowRightIcon />}
                        onClick={handleStart}>
                        Get started
                    </Button>
            </Box>
        </ThemeProvider>
    );
};

export default Home;
