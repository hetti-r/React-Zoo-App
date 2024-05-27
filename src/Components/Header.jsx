import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const Header = () => {
    const { category } = useParams();
    let bgImageUrl = 'https://media.cntraveler.com/photos/5eb18e42fc043ed5d9779733/16:9/w_4288,h_2412,c_limit/BlackForest-Germany-GettyImages-147180370.jpg';
    console.log(category);

    switch (category) {
        case 'animals':
            bgImageUrl = 'https://media.cntraveler.com/photos/5eb18e42fc043ed5d9779733/16:9/w_4288,h_2412,c_limit/BlackForest-Germany-GettyImages-147180370.jpg';
            break;
        case 'birds':
            bgImageUrl = 'https://c02.purpledshub.com/uploads/sites/48/2023/02/why-sky-blue-2db86ae.jpg?w=1029&webp=1';
            break;
        case 'fishes':
            bgImageUrl = 'https://upload.wikimedia.org/wikipedia/commons/a/a7/Atlantic_near_Faroe_Islands.jpg';
            break;
        case 'insects':
            bgImageUrl = 'https://t4.ftcdn.net/jpg/01/07/76/85/360_F_107768523_jtL7cY9ajSRuTJmCfj4SAhTF8cebX317.jpg';
            break;
        default:
            bgImageUrl = 'https://media.cntraveler.com/photos/5eb18e42fc043ed5d9779733/16:9/w_4288,h_2412,c_limit/BlackForest-Germany-GettyImages-147180370.jpg';
    }

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