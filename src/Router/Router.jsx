// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";
// import Root from "../Components/Root/Root";
// import ErrorPage from "../Pages/ErrorPage";
// import Home from "../Pages/Home";
// import Login from "../Pages/Login";
// import Logout from "../Pages/Logout";
// import Register from "../Pages/Register";
// import AllCampaign from "../Pages/AllCampaign";
// import AddCampaign from "../Pages/AddCampaign";
// import MyCampaign from "../Pages/MyCampaign";
// import MyDonations from "../Pages/MyDonations";
// import DetailsDonation from "../Pages/DetailsDonation";
// import Update from './../Pages/Update';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Root></Root>,
//     errorElement: <ErrorPage />,
//     children: [
//       {
//         path: "/",
//         element: <Home />,
//         loader: async () => {
//           const response = await fetch('http://localhost:3000/campaignslimit');
//           if (!response.ok) {
//             throw new Error('Failed to fetch campaigns');
//           }
//           return response.json(); // Return the resolved data
//         },
//       },
//       {
//         path: "/login",
//         element: <Login />,
//       },
//       {
//         path: "/logout",
//         element: <Logout />,
//       },
//       {
//         path: "/register",
//         element: <Register />,
//       },
//       {
//         path: "/campaigns",
//         element: <AllCampaign />,
//         loader:()=>fetch("http://localhost:3000/campaigns")
       
//       },
//       {
//         path: "/addCampaign",
//         element: <AddCampaign />,
//       },
//       {
//         path: "/myCampaign",
//         element: <MyCampaign />,
//       },
//       {
//         path: "/myDonations",
//         element: <MyDonations />,
//         loader:()=>fetch('http://localhost:3000/donate')
//       },{
//         path:'/campaign/:id',
//         element:<DetailsDonation></DetailsDonation>,
//         loader:({params})=>fetch(`http://localhost:3000/campaign/${params.id}`)
//       },{
//         path:"/updateCampaign/:id",
//         element:<Update></Update>,
//         loader:({params})=>fetch(`http://localhost:3000/updateCampaign/${params.id}`)
//       }
//     ],
//   },
// ]);

// export default router;

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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("http://localhost:3000/campaignslimit"),
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
        loader: () => fetch("http://localhost:3000/campaigns"),
      },
      {
        path: "/addCampaign",
        element: <AddCampaign />,
      },
      {
        path: "/myCampaign",
        element: <MyCampaign />,
      },
      {
        path: "/myDonations",
        element: <MyDonations />,
        loader: ({ params }) => fetch(`http://localhost:3000/donate`),
      },
      {
        path: "/campaign/:id",
        element: <DetailsDonation />,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/campaign/${params.id}`),
      },
      {
        path: "/updateCampaign/:id",
        element: <Update />,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/campaign/${params.id}`),
      },
    ],
  },
]);

export default router;
