import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const Header = ({ bgImageUrl }) => {

    return (
        <header style={{ backgroundImage: `url(${bgImageUrl})` }}>
            <Link to="/">
                <h1>Zoo</h1>
            </Link>
            <NavLink className="nav" to="/">Home</NavLink>
            <NavLink className="nav" to="/animals">Animals</NavLink>
            <NavLink className="nav" to="/birds">Birds</NavLink>
            <NavLink className="nav" to="/insects">Insects</NavLink>
            <NavLink className="nav" to="/fishes">Fish</NavLink>
            <NavLink className="nav" to="/about">About</NavLink>

        </header>)
}
export default Header;