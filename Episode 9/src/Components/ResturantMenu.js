//https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=27.1046449&lng=78.58701119999999&restaurantId=510045&catalog_qa=undefined&submitAction=ENTER

import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useResturantMenu from "../utils/useResturantMenu";


const ResturantMenu = () => {

    //const [resInfo, setresInfo] = useState(null);
    const { resId } = useParams();

    const resInfo = useResturantMenu(resId);

    // useEffect(() => {fetchMenuData() }, []);

    // const fetchMenuData = async() => {
    //     const menuData = await fetch(Menu_API + resId);
    //     const json = await menuData.json();
    //     console.log(json.data);
    //     setresInfo(json.data);
    // };

    


    if (resInfo === null) 
        return <Shimmer />;

    const {name, cuisines, costForTwoMessage, avgRatingString} = resInfo?.cards[0]?.card?.card?.info;
    const {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    console.log(itemCards);
    
    return  (
        <div className="menu">
            <h1>{name}</h1>
            <h3>{cuisines.join(', ')}</h3>
            <h3>{costForTwoMessage}</h3>
            <h3>{avgRatingString}</h3>
            <h2>Menu</h2>
            <ul>
                {itemCards?.map(item => <li key={item.card.info.id}>{item.card.info.name} - Rs{(item.card.info.price)/100}</li>)}
            </ul>
        </div>
    );
};

export default ResturantMenu;