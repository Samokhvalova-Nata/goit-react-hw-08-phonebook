import { useAuth } from "hooks";
// import { NavLink } from "react-router-dom";
import { Link } from "./Navigation.styled";

export const Navigation = () => {
    const { isLoggedIn } = useAuth();
    return (
        <nav>
            <Link to='/'>Home</Link>
            {isLoggedIn && (<Link to='/contacts'>Contacts</Link>)}
        </nav>
    );
}