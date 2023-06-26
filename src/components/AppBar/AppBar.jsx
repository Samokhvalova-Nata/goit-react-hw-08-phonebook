import { useAuth } from "hooks";
import AppBar from '@mui/material/AppBar';
import { Toolbar } from "@mui/material";
import { Navigation } from "components/Navigation";
import { UserMenu } from "components/UserMenu";
import { AuthNav } from "components/AuthNav";

export const Bar = () => {
    const { isLoggedIn } = useAuth();

    return (
        <AppBar position="static">
            <Toolbar component='nav'>
                <Navigation />
                {isLoggedIn ? <UserMenu /> : <AuthNav />}
            </Toolbar>
        </AppBar>
    );
};
