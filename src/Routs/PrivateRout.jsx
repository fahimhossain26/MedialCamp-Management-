import { useContext } from "react";

import { Navigate, useLocation } from "react-router-dom";
import { Form } from "react-hook-form";
import { AuthContext } from "../Provider/AuthProvider";


const PrivateRout = ({children}) => {
    const {user,loading}=useContext(AuthContext)
    const location=useLocation()
    if(loading){
        return <progress className="progress w-56"></progress>
    }
    if(user){
        return children;

    }
    // return <Navigate to='/login' state={{From: location}} replace='true'></Navigate>
    return <Navigate to='/login' state={location.pathname} replace='true'></Navigate>
}

export default PrivateRout;