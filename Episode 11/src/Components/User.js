import { useEffect, useState } from "react";

const User = () => {

    
    const {userInfo, setuserInfo} = useState([]);

    

    useEffect(()=>{ fetch2() , [] });

    const fetch2 = async() => {
        const data = await fetch2('https://api.github.com/users/apooravjain');
        const json = await data.json();

        console.log(json);
        //setuserInfo(json);
    }

    //const {name, location} = json;

    return (
        <div className="user-card">
            {/* <h1>Name : {name}</h1>
            <h2>Location : {location}</h2> */}
            <h2>apooravjain12@gmail.com</h2>
        </div>
    );
};

export default User;