import { Box, Button, ThemeProvider, Typography, createTheme } from "@mui/material";
import '@fontsource/ubuntu/400.css';
import '@fontsource/ubuntu/500.css';
import '@fontsource/ubuntu/700.css';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { useAuth } from "hooks";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import imgBgd from '../../src/images/bgd.jpg';

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
    },
    breakpoints: {
    values: {
        xs: 300,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1536,
    },
    },
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
                backgroundImage: `linear-gradient(rgba(47, 68, 158, 0.3), rgba(47, 48, 58, 0.3)), url(${imgBgd})`,
                // backgroundImage: 'linear-gradient(rgba(47, 68, 158, 0.3), rgba(47, 48, 58, 0.3)), url(https://source.unsplash.com/random?wallpapers)',
                backgroundRepeat: 'no-repeat',
                backgroundColor: 'rgba(0, 0, 50, 0.30 )',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                marginTop: 1.5,
                marginBottom: 1.5,
                paddingTop: 10,
                paddingBottom: 10,
                textAlign: 'center',
                minHeight: '80vh',
                }}>
                    <Typography
                    sx={{
                        mb: 1,
                        fontSize: {
                            xs: '30px',
                            sm: '40px',
                            md: '52px'
                        }
                    }}
                        variant="h2"
                        fontWeight='500'
                        fontFamily='Ubuntu'
                        color='secondary'
                        maxWidth='480px'
                        marginLeft='auto'
                        marginRight='auto'
                        >
                        Save all your <br/>contacts in
                    </Typography>
                    <Typography
                    sx={{
                        mb: {
                            xs: 2.5,
                            sm: 3,
                            md: 6
                        }, fontSize: {
                            xs: '34px',
                            sm: '44px',
                            md: '56px'
                        }}}
                        variant="h1"
                        fontWeight='700'
                        fontFamily='Ubuntu'
                        color='#ffffff'
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
