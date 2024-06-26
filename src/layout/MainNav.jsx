import { NavLink } from "react-router-dom"

// eslint-disable-next-line react/prop-types
export default function MainNavTest({isLoggedIn}){

    if(isLoggedIn){
        return(
            <ul>
                <li><NavLink to="/home">Home</NavLink></li>
                <li><NavLink to="/entity">Entities (All Cars)</NavLink></li>
                <li><NavLink to="/logout">Logout</NavLink></li>
            </ul>
        )
    } else {
        return (
             <ul>
                 <li><NavLink to="/login">Login</NavLink></li>
                 <li><NavLink to="/register">Register</NavLink></li>
             </ul>
         )
        }
}