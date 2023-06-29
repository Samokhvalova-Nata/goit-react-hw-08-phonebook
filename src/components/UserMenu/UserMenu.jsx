import { useAuth } from "hooks"
import { useDispatch, useSelector } from "react-redux";
import { logout } from "redux/auth/operations";
import { User } from "./UserMenu.styled";
import { Button } from "@mui/material";
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { styled } from '@mui/material/styles';
import { selectIsAuthLoading } from "redux/auth/selectors";
import { LogoutLoader } from "components/Loader";

const LogoutButton = styled(Button)`
    background-color: #ffffff;
    color: #1976d2;
    border: 1px solid #ffffff;
    font-size: 10px;
    padding: 5px 6px;

    @media (min-width: 600px) {
    font-size: 12px;
    padding: 6px 8px;
    }

    :hover {
    color: #ffffff;
    }
`;

export const UserMenu = () => {
    const { user } = useAuth();
    const dispatch = useDispatch();
    const authOperation = useSelector(selectIsAuthLoading);

    // console.log('authOperation', authOperation)

    return (
        <>
            <User>
                {user.name}
            </User>
            <LogoutButton
                type="button"
                onClick={() => dispatch(logout())} 
                endIcon={authOperation === 'logout' ? <LogoutLoader/> : <ExitToAppIcon/>}>
                Logout
            </LogoutButton>
        </>
    );
};
