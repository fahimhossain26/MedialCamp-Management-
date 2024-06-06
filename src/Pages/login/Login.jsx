
import { Helmet } from 'react-helmet-async';
import { Link, useLocation, useNavigate } from 'react-router-dom';

// import { useForm } from "react-hook-form"
import Swal from 'sweetalert2';
import { useContext, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import SocialLogin from '../../Components/SocialLogin';
const Login = () => {

    // const {
    //     register,
    //     handleSubmit,
    //     reset,

    //     formState: { errors },
    // } = useForm()

    // const onSubmit = (data) => console.log(data)

    // const [disabled,setDisable]=useState(true);
    const { signIn } = useContext(AuthContext);
    const Navigate = useNavigate();
    const location = useLocation();
    // const from = location.state?.from?.pathname || '/';
    const from = location?.state || '/';
    console.log('state in the location loin page ', location.state);


    const handelLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                //  sweet alaert
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your work has been saved",
                    showConfirmButton: false,
                    timer: 1500
                });

                // Navigate(from, { replace: true });
                Navigate(from);


            })
            .catch(error=>{
                console.log(error);
                Swal.fire({
                    position: "top-center",
                    icon: "error",
                    title: "Your email or pass is wrong ",
                    showConfirmButton: false,
                    timer: 500,
                    
                        
                      
                });
            })
    }



    return (
        // <>
        //     <Helmet>
        //         <title>FoodTopia || Login</title>

        //     </Helmet>


        //     <div className="hero min-h-screen bg-base-200">
        //         <div className="hero-content flex-col  lg:flex-row">
        //             <div className=" w-1/2 mr-5">

        //                 <img src='' alt="" />
        //             </div>
        //             <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        //                 {/* onSubmit={handleSubmit(onSubmit)} */}
        //                 <form   onSubmit={handleSubmit(onSubmit)} className="card-body">
        //                     <h1 className="text-3xl font-bold text-center"> Login</h1>






        //                     <div className="form-control">
        //                         <label className="label">
        //                             <span className="label-text">Email</span>
        //                         </label>
        //                         <input name='email' {...register("email", { required: true })} type="email" placeholder="email" className="input input-bordered" />
        //                         {errors.email && <span className='text-red-500'>This field is required</span>}
        //                     </div>


        //                     <div className="form-control">
        //                         <label className="label">
        //                             <span className="label-text">Password</span>
        //                         </label>
        //                         <input name='password' {...register("password", {
        //                             required: true, minLength: 6,
        //                             maxLength: 20,
        //                             pattern: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\W_]).+$/
        //                         })} type="password" placeholder="password" className="input input-bordered" />
        //                         {errors.password?.type == 'required' && <span className='text-red-500'>This field is required</span>}

        //                         {errors.password?.type == 'minLength' && <span className='text-red-500'>pass must be 6 character</span>}

        //                         {errors.password?.type == 'maxLength' && <span className='text-red-500'>pass less then 20 character</span>}
        //                         {/* pass validation */}
        //                         {errors.password?.type == 'pattern' && <span className='text-red-500'>pass must have one upper case ne lowr clase one number , one spacial character </span>}

        //                         <label className="label">
        //                             <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
        //                         </label>
        //                     </div>
        //                     <div className="form-control mt-6">

        //                         <input className="btn btn-primary" type="submit" value="Sign up" />
        //                     </div>
        //                     <div className="divider">OR</div>
        //                     {/* <SocialLogin></SocialLogin> */}
        //                 </form>
        //                 <p className=' my-4 text-center text-orange-600 font-bold'>Already have an Account ? <Link to={'/signup'}>signUp</Link></p>
        //             </div>
        //         </div>
        //     </div>
        // </>
        <>
            <Helmet>
                <title>MCMS|| Login</title>

            </Helmet>

            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col  lg:flex-row">
                    <div className=" w-1/2 mr-5">

                        <img src='https://i.postimg.cc/CxnYtGcD/giphy-2.gif' alt="" />
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handelLogin} className="card-body">
                            <h1 className="text-3xl font-bold text-center">Login </h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name='email' type="email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input name='password' type="password" placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>


                            <div className="form-control mt-6">

                                <input className="btn btn-primary" type="submit" value="Login" />
                            </div>
                            <div className="divider">OR</div>

                            <SocialLogin></SocialLogin>
                        </form>
                        <p className=' my-4 text-center text-orange-600 font-bold'>New to car doctor? <Link to={'/signUp'}>Sign Up</Link></p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;