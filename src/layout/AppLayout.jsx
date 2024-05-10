import Header from "./Header.jsx";
import {Outlet} from "react-router-dom";

export default function AppLayout({isLoggedIn}) {
    return (
        <>
            <Header isLoggedIn={isLoggedIn} />
            <Outlet/>
        </>
    )
}