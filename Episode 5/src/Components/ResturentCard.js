import { CDN_URL } from "../utils/contants";

const ResturentCard = (props) => {
    const {resData} = props;
    const {
        cloudinaryImageId,
        name,
        cuisines,
        avgRating,
        costForTwo,
        deliveryTime,
    } = resData?.data ;

    return (
        <div className="res-card">
            <img className="res-logo" src={CDN_URL + cloudinaryImageId }/>
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} Stars</h4>
            <h4>{costForTwo} For Two</h4>
            <h4>{deliveryTime} Minutes</h4>
        </div>
    );
};

export default ResturentCard;