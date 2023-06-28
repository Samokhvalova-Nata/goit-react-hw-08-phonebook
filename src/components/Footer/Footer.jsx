import { Box, Link, Typography } from "@mui/material";

function Copyright(props) {
    return (
        <Box  color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Typography variant="body2" color="text.secondary">Developed by {' '}
                <Link color="inherit"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/Samokhvalova-Nata">
                    Samokhvalova Nataliia
                </Link>{' '}
                {new Date().getFullYear()}
                {'.'}
            </Typography>
        </Box>
    );
};

export const Footer = () => {
    return (
        <Box component='footer' >
            <Box sx={{
                // marginTop: 2,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                bgcolor: 'rgba(0, 0, 0, 0.07 )',
                }}>
                <Copyright sx={{ my: 1.5 }} />
            </Box>
        </Box>
    );
};