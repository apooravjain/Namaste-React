import ResturentCard from "./ResturentCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
    const [ListOfRestaurant, setListOfRestaurant] = useState(resList);

    return (
        <div className="body">
            <div className="search" >
                <input type="text" placeholder="Search Food or Resturant"/>
                <button>Search</button>
            </div>
            <div className="filter">
                <button className="filter-btn" onClick={() => {
                    const filterList = ListOfRestaurant.filter(res => (res.data.avgRating > 4));
                    setListOfRestaurant(filterList);
                    }} >Top Rating Resturant</button>
            </div>
            <div className="res-container">
                {
                    ListOfRestaurant.map((restaurant) => (
                        <ResturentCard Key = {restaurant.data.id} resData = {restaurant} />
                    ))
                }
            </div>
        </div>
    );
};

export default Body;