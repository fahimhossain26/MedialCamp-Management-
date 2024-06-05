import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/home/Home";
import AvailableCamp from "../Pages/AvailableCamp/AvailableCamp";
import Login from "../Pages/login/Login";
import Signup from "../Pages/signup/Signup";
import CampDetails from "../Components/medicalCamps/CampDetails";



 export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path:'availableCamp',
        element:<AvailableCamp></AvailableCamp>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path:'signup',
        element:<Signup></Signup>
      },
      {
        path:'/camp/:id',
        element:<CampDetails></CampDetails>,
        // loader:({params})=>fetch(`${import.meta.env.VITE_API_URL}/camps/${params.id}`)  
      }
      // {
      //   path: '/register',
      //   element: <Register></Register>
      // }



    ]
  },
]);


export default router