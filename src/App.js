import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Profile from "./components/Profile/Profile";
import Resister from "./components/Resister/Resister";
import Main from "./Main/Main";
import PrivetRouter from "./PrivetRouters/PrivetRouter";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/home", element: <Home /> },
        { path: "/login", element: <Login /> },
        { path: "/resister", element: <Resister /> },
        {
          path: "/profile",
          element: (
            <PrivetRouter>
              <Profile />
            </PrivetRouter>
          ),
        },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
};

export default App;
