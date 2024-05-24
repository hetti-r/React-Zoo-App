import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const SinglePage = ({ ...rest }) => {
    const params = useParams();
    const categoryItems = rest[params.category];

    const data = categoryItems.find((el) => el.name === params.name)

    return (
        <>
            <div className="singlePage">
                <h2>{data.name}</h2>
                <img src={`https://source.unsplash.com/600x400/?${data.name}`} />
                <source src={`https://en.wikipedia.org/w/api.php?action=query&origin=*&prop=extracts&format=json&exintro=&titles=${data.name}`} ></source>
                <Link to='..'>
                    <button className="back">Go Back</button>
                </Link>
            </div >
        </>
    );
}

export default SinglePage;