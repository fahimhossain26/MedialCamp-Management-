import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/home/Home";
import AvailableCamp from "../Pages/AvailableCamp/AvailableCamp";
import Login from "../Pages/login/Login";
import Signup from "../Pages/signup/Signup";
import CampDetails from "../Components/medicalCamps/CampDetails";
import PrivateRout from "./PrivateRout";
import ErrorPage from "../Pages/errorPage/ErrorPage";
import DashboardLayout from "../Layouts/DashboardLayout";
import Statistis from "../Pages/common/Statistis";
import AddCamp from "../Pages/dasboard/Organizer/AddCamp";
import Listing from "../Pages/dasboard/Organizer/Listing";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'availableCamp',
        element: <AvailableCamp></AvailableCamp>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: 'signup',
        element: <Signup></Signup>
      },
      {
        path: '/camp/:id',
        element: <PrivateRout>
          <CampDetails></CampDetails>
        </PrivateRout>

      },
    ]

  },
  {
    path: '/dashboard',
    element: <DashboardLayout></DashboardLayout>,
    children: [
      {
        index: true,
        element: <Statistis></Statistis>

      },
      {
        path: 'add-camp',
        element: <AddCamp></AddCamp>
      },
      {
        path: 'my-listing',
        element: <Listing></Listing>
      }
    ]
  }
]);


export default router