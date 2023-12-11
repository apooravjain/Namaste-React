//"https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING",
//"https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9622536&lng=77.6979885&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"

import { ResturentCard, withPramotedLabel } from "./ResturentCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [ListOfRestaurant, setListOfRestaurant] = useState([]);
  const [filterRestaurant, setfilterRestaurant] = useState([]);
  const [searchText, setsearchText] = useState("");

  const ResturentCardPromoted = withPramotedLabel(ResturentCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=27.1046449&lng=78.58701119999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    console.log(json?.data);
    setListOfRestaurant(
      json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setfilterRestaurant(
      json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    console.log("cool----",json?.data);
  };

const OnlineStatus = useOnlineStatus();
  if (OnlineStatus === false)
    return (
      <h1>Looks like you offline !! Please check you internet connection </h1>
    );

const { loggedInUser, setUserName } = useContext(UserContext);

  return ListOfRestaurant?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      {/* data filter hoke jo humne search kiya hai vo render hoga */}
      <div className="px-4 m-4 ">
        <input
          className="border border-solid border-black"
          type="text"
          // placeholder="Search a restaurant you want..."
          value={searchText}
          onChange={(e) => {
            setsearchText(e.target.value);
          }}
        />
        <button
          className="px-4 py-2 m-4 bg-green-100 rounded-lg"
          onClick={() => {
            console.log(searchText);

            const filterList = ListOfRestaurant.filter((res) =>
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setfilterRestaurant(filterList);
          }}
        >
          Search
        </button>
          

        {/* data filter hoke 4star se above rating wale restaurant print hogye */}
        <button
          className="m-4 px-4 py-2 bg-gray-400 rounded-lg"
          onClick={() => {
            const filterList = ListOfRestaurant.filter(
              (res) => res.info.avgRating >= 4
            );
            setfilterRestaurant(filterList);
            console.log(filterList);
          }}
        >
          Top Rating Resturant
        </button>
        <label htmlFor="name">User Name: </label>
          <input
            id="name"
            className="border border-black p-2"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          />
      </div>

      {/* res-container ki help se sara data map hoke print hoga  */}
      <div className="flex flex-wrap">
        {filterRestaurant?.map((restaurant) => (
          <Link
            Key={restaurant.info.id}
            to={"/resturant/" + restaurant.info.id}
          >
            {restaurant.info.veg ? 
              <ResturentCardPromoted resData={restaurant} /> : <ResturentCard resData={restaurant} />
            }
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
