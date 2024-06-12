import React, { useState } from 'react';

import Swal from 'sweetalert2'


// import { MapContainer } from 'react-leaflet/MapContainer'
// import { TileLayer } from 'react-leaflet/TileLayer'
// import { useMap } from 'react-leaflet/hooks'
// import { Marker, Popup } from 'react-leaflet';



const Contact = () => {


    return (
        
        <div>
           
            <Form8></Form8>

            <div>





   
            </div>
   
        </div>
       
    );
};

export default Contact;


export const Form8 = () => {
    return (
       <div>
         <div className="flex h-screen items-center justify-center bg-[#8EA7E9]/20 p-6 md:p-0">
            <div className="flex h-full w-full overflow-hidden rounded-xl shadow-md  md:h-[90%] md:w-[80%] lg:h-[80%]">
                {/* register design side  */}
                <div className="relative hidden h-full items-center justify-center bg-[#8EA7E9] md:flex md:w-[60%] lg:w-[40%]">
                    <div className="absolute -top-2 left-[20%] h-16 w-16 rounded-full bg-gradient-to-br  from-white via-[#9eb6f8] to-[#6585dd]"></div>
                    <div className="absolute bottom-[18%] left-[20%] h-20 w-20 rounded-full bg-gradient-to-br  from-white via-[#9eb6f8] to-[#6585dd]"></div>
                    <div className="absolute -right-7 top-[50%] h-14 w-14 -translate-y-1/2 rounded-full bg-gradient-to-br from-white via-[#9eb6f8] to-[#6585dd] transition-all"></div>
                    <div className="absolute left-[50%] top-[22%] h-24 w-24 -translate-x-1/2 rounded-full  bg-gradient-to-br from-white via-[#9eb6f8] to-[#6585dd]"></div>
                    <div className="space-y-2 text-center">
                        <h2 className="text-3xl font-medium text-white/80 ">Welcome Back</h2>
                        <p className="animate-pulse text-sm text-white/60">Please Enter You Information</p>
                        <img className='w-40 rounded-full mt-20' src="https://i.postimg.cc/ydHzgZGC/send-us-message-special-glassy-orange-round-button-send-us-message-isolated-special-glassy-orange-ro.webp" alt="" />
                    </div>
                </div>
                {/* input side  */}
                <div className="flex w-full flex-col justify-center bg-white py-10 lg:w-[65%]">
                    <h2 className="pb-8 text-center text-3xl font-bold text-[#8EA7E9]">Get In Toch</h2>
                    <form className="flex  w-full flex-col items-center justify-center gap-4">
                        <input className="w-[80%] rounded-lg border border-[#8EA7E9] px-6 py-2 focus:outline-none focus:ring-2 focus:ring-[#8EA7E9]/50 md:w-[60%]" type="text" placeholder="Name" name="name" required/>
                        <input className="w-[80%] rounded-lg border border-[#8EA7E9] px-6 py-2 focus:outline-none focus:ring-2 focus:ring-[#8EA7E9]/50 md:w-[60%]" type="email" placeholder="Email" name="email" required/>
                        <input className="w-[80%] rounded-lg border border-[#8EA7E9] px-6 py-2 focus:outline-none focus:ring-2 focus:ring-[#8EA7E9]/50 md:w-[60%]" type="number" placeholder="Number" name="Number" required />
                        <input className="w-[80%] rounded-lg border border-[#8EA7E9] px-6 py-2 focus:outline-none focus:ring-2 focus:ring-[#8EA7E9]/50 md:w-[60%]" type="text" placeholder="Detais text" name="text" required/>
                        
                        <input className="  w-[80%] rounded-lg bg-[#8EA7E9] px-6 py-2 font-medium text-white md:w-[60%]" type="submit" />
                        
                    </form>
                    {/* divider  */}
                   
                    
                </div>
            </div>
        </div>





{/* <LocationMap></LocationMap> */}


       </div>
    );
};

// export default Form8;