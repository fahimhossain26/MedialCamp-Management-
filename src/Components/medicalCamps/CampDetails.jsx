import React from 'react';
import { useParams } from 'react-router-dom';
import useAxiosCommon from '../hook/useAxiosCommon';
import { useQuery } from '@tanstack/react-query';


const CampDetails = () => {
    // const camps=useLoaderData()
    //  const {_id, campFees,campName, description, image, location,healthcareProfessional}=camp

    const { id } = useParams()
    const axiosCommon = useAxiosCommon()

  const { data: camp = {}, isLoading} = useQuery({
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

        <div>
          <h1 className='mt-2 text-3xl font-semibold text-gray-800  mb-4 text-center'>
          {camp?.campName}


          

          </h1>
          <img className="h-96 w-auto mx-auto " src={camp?.image} alt="" />
          

          <p className='mt-2 text-lg text-gray-600 ml-20  '>
            {camp?.description}
          </p>
          <p className='mt-6 text-sm font-bold text-gray-600 ml-20 '>
          Service Provider Information:
          </p>
          <div className='flex items-center gap-5 '>
            {/* <div>
              <p className='mt-2 text-sm  text-gray-600 '>Name:{buyer?.name}</p>
              <p className='mt-2 text-sm  text-gray-600 '>
                Email: {buyer?.email}
              </p>
            </div> */}
            {/* <div className='rounded-full object-cover overflow-hidden w-14 h-14'>
              <img src={buyer?.photo} alt='' />
            </div> */}
          </div>
        <div>
        <p className=' text-lg font-bold text-gray-600 ml-20 '>
            professional doctor :{camp?.healthcareProfessional}
          </p>
          <p className=' text-lg font-bold text-gray-600 ml-20  '>
            Service Area :{ camp?.location}
          </p>
          <p className='mt-6 text-lg font-bold text-gray-600  ml-20 '>
            Price:{camp?.campFees}$
          </p>
        </div>
          
        </div>
      </div>

      {/* Place A Bid Form */}

      {/* <section className='p-6 w-full  bg-white rounded-md shadow-md flex-1 md:min-h-[350px] bg-blue-400'>
        <h2 className='text-2xl font-semibold text-gray-700 capitalize text-center text-white '>
          book Now
        </h2> */}

        {/* <form onSubmit={handelFromSubmit}>
          <div className='grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2'>
            <div>
              <label className='text-black font-bold font-pops ' htmlFor='price'>
                Price$
              </label>
              <input
                id='price'
                type='text'
                name='price'
                defaultValue={price}
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

            <div>
              <label className='text-black font-bold font-pops ' htmlFor='comment'>
              Special instruction 
              </label>
              <input
                id='comment'
                name='comment'
                type='text'
                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
              />
            </div>
            <div className='flex flex-col gap-2 '>
              <label className='text-black font-bold font-pops'>Deadline</label>

              
              <DatePicker className="border p-2 px-6 rounded-md" selected={startDate} onChange={(date) => setStartDate(date)} />
            </div>
          </div>

          <div className='flex justify-end mt-6'>
            <button
              type='submit'
              className='px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-blue-800 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600 btn-block'
            >
              Place Bid
            </button>

          </div>
        </form> */}


        {/* <Modal></Modal> */}
      {/* </section> */}
    </div>
    );
};

export default CampDetails;