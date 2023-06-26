import '@fontsource/ubuntu/400.css';
import '@fontsource/ubuntu/500.css';
import '@fontsource/ubuntu/700.css';
import { LoginForm } from "components/LoginForm/LoginForm";
import { Helmet } from 'react-helmet';


const Login = () => {
    return (
        <>
            <Helmet>
                <title>Login</title>
            </Helmet>
            <LoginForm/>
        </>
        
    );
};

export default Login;