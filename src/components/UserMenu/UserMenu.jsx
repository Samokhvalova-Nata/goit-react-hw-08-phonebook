import { useAuth } from "hooks"
import { useDispatch } from "react-redux";
import { logout } from "redux/auth/operations";
import { User } from "./UserMenu.styled";
import { Button } from "@mui/material";
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { styled } from '@mui/material/styles';

const LogoutButton = styled(Button)({
    backgroundColor: '#ffffff',
    fontSize: 12,
    '&:hover': {
        backgroundColor: '#6cb0e8',
    }
});

export const UserMenu = () => {
    const { user } = useAuth();
    const dispatch = useDispatch();

    return (
        <>
            <User>
                {user.email}
            </User>
            <LogoutButton
                type="button"
                onClick={() => dispatch(logout())} variant="outlined"
                startIcon={<ExitToAppIcon />}>
                Logout
            </LogoutButton>
        </>
    );
};
