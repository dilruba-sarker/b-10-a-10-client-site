

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from "../Components/Root/Root";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Logout from "../Pages/Logout";
import Register from "../Pages/Register";
import AllCampaign from "../Pages/AllCampaign";
import AddCampaign from "../Pages/AddCampaign";
import MyCampaign from "../Pages/MyCampaign";
import MyDonations from "../Pages/MyDonations";
import DetailsDonation from "../Pages/DetailsDonation";
import Update from "../Pages/Update";
import PrivateRoute from "../Pages/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("https://b-10-a-10-server.vercel.app/campaignslimit"),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/logout",
        element: <Logout />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/campaigns",
        element: <AllCampaign />,
        loader: () => fetch("https://b-10-a-10-server.vercel.app/campaigns"),
      },
      {
        path: "/addCampaign",
        element:  <PrivateRoute><AddCampaign /></PrivateRoute>   ,
      },
      {
        path: "/myCampaign",
        element: <PrivateRoute><MyCampaign /></PrivateRoute> ,
       
      },
      {
        path: "/myDonations",
        element:   <PrivateRoute><MyDonations /></PrivateRoute> ,
        // loader: ({ params }) => fetch(`https://b-10-a-10-server.vercel.app/donate`),
      },
      {
        path: "/campaign/:id",
        element: <PrivateRoute><DetailsDonation /></PrivateRoute>       ,
        loader: ({ params }) =>
          fetch(`https://b-10-a-10-server.vercel.app/campaign/${params.id}`),
      },
      {
        path: "/updateCampaign/:id",
        element: <PrivateRoute><Update /></PrivateRoute>   ,
        loader: ({ params }) =>
          fetch(`https://b-10-a-10-server.vercel.app/campaign/${params.id}`),
      },
    ],
  },
]);

export default router;


