import { useContext } from "react";
import { FaGoogle } from "react-icons/fa6";
// import UseAuth from "../../hookes/UseAuth";
// import UseAxiosPublic from "../../hookes/UseAxiosPublic";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";



const SocialLogin = () => {
    const { googleSignIn } = useContext(AuthContext);
    // const axiosPublic=UseAxiosPublic();
    const navigate=useNavigate();
    const handelgoogleSignin = () => {
        googleSignIn()
            .then(result => {
                console.log(result.user);
                navigate('/')
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Login in with google sucessfully",
                    showConfirmButton: false,
                    timer: 1500
                  });

                // const userInfo={
                //     email:result.user?.email,
                //     name:result.user?.displayName

               // } 




                // .then(res=>{
                //     console.log(res.data);
                //     navigate('/')
                // })




                // axiosPublic.post('/users',userInfo)
                // .then(res=>{
                //     console.log(res.data);
                //     navigate('/')
                // })

            })
    }
    return (
        <div>
            <div>
                <button onClick={handelgoogleSignin} className="btn w-full bg-blue-400">
                    <FaGoogle className="text-orange-800"></FaGoogle>
                    Google
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;