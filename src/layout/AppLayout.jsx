import Header from "./Header.jsx";
import {Outlet} from "react-router-dom";

// eslint-disable-next-line react/prop-types
export default function AppLayout({isLoggedIn}) {
    return (
        <>
            <Header isLoggedIn={isLoggedIn} />
            <Outlet/>
        </>
    )
}