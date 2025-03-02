import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Root from "../Components/Root/Root";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import Login from "../Pages/login";
import Logout from "../Pages/Logout";
import Register from "../Pages/Register";
import AllCampaign from "../Pages/AllCampaign";
import AddCampaign from "../Pages/AddCampaign";
import MyCampaign from "../Pages/MyCampaign";
import MyDonations from "../Pages/MyDonations";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />,
        },{
            path: "/login",
            element: <Login />,
        },{
            path: "/logout",
            element: <Logout />,
        },{
            path: "/register",
            element: <Register />,
        },{
            path: "/campaigns",
            element: <AllCampaign />,
        },{
           path:'/addCampaign',
           element: <AddCampaign />,
        }
        ,{
           path:'/myCampaign',
           element: <MyCampaign />,
        }
        ,{
           path:'/myDonations',
           element: <MyDonations/>,
        }
      ],
    },
  ]);

  export default router