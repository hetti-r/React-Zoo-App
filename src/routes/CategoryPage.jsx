import { useParams } from "react-router-dom";
import Card from "../Components/Card";

const CategoryPage = ({ removeCard, removeLikes, addLikes, ...rest }) => {
    const { category } = useParams(); //param gets the current url

    const categoryItems = rest[category];

    return (
        <>
            {
                categoryItems.map((item) => {
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
        </>
    );
}

export default CategoryPage;