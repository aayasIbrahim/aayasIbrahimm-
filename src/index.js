import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import App from "./App";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Body from "./Componets/Body.jsx";

import AboutBody from "./Componets/AboutBody.jsx";
import ProjectBody from "./Componets/ProjectBody.jsx";
import ContactBody from "./Componets/ContactBody.jsx";

// import reportWebVitals from "./reportWebVitals";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children:[
      
      {
        path:"/",
        element:<Body />,
      },
      {
        path:"/about",
        element:<AboutBody/>,
        
      },{
        path:"/project",
        element:<ProjectBody/>
      }
      ,{
        path:"/contact",
        element:<ContactBody/>
      }
     
    ]
  },
  
  
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <RouterProvider router={router} />
  </>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
