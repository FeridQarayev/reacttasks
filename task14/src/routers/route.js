import React from 'react'
import MainRoot from '../pages/MainRoot';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';

export const ROUTES = [
    {
      path: "/",
      element: <MainRoot />,
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "register",
          element: <Register />,
        }
      ]
    }
  ];