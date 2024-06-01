import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const Header = () => {

    const { category } = useParams();
    let bgImageUrl = 'https://source.unsplash.com/1200x1200/?forest';

    switch (category) {
        case 'animals':
            bgImageUrl = 'https://source.unsplash.com/1200x1200/?forest';
            break;
        case 'birds':
            bgImageUrl = 'https://source.unsplash.com/1200x1200/?sky';
            break;
        case 'fishes':
            bgImageUrl = 'https://source.unsplash.com/1200x1200/?underwater';
            break;
        case 'insects':
            bgImageUrl = 'https://source.unsplash.com/1200x1200/?soil';
            break;
        default:
            bgImageUrl = 'https://source.unsplash.com/1200x1200/?forest';
    }


    return (
        <header style={{ backgroundImage: `linear-gradient(to bottom, rgba(155, 185, 175, 0.555), rgba(71, 83, 80, 0.643)), url(${bgImageUrl})` }}>
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