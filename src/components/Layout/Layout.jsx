import { AuthNav } from "components/AuthNav";
import { Navigation } from "components/Navigation";
import { UserMenu } from "components/UserMenu";
import { useAuth } from "hooks";
import { Container, Header } from "./Layout.styled";

const Layout = () => {
    const { isLoggedIn } = useAuth();

    return (
        <>
            <Header>
                <Navigation />
                {isLoggedIn ? <UserMenu /> : <AuthNav />}
            </Header>
        </>
    );
};

export default Layout;