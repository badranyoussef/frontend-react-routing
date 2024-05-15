import {useNavigate} from "react-router-dom";
import {useEffect} from "react";

// eslint-disable-next-line no-unused-vars,react/prop-types
export function ProtectedRoute({isLoggedIn, children}) {
    const navigate = useNavigate();

    useEffect(() => {
        if (!isLoggedIn) {
            navigate('/login');
        }
    }, [isLoggedIn, navigate]);

    if(isLoggedIn) return <>{children}</>;
}