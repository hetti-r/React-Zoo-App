import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="homeContainer">

            <img className="homeImg" img src={`https://source.unsplash.com/800x800/?mammal+reptile`} />
            <Link className="homelink1" to="/animals">Animals</Link>


            <img className="homeImg" img src={`https://source.unsplash.com/800x800/?bird`} />
            <Link className="homelink2" to="/birds">Birds</Link>


            <img className="homeImg" img src={`https://source.unsplash.com/800x800/?insect`} />
            <Link className="homelink3" to="/insects">Insects</Link>


            <img className="homeImg" img src={`https://source.unsplash.com/800x800/?fish`} />
            <Link className="homelink4" to="/fishes">Fish</Link>
        </div>
    );
};

export default Home;