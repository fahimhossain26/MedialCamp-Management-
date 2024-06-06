
import { Helmet } from 'react-helmet-async';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import { useForm } from "react-hook-form"
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';
import SocialLogin from '../../Components/SocialLogin';


   

const Signup = () => {
    const {
        register,
        handleSubmit,
        reset,

        formState: { errors },
    } = useForm()
    const {createUser,updateUserProfile,logOut,loading}=useContext(AuthContext);
    const navigate = useNavigate();
    const location=useLocation();
    const from=location.state?.from?.pathname || '/';

    const onSubmit = (data) =>{
        console.log(data)
        createUser(data.email, data.password)
        .then(result => {
            const loggedUser = result.user
            console.log(loggedUser);
            updateUserProfile(data.name, data.photoURL)
            .then(() => {
                  console.log('user profile info updated ');
                   reset(); 
                   Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "signIn sucess fully ",
                    showConfirmButton: false,
                    timer: 1500
                  });
                  navigate('/login')
             })
             .catch(error=>console.log(error))
        })
       

          
                

    } 
    
    return (
        <>
        <Helmet>
            <title> MCMS || Sign Up</title>

        </Helmet>


        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col  lg:flex-row">
                <div className=" w-1/2 mr-5">

                    <img src='' alt="" />
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    {/* onSubmit={handleSubmit(onSubmit)} */}
                    <form   onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <h1 className="text-3xl font-bold text-center"> Sign up </h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input name='name' {...register("name", { required: true })} type="text" placeholder="name" className="input input-bordered" />
                            {errors.name && <span className='text-red-500'>This field is required</span>}
                        </div>


                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Phohto Url</span>
                            </label>
                            <input name='photoURL' {...register("photoURL", { required: true })} type="photoURL" placeholder="photoURL" className="input input-bordered" />
                            {errors.name && <span className='text-red-500'>This field is required</span>}
                        </div>


                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name='email' {...register("email", { required: true })} type="email" placeholder="email" className="input input-bordered" />
                            {errors.email && <span className='text-red-500'>This field is required</span>}
                        </div>


                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name='password' {...register("password", {
                                required: true, minLength: 6,
                                maxLength: 20,
                                pattern: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\W_]).+$/
                            })} type="password" placeholder="password" className="input input-bordered" />
                            {errors.password?.type == 'required' && <span className='text-red-500'>This field is required</span>}

                            {errors.password?.type == 'minLength' && <span className='text-red-500'>pass must be 6 character</span>}

                            {errors.password?.type == 'maxLength' && <span className='text-red-500'>pass less then 20 character</span>}
                            {/* pass validation */}
                            {errors.password?.type == 'pattern' && <span className='text-red-500'>pass must have one upper case ne lowr clase one number , one spacial character </span>}

                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">

                            <input className="btn btn-primary" type="submit" value="Sign up" />
                        </div>
                        <div className="divider">OR</div>
                        
                          <SocialLogin></SocialLogin>
                    </form>
                    <p className=' my-4 text-center text-orange-600 font-bold'>Already have an Account ? <Link to={'/login'}>Login</Link></p>
                   
                </div>
                
            </div>
        </div>
    </>
    );
};

export default Signup;