import  { useEffect } from 'react';

import Aos from "aos";
import 'aos/dist/aos.css'
import { Link } from 'react-router-dom';
const Chouse = () => {
    
    useEffect(()=>{
        Aos.init({duration:2000});
    })
    
    return (
       
    <section className="flex min-h-[700px]  w-full items-center justify-center bg-white px-8">
    <div className="flex w-full max-w-6xl gap-10 lg:flex-row flex-col items-center justify-between">
      <div className="max-w-md md:space-y-6 sm:space-y-5 space-y-4 " data-aos="fade-right">
        <h1 className="lg:text-5xl sm:text-4xl text-3xl font-bold leading-tight text-gray-900">Join Out Medical Camp to the next level.</h1>
        <p className="lg:text-lg sm:text-base text-sm text-gray-600">
       MCMS solution is a Home Repair service and  planning, design, managing, and overseeing camp projects Instantly book competitively
        </p>
        <div className="flex space-x-4">
          <Link to={'/allServices'} className="inline-flex flex-nowrap items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 py-2 bg-blue-600 text-white">
            View Services 
          </Link>
          
        </div>
        <p className="text-sm text-gray-500">Trusted by 5000+ Users</p>
      </div>
      <div className="relative" data-aos="zoom-in-up">  
        <img src="https://i.postimg.cc/tTN8G80k/contact-img.png"  className=" relative md:h-[500px]  sm:h-[400px] h-[400px]  w-[500px] bg-gray-400 rounded-xl " alt="hero navigate ui"/>
      </div>
    </div>
  </section>       
    
    );
};

export default Chouse;