import { AuthNav } from "components/AuthNav";
import { Navigation } from "components/Navigation";
import { UserMenu } from "components/UserMenu";
import { useAuth } from "hooks";
import { Header } from "./Layout.styled";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";

const Layout = () => {
    const { isLoggedIn } = useAuth();

    return (
        <>
            <Header>
                <Navigation />
                {isLoggedIn ? <UserMenu /> : <AuthNav />}
            </Header>
            <Suspense fallback={null}>
                <Outlet/>
            </Suspense>
            <Toaster position="top-right" reverseOrder={false} />
        </>
    );
};

export default Layout;