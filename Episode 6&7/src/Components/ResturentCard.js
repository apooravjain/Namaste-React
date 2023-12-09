import { CDN_URL } from "../utils/contants";

const ResturentCard = ({resData}) => {
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
        <div className="res-card">
            <img className="res-logo" src={cloudinaryImageId}/>
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} Stars</h4>
            <h4>{costForTwo}</h4>
            <h4>{sla.deliveryTime} Minutes</h4>
        </div>
    );
};

export default ResturentCard;