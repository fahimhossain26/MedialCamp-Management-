/* eslint-disable react/prop-types */
// import { categories } from '../Categories/CategoriesData'
// import { DateRange } from 'react-date-range'
// import { useState } from "react";
// import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// const [startDate, setStartDate] = useState(new Date());
const UpdateCampForm = ({
  handleSubmit,
  
  setCampData,
  campData,

}) => {

  return (
    <div className='w-full min-h-[calc(100vh-40px)] flex flex-col justify-center items-center text-gray-800 rounded-xl bg-gray-50'>
      <form onSubmit={handleSubmit}>
        <div className='grid grid-cols-1 gap-10'>

        <div className='space-y-1 text-sm'>
            <label htmlFor='title' className='block text-gray-600'>
              Title
            </label>
            <input
              className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
              name='title'
              id='title'
              type='text'
              value={campData?.title}
              onChange={e =>
                setCampData({ ...campData, title: e.target.value })
              }
              placeholder='Title'
              required
            />
          </div>

          <div className='space-y-1 text-sm'>
            <label htmlFor='location' className='block text-gray-600'>
              Location
            </label>
            <input
              className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
              name='location'
              id='location'
              type='text'
              value={campData?.location}
              onChange={e =>
                setCampData({ ...campData, location: e.target.value })
              }
              placeholder='Location'
              required
            />
          </div>
          

         

          {/* <div className='space-y-1'>
            <label htmlFor='location' className='block text-gray-600'>
              Select Availability Range
            </label>
            <div className='space-y-1 text-sm'>
                <label htmlFor='price' className='block text-gray-600'>
                Date 
                </label>
                <DatePicker id='date' className="w-full px-4 py-3 text-gray-800 border border-blue-300 focus:outline-blue-500 rounded-md  " selected={startDate} onChange={(date) => setStartDate(date)} />
              </div>
          </div> */}

          <div className=' p-4 bg-white w-full  m-auto rounded-lg'>
            <div className='file_upload px-5 py-3 relative border-4 border-dotted border-gray-300 rounded-lg'>
              <div className='flex flex-col w-max mx-auto text-center'>
              <div className='space-y-1 text-sm'>
              <label htmlFor='location' className='block text-gray-600'>
                Image URl
              </label>
              <input
                className='w-full px-4 py-3 text-gray-800 border border-blue-300 focus:outline-blue-500 rounded-md '
                name='image'
                id='image'
                type='text'
                value={campData?.image}
                onChange={e =>
                    setCampData({ ...campData, image: e.target.value })
                  }
                placeholder='Image Url'
                required
              />
            </div>
              </div>
            </div>
          </div>
          <div className='flex justify-between gap-2'>
            <div className='space-y-1 text-sm'>
              <label htmlFor='price' className='block text-gray-600'>
                Price
              </label>
              <input
                className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                name='price'
                id='price'
                value={campData?.price}
                onChange={e =>
                  setCampData({ ...campData, price: e.target.value })
                }
                type='number'
                placeholder='Price'
                required
              />
            </div>



            {/* <div className='space-y-1 text-sm'>
              <label htmlFor='guest' className='block text-gray-600'>
                Total guest
              </label>
              <input
                className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                name='total_guest'
                id='guest'
                value={roomData?.guests}
                onChange={e =>
                  setRoomData({ ...roomData, guests: e.target.value })
                }
                type='number'
                placeholder='Total guest'
                required
              />
            </div> */}



          </div>

          <div className='flex justify-between gap-2'>
         

            
          </div>

          <div className='space-y-1 text-sm'>
            <label htmlFor='description' className='block text-gray-600'>
              Description
            </label>

            <textarea
              id='description'
              value={campData?.description}
              onChange={e =>
                setCampData({ ...campData, description: e.target.value })
              }
              className='block rounded-md focus:rose-300 w-full h-32 px-4 py-3 text-gray-800  border border-rose-300 focus:outline-rose-500 '
              name='description'
            ></textarea>
          </div>
        </div>

        <button
          type='submit'
          className='w-full p-3 mt-5 text-center font-medium text-white transition duration-200 rounded shadow-md bg-rose-500'
        >
          Update
        </button>
      </form>
    </div>
  )
}

export default UpdateCampForm