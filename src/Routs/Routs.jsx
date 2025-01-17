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
import Profile from "../Pages/common/Profile";
import ManageUsers from "../Pages/dasboard/Admin/ManageUsers";
import AdminRoute from "./AdminRouts";
import HostRoute from "./HostRouts";
import MyBookings from "../Pages/dasboard/Guest/MyBookings";
import ManageBookings from "../Pages/dasboard/Organizer/ManageBookings"
import Contact from "../Pages/Contact";
import About from "../Pages/AboutUs/About";




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
        path: 'about',
        element: <About></About>
      },
      {
        path: 'contact',
        element: <Contact></Contact>
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
    element: <PrivateRout><DashboardLayout></DashboardLayout></PrivateRout>,
    children: [
      {
        index: true,
        element: <PrivateRout><Statistis></Statistis></PrivateRout>

      },
      {
        path: 'add-camp',
        element: <PrivateRout><HostRoute>
          <AddCamp></AddCamp>
        </HostRoute>
        </PrivateRout>
      },
      {
        path: 'my-listing',
        element: <PrivateRout><HostRoute>
          <Listing></Listing>
        </HostRoute>
        </PrivateRout>
      },
      {
        path: 'manage-users',
        element: <PrivateRout><AdminRoute>
          <ManageUsers></ManageUsers>
        </AdminRoute>
        </PrivateRout>
      },
      {
        path: 'my-bookings',
        element: <PrivateRout>
          <MyBookings></MyBookings>
        
        </PrivateRout>
      },
      {
        path: 'manage-bookings',
        element: <PrivateRout><HostRoute>
          <ManageBookings></ManageBookings>
        </HostRoute>
        </PrivateRout>
      },
      {
        path: 'profile',
        element:<PrivateRout> <Profile></Profile></PrivateRout>
      }

    ]
  }
]);


export default router