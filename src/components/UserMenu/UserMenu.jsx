import { useAuth } from "hooks"
import { useDispatch } from "react-redux";
import { logout } from "redux/auth/operations";

export const UserMenu = () => {
    const { user } = useAuth();
    const dispatch = useDispatch();

    return (
        <>
            <p>{user.email}</p>
            <button type="button" onClick={() => dispatch(logout())}>Logout</button>
        </>
    );
};