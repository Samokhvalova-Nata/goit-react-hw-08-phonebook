import { useAuth } from "hooks";
import { Link } from "./Navigation.styled";

export const Navigation = () => {
    const { isLoggedIn } = useAuth();
    return (
        <>
            <Link to='/'>Home</Link>
            {isLoggedIn && (<Link to='/contacts'>Contacts</Link>)}
        </>
    );
}