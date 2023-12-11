import { CDN_URL } from "../utils/contants";

export const ResturentCard = ({resData}) => {
    //console.log('resData----', resData)
    const {
        cloudinaryImageId,
        name,
        cuisines,
        avgRating,
        costForTwo,
        sla,
    } = resData?.info ;

    return (
        <div className="m-4 p-4 w-[250px] bg-gray-100 hover:bg-gray-300">
            <img className="res-logo" src={cloudinaryImageId}/>
            <h3 className="font-bold py-4 text-lg">{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} Stars</h4>
            <h4>{costForTwo}</h4>
            <h4>{sla.deliveryTime} Minutes</h4>
        </div>
    );
};

// export default ResturentCard;

//higher order function
export const withPramotedLabel = (ResturentCard) => {
    return (props) => {
        return (
            <div>
            <label className="absolute bg-black text-white m-2 p-2 rounded-lg">Veg</label>
            <ResturentCard {...props}/>
        </div>
        );       
    };
};