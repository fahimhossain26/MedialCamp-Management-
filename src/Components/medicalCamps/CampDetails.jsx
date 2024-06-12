import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import useAxiosCommon from '../hook/useAxiosCommon';
import { useQuery } from '@tanstack/react-query';
import UseAuth from '../hook/UseAuth';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import BookingModal from '../Modal/BookingModal';
import { Button } from '@headlessui/react';


const CampDetails = () => {
    // const camps=useLoaderData()
    //  const {_id, campFees,campName, description, image, location,healthcareProfessional}=camp

    const[isOpen,setIsOpen]=useState(false)
const closeModal=()=>{
  setIsOpen(false)
}




    const [startDate, setStartDate] = useState(new Date());
const {user}=UseAuth()
    const { id } = useParams()
    const axiosCommon = useAxiosCommon()


  const { data: camp = {}, isLoading,refetch} = useQuery({
    queryKey: ['camp', id],
    queryFn: async () => {
      const { data } = await axiosCommon.get(`/camp/${id}`)
      return data
    },
  })

  if (isLoading) return <span className="loading loading-infinity loading-lg mx-auto flex "></span>
  
//   console.log(camp)
    return (
        <div className='flex flex-col md:flex-row justify-around gap-5  items-center min-h-[calc(100vh-306px)] md:max-w-screen-xl mx-auto '>
      {/* Job Details */}
      <div className='flex-1  px-4 py-7 bg-white rounded-md shadow-md md:min-h-[350px] mt-20 '>
        <div className='flex items-center justify-between'>
          <span className='text-sm font-light text-gray-800 '>

          </span>
        
        </div>

        <div className='bg-blue-50 rounded-lg'>
          <h1 className='mt-2 text-3xl font-semibold text-gray-800  mb-4 text-center'>
          {camp?.title}


          

          </h1>
          <img className="h-96 w-auto mx-auto " src={camp?.image} alt="" />
          

          <p className='mt-2 text-lg text-gray-600 ml-20  '>
          <p > <span className='mt-6 text-sm font-bold text-gray-600 ' >Description : </span>  {camp?.description}  </p> 
          </p>
          <p className='mt-6 text-sm font-bold text-gray-600 ml-20 '>
          Camp Provider Information:
          </p>

          <div className='flex items-center gap-5 ml-20 mb-10  '>
             <div>
              <p className='mt-2 text-sm  text-gray-600 '>Organizer Name : {camp.organizer.Name}</p>
              <p className='mt-2 text-sm  text-gray-600 '>
                Email: {camp.organizer.email}
              </p>
            </div> 
             <div className='rounded-full object-cover overflow-hidden w-20 h-20'>
              <img src={camp.organizer.image} alt='' />
            </div> 


          </div>
        <div>
        <p className=' text-lg font-bold text-gray-600 ml-20 '>
            professional doctor :{camp?.professionalName}
          </p>
          <p className=' text-lg font-bold text-gray-600 ml-20  '>
            Service Area :{ camp?.location}
          </p>
          <p className='mt-6 text-lg font-bold text-gray-600  ml-20 '>
            Price:{camp?.price}$
          </p>
        </div>
          
        </div>

        <form className='bg-blue-50'>
          <div className='grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2'>
            <div>
              <label className='text-black font-bold font-pops ' htmlFor='price'>
                Camp fees$
              </label>
              <input
                id='price'
                type='text'
                name='price'
                defaultValue={camp?.price}
                disabled

                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
              />
            </div>

            <div>
              <label className='text-black font-bold font-pops' htmlFor='emailAddress'>
                Email Address
              </label>
              <input
                id='emailAddress'
                type='email'
                name='email'
                defaultValue={user?.email}
                disabled

                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
              />
            </div>

            <div className='space-y-1 text-sm'>
                <label htmlFor='price' className='block text-gray-600'>
                Date 
                </label>
                <DatePicker id='date' className="w-full px-4 py-3 text-gray-800 border border-blue-300 focus:outline-blue-500 rounded-md  " selected={startDate} onChange={(date) => setStartDate(date)} />
              </div>


              <div>
              <label className='text-black font-bold font-pops' htmlFor='emailAddress'>
                Camp Location
              </label>
              <input
                id='emailAddress'
                type='email'
                name='text'
                defaultValue={camp?.location}
                disabled

                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
              />
            </div>

          
          
          </div>

          {/* <div className='flex justify-end mt-6'>
            <button onClick={()=>setIsOpen(true)}
              type='submit'
              className='px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-blue-800 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600 btn-block'
            >
              Join Camp
            </button>
         
          </div> */}


        </form>
        <div className='flex justify-end mt-6'>
            <button
            disabled={camp?.booked}
             onClick={()=>setIsOpen(true)}
             
              type='submit'
              className='px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-blue-800 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600 btn-block'
            >
             {camp?.booked === true? 'booked' : ' Join Camp'}
            </button>
         
          </div>
        






        
      </div>
      <BookingModal isOpen={isOpen} closeModal={closeModal} bookingInfo={{...camp, participant: {name: user?.displayName,email: user?.email, image: user?.photoURL}}  }  refetch={refetch}></BookingModal>


     

      {/* <section className='p-6 w-full bg-white rounded-md shadow-md flex-1 md:min-h-[150px] bg-blue-400'>
        <h2 className='text-2xl font-semibold text-gray-700 capitalize text-center text-white '>
          book Now
        </h2> 

         <form>
          <div className='grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2'>
            <div>
              <label className='text-black font-bold font-pops ' htmlFor='price'>
                Price$
              </label>
              <input
                id='price'
                type='text'
                name='price'
                defaultValue={camp?.price}
                disabled

                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
              />
            </div>

            <div>
              <label className='text-black font-bold font-pops' htmlFor='emailAddress'>
                Email Address
              </label>
              <input
                id='emailAddress'
                type='email'
                name='email'
                defaultValue={user?.email}
                disabled

                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
              />
            </div>

          
          
          </div>

          <div className='flex justify-end mt-6'>
            <button
              type='submit'
              className='px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-blue-800 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600 btn-block'
            >
              Join Camp
            </button>

          </div>
        </form>


        
       </section>  */}
    </div>
    );
};

export default CampDetails;