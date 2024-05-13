import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <Link to="/">
                <h1>Zoo</h1>
            </Link>
            <NavLink className="nav" to="/">Home</NavLink>
            <NavLink className="nav" to="/animals">Animals</NavLink>
            <NavLink className="nav" to="/birds">Birds</NavLink>
            <NavLink className="nav" to="/insects">Insects</NavLink>
            <NavLink className="nav" to="/fishes">Fish</NavLink>

        </header>)
}
export default Header;