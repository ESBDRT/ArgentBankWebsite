import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from 'react';
import Home from "../../pages/Home/Home";
import Login from "../../pages/Login/Login";
import User from "../../pages/User/User";

const router = createBrowserRouter([
    {
      path: '/',
      element: <Home/>
    },
    {
      path: '/login',
      element: <Login/>
    },
    {
      path: '/user',
      element: <User/>,
    },
  ]
);

  function RouterComp() {
    return (
      <RouterProvider router={router}/>
    );
  }


  export default RouterComp;
