// import { categories } from '../Categories/CategoriesData'
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const AddCampForm = ({handelSubmit}) => {
    const [startDate, setStartDate] = useState(new Date());

  return (
    <div className='w-full min-h-[calc(100vh-40px)] flex flex-col justify-center items-center text-gray-800 rounded-xl bg-gray-50'>
      <form onSubmit={handelSubmit} > 
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
          <div className='space-y-6'>


          <div className='space-y-1 text-sm'>
              <label htmlFor='title' className='block text-gray-600'>
              Camp Name

              </label>
              <input
                className='w-full px-4 py-3 text-gray-800 border border-blue-300 focus:outline-blue-500 rounded-md '
                name='title'
                id='title'
                type='text'
                placeholder='Camp Name'
                required
              />
            </div>

            <div className='space-y-1 text-sm'>
              <label htmlFor='location' className='block text-gray-600'>
                Camp fees
              </label>
              <input
                className='w-full px-4 py-3 text-gray-800 border border-blue-300 focus:outline-blue-500 rounded-md '
                name='price'
                id='price'
                type='number'
                placeholder='Price'
                required
              />
            </div>


            {/* 
              <div className='flex flex-col gap-2 '>
              <label className='text-black font-bold font-pops'>Deadline</label>

              
              <DatePicker className="border p-2 px-6 rounded-md" selected={startDate} onChange={(date) => setStartDate(date)} />
            </div> */}
          


            <div className='space-y-1 text-sm'>
              <label htmlFor='location' className='block text-gray-600'>
              Healthcare Professional Name
              </label>
              <input
                className='w-full px-4 py-3 text-gray-800 border border-blue-300 focus:outline-blue-500 rounded-md '
                name='professionalName'
                id='professionalName'
                type='text'
                placeholder=' Healthcare Professional Name'
                required
              />
            </div>

            
            
          </div>
          <div className='space-y-6'>
          <div className='space-y-1 text-sm'>
              <label htmlFor='location' className='block text-gray-600'>
                Location
              </label>
              <input
                className='w-full px-4 py-3 text-gray-800 border border-blue-300 focus:outline-blue-500 rounded-md '
                name='location'
                id='location'
                type='text'
                placeholder='Location'
                required
              />
            </div>

         
            <div className='flex justify-between gap-2'>
              <div className='space-y-1 text-sm'>
                <label htmlFor='price' className='block text-gray-600'>
                Date 
                </label>
                <DatePicker id='date' className="w-full px-4 py-3 text-gray-800 border border-blue-300 focus:outline-blue-500 rounded-md  " selected={startDate} onChange={(date) => setStartDate(date)} />
              </div>

              <div className='space-y-1 text-sm'>
                <label htmlFor='guest' className='block text-gray-600'>
                  Total Perticipent
                </label>
                <input
                  className='w-full px-4 py-3 text-gray-800 border border-blue-300 focus:outline-blue-500 rounded-md '
                  name='total_Perticipent'
                  id='total_Perticipent'
                  type='number'
                  placeholder='Total Perticipent'
                  required
                />
              </div>
            </div>


            <div className=' p-4 bg-white w-full  m-auto rounded-lg'>
              {/* <div className='file_upload px-5 py-3 relative border-4 border-dotted border-gray-300 rounded-lg'>
                <div className='flex flex-col w-max mx-auto text-center'>
                  <label>
                    <input
                      className='text-sm cursor-pointer w-36 hidden'
                      type='file'
                      name='image'
                      id='image'
                      accept='image/*'
                      hidden
                    />
                    <div className='bg-blue-500 text-white border border-gray-500 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-blue-500'>
                      Upload Image
                    </div>
                  </label>
                </div>
              </div> */}


<div className='space-y-1 text-sm'>
              <label htmlFor='location' className='block text-gray-600'>
                Image
              </label>
              <input
                className='w-full px-4 py-3 text-gray-800 border border-blue-300 focus:outline-blue-500 rounded-md '
                name='image'
                id='image'
                type='text'
                placeholder='Image Url'
                required
              />
            </div>
            </div>
          

           
          </div>

          
        </div>
        <div className='space-y-1 text-sm'>
              <label htmlFor='description' className='block text-gray-600'>
                Description
              </label>

              <textarea
                id='description'
                className='block rounded-md focus:rose-300 w-full h-32 px-4 py-3 text-gray-800  border border-blue-300 focus:outline-blue-500 '
                name='description'
              ></textarea>
            </div>

        <button
          type='submit'
          className='w-full p-3 mt-5 text-center font-medium text-white transition duration-200 rounded shadow-md bg-blue-500'
        >
          Save & Continue
        </button>
      </form>
    </div>
  )
}

export default AddCampForm