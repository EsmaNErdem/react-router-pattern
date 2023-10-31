import { NavLink } from "react-router-dom";
import "./NavBar.css";

const NavBar = ({dogs}) => {
    return (
        <nav className="NavBar">
            <NavLink exact to="/dogs">
                Dogs List
            </NavLink>
            {dogs.map(({name}) => 
            <NavLink exact to={`/dogs/${name.toLowerCase()}`}>
                {name}
            </NavLink>
            )}
        </nav>
    )
}

export default NavBar;