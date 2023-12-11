import { Component } from "react";
import User from "./User";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

class About extends Component{

    constructor(){
        super()
        //console.log("Parent Constructor");
    }

    render(){
        //console.log("parent render");
        return (
        <div className="m-4 px-4">
            <h1>About</h1>
            <div>
                LoggedInUser
                <UserContext.Consumer>
                {({ loggedInUser }) => <h1>{loggedInUser}</h1>}
                </UserContext.Consumer>
            </div>
            <h2>This is About Page</h2>
            <UserClass name={'First'} location={'Badvel class'} />
        </div>
    )}
}

// const About = () =>{
//     return(
//         <div>
//             <h1>About</h1>
//             <h2>Namaste About page</h2>
//             <User name={"Apoorav Jain (Functional)"} location={"Shikohabad65"}/>
//             <UserClass name={"Apoorav Jain (Classes)"} location={"Noida"} />
//         </div>
//     );
// };

export default About;