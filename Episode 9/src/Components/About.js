import { Component } from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends Component{

    constructor(){
        super()
        //console.log("Parent Constructor");
    }

    render(){
        //console.log("parent render");
        return (
        <div>
            <h1>About</h1>
            <h2>Namaste About page</h2>
            {/* <User /> */}
            <UserClass />
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