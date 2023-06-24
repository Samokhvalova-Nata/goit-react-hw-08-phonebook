import { Box, Container, Typography } from "@mui/material";

const Home = () => {
    return (
        <Container component="main" maxWidth="md">
            <Box sx={{
                marginTop: 3,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                }}>
                <Typography
                    sx={{ mb: 3 }}
                    variant="h1"
                    fontSize='40px'
                    fontWeight='700'
                    align="center"
                    gutterBottom>
                    Phonebook
                </Typography>
            </Box>
        </Container>
    );
};

export default Home;