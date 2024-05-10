import { NavLink } from "react-router-dom"

// eslint-disable-next-line react/prop-types
export default function MainNavTest({isLoggedIn}){
    return (
        <ul>
            <li><NavLink to="/home">Home</NavLink></li>
            {!isLoggedIn && <li><NavLink to="/login">Login</NavLink></li>}
            {!isLoggedIn && <li><NavLink to="/register">Register</NavLink></li>}
            {isLoggedIn && <li><NavLink to="/entity">Entity</NavLink></li>}
            {isLoggedIn && <li><NavLink to="/logout">Logout</NavLink></li>}
        </ul>
    )
}