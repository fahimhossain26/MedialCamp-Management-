import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/home/Home";
import AvailableCamp from "../Pages/AvailableCamp/AvailableCamp";



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
      }
      // {
      //   path: '/login',
      //   element: <Login></Login>
      // },
      // {
      //   path: '/register',
      //   element: <Register></Register>
      // }



    ]
  },
]);


export default router