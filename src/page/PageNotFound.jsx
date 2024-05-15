import styled from "styled-components";
import {NavLink} from "react-router-dom";

    const LoginLink = styled(NavLink)`
        text-decoration: none;
        color: #007bff;
        margin-top: 10px;
        display: block;
`;

    function PageNotFound() {

    return (
        <div>
            <h1>404 - Page not found</h1>
            <LoginLink to="/login" >Back to login page</LoginLink>
        </div>
    );
}

export default PageNotFound;