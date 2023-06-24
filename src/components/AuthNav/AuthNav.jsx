import { Link } from "./AuthNav.styled";

export const AuthNav = () => {
    return (
        <>
            <Link to='/login'>Login</Link>
            <Link to='/register'>Register</Link>
        </>
    );
};