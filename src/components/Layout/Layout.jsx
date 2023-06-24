import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { Bar } from "components/AppBar/AppBar";
import { Container } from "@mui/material";

const Layout = () => {

    return (
        <Container maxWidth="md"> 
            <Bar/>
            <Suspense fallback={null}>
                <Outlet/>
            </Suspense>
            <Toaster position="top-right" reverseOrder={false} />
        </Container>
    );
};

export default Layout;