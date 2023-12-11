
import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
//import About from "./Components/About";
import Contact from "./Components/Contact";
import Error from "./Components/Error";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import ResturantMenu from "./Components/ResturantMenu";
import UserContext from "./utils/UserContext";

//chunking, Code spliting, Lazy Loading, Dynamic Budling, on demand Loading
const Grocery = lazy(() => import("./Components/Grocery"));

const About = lazy(() => import("./Components/About"));


const AppLayout = () =>{

    const [userName, setUserName] = useState();

  // Authentication
  useEffect(() => {
    // Make an API call and send username and password
    const data = {
      name: 'Apoorav',
    };
    setUserName(data.name);
  }, []);

    
    return(
        <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <div className="app">
            <Header />
            <Outlet />
        </div>
        </UserContext.Provider>
    );
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: ( <Suspense fallback = { <h1>Loading....</h1> }><About /></Suspense> )
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/resturant/:resId",
                element: <ResturantMenu />
            },
            {
                path: "/grocery",
                element:( <Suspense fallback = { <h1>Loading....</h1> }><Grocery /></Suspense> ),
            },
        ],
        errorElement: <Error />
    },
    
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);