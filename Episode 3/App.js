
import React from "react";
import ReactDOM from "react-dom";

//React.createElement => object => HTMLElement(render)

//const headling = React.createElement("h1", {id: "headling"}, "Namaste React"); 

//JSX => Babel transpiles it to React.createElement => ReactElement-JS object => HTMLElement(render)

//React Element
const JSXHeadling = <h1 className = "headling">Namaste React using JSX</h1>;

// Functional Components -> Its just a Normal function which return a some JSX.

const Title = () => (
    <h1 className="title"> Title Component</h1>
);

const number = 1000;
const ele = <spam>great</spam>;

const HeadingComponent = () => (
    <div id = "container">
        <h1 className = "heading">Namaste Functional Component</h1>
        <h2>{number}</h2>
        <h2>{ele}</h2>
        <Title />
        <Title></Title>
        {Title()}
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>);