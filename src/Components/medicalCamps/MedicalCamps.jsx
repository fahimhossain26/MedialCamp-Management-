import axios from 'axios';
import React, { useEffect, useState } from 'react';
import SingleCamp from './SingleCamp';

const MedicalCamps = () => {
    const [allCamp,setAllCamp]=useState([])
    useEffect(()=>{
     const getData=async()=>{
         const {data}=await axios(`${import.meta.env.VITE_API_URL}/camps`)
           setAllCamp(data)
     }
   getData()
},[])
    return (
        <div className=' px-4 mx-auto '>
        <h2 className="text-5xl text-center mb-10 font-mono  text-blue-700">Popular Camps  </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
            {/* {
                allService.map(service => (<ServiceCard

                    key={service._id} service={service}
                ></ServiceCard>))
            } */}




            {
                allCamp.map(camp=> (<SingleCamp  key={camp._id} camp={camp}></SingleCamp> ))
            }
        </div>




    </div>
    );
};

export default MedicalCamps;