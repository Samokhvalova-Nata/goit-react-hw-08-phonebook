import { useAuth } from "hooks";
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({ children }) => {
    const { isLoggedIn } = useAuth();

    return isLoggedIn ? children : <Navigate to='/login'  />
};

export default PrivateRoute;