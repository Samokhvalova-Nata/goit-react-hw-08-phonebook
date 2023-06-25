import { Box, Button, ThemeProvider, Typography, createTheme } from "@mui/material";
import '@fontsource/ubuntu/500.css';
import '@fontsource/ubuntu/700.css';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { useAuth } from "hooks";
import { useNavigate } from "react-router-dom";

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
})

const Home = () => {
    const { isLoggedIn } = useAuth();
    const navigate = useNavigate();

    const handleStart = () => {
        isLoggedIn ? 
        navigate('/contacts') : navigate('/login')
    }
    return (
        <ThemeProvider theme={theme}>
            <Box component="main" maxWidth="md" sx={{ 
                backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)',
                backgroundRepeat: 'no-repeat',
                backgroundColor: 'rgba(0, 0, 50, 0.30 )',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '100vh',
                paddingLeft: 0,
                paddingRigth: 0,
            }}>

            <Box fullWidth sx={{
                marginTop: 2,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                bgcolor: 'rgba(0, 0, 50, 0.30 )',
                height: '100vh',
                
                }}>
                <Typography
                    sx={{ my: 10 }}
                    variant="h1"
                    fontSize='64px'
                    fontWeight='5700'
                    align="center"
                    fontFamily='Ubuntu'
                        color='secondary'
                    >
                    Save all your 
                    <Typography
                        fontSize='64px'
                        fontWeight='500'
                        fontFamily='Ubuntu'
                        align="center"
                            color='secondary'
                        >
                        contacts in
                    </Typography>
                    <Typography
                        fontSize='74px'
                        fontWeight='700'
                        align="center"
                        fontFamily='Ubuntu'
                        color='secondary'>
                        Phonebook
                    </Typography>
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
        </Box>
        </ThemeProvider>
        
    );
};

export default Home;
