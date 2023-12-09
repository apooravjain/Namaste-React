//"https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING",
//"https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9622536&lng=77.6979885&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"

import ResturentCard from "./ResturentCard";
import resList from "../utils/mockData";
import { useState, useEffect} from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
    const [ListOfRestaurant, setListOfRestaurant] = useState([]);
    const [filterRestaurant, setfilterRestaurant] = useState([]);
    const [searchText, setsearchText] = useState("");

    useEffect(() => { fetchData() },[]); 
                                        
    const fetchData = async () => {
        const data = await fetch(
            'https://www.swiggy.com/dapi/restaurants/list/v5?lat=27.1046449&lng=78.58701119999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING'
        ); 

        //console.log("Data---------------------",data);
        // JSON.parse(data);
        //console.log('json----',json?.data.cards[3].card.card.gridElements.infoWithStyle.restaurants);

        const json = await data.json();
        setListOfRestaurant(json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setfilterRestaurant(json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
          
    };

    //conditional rendering
    // if(ListOfRestaurant.length === 0){
    //     return <Shimmer />;
    // }

    return ListOfRestaurant.length === 0 ? (<Shimmer />) : (
        <div className="body">

            {/* data filter hoke jo humne search kiya hai vo render hoga */}
            <div className="search" >
                <input type="text" placeholder="Search a restaurant you want..." value={searchText} 
                    onChange={(e) => {setsearchText(e.target.value)}}/>
                <button onClick={() => {

                    console.log(searchText);

                    const filterRestaurant = ListOfRestaurant.filter((res) => (
                        res.info.name.toLowerCase().includes(searchText.toLowerCase())));
                    setfilterRestaurant(filterRestaurant);

                    }}>Search</button>
            </div>

            {/* data filter hoke 4star se above rating wale restaurant print hogye */}
            <div className="filter">
                <button className="filter-btn" onClick={() => {
                    const filterList = ListOfRestaurant.filter(res => (res.info.avgRating > 4));
                    setListOfRestaurant(filterList); 
                    console.log(filterList);    
                    }} >Top Rating Resturant</button>
            </div>

            {/* res-container ki help se sara data map hoke print hoga  */}
            <div className="res-container">
                {
                    filterRestaurant.map((restaurant) => (
                        <Link  Key = {restaurant.info.id} to={"/resturant/" + restaurant.info.id} >
                            <ResturentCard resData = {restaurant} /></Link>
                    ))
                }
            </div>
        </div>
    );
};

export default Body;