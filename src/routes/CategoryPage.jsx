import { useLocation, useParams } from "react-router-dom";
import Card from "../Components/Card";
import { useEffect, useState } from "react";


const CategoryPage = ({ removeCard, removeLikes, addLikes, ...rest }) => {
    const { category } = useParams(); //param gets the current url
    const location = useLocation();
    const [search, setSearch] = useState("");

    const searchHandler = (event) => {
        setSearch(event.target.value);
    };

    const categoryItems = rest[category];

    return (
        <><div className="search">
            <input
                id="searchbar"
                type="text"
                placeholder="Search..."
                onChange={searchHandler}
                value={search}
            />
        </div>
            <div className="cards">
                {categoryItems
                    .filter((el) => el.name.toLowerCase().includes(search.toLowerCase()))
                    .map((item) => {
                        return (<Card
                            key={item.name}
                            name={item.name}
                            likes={item.likes}
                            removeCard={() => removeCard(item.name, category)} //makes an anomous function to bring data up
                            removeLikes={() => removeLikes(item.name, category, 'remove')}
                            addLikes={() => addLikes(item.name, category, 'add')}
                        />);
                    })
                }
            </div>
        </>
    );
}

export default CategoryPage;