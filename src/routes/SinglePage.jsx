import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const SinglePage = ({ ...rest }) => {
    const params = useParams();
    const categoryItems = rest[params.category];
    const navigate = useNavigate();

    const data = categoryItems.find((el) => el.name === params.name)

    const [wikiData, setWikiData] = useState("");

    useEffect(() => {
        async function getWikiData() {
            try {
                const response = await fetch(
                    `https://en.wikipedia.org/api/rest_v1/page/summary/${params.name}`
                );
                if (!response.ok) {
                    throw new Error("No network response.");
                }
                const result = await response.json();
                setWikiData(result.extract);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }

        getWikiData();
    }, [params.name]);

    return (
        <>
            <div className="singlePage">
                <h2>{data.name}</h2>
                <img src={`https://source.unsplash.com/600x400/?${data.name}`} />
                <p className="text">{wikiData}</p>
                <button onClick={() => navigate(-1)} className="back">Go Back</button>

            </div >
        </>
    );
}

export default SinglePage;