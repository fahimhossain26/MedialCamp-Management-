import PropTypes from 'prop-types'
import { useState } from 'react'
// import { format } from 'date-fns'
import { Description, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import DeleteModal from '../Modal/DeleteModal'
import UpdateCampModal from '../Modal/UpdateCampModal'

const CampDataRows = ({ camp ,handelDelete ,refetch}) => {
    //for delete modal 
    const  [isOpen, setIsOpen] = useState(false)
    const  [isEditModalOpen, setIsEditModalOpen] = useState(false)

    const closeModal=()=>{
        setIsOpen(false)
    }

  return (
    <tr>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <div className='flex items-center'>
          <div className='flex-shrink-0'>
            <div className='block relative'>
              <img
                alt='profile'
                src={camp?.image}
                className='mx-auto object-cover rounded h-10 w-15 '
              />
            </div>
          </div>
          <div className='ml-3'>
            <p className='text-gray-900 whitespace-no-wrap'>{camp?.title}</p>
          </div>
        </div>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900 whitespace-no-wrap'>{camp?.location}</p>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900 whitespace-no-wrap'>${camp?.price}</p>
      </td>
       <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
       <p className='text-gray-900 whitespace-no-wrap'>{camp?.date}</p>
      </td>
      {/*<td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900 whitespace-no-wrap'>
          {format(new Date(camp?.to), 'P')}
        </p>
      </td> */}
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <button 
        onClick={()=>setIsOpen(true)}
         className='relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight'>
          <span
            aria-hidden='true'
            className='absolute inset-0 bg-red-200 opacity-50 rounded-full'
          ></span>
          <span className='relative'>Delete</span>
        </button>
        {/* Delete modal */}
        <DeleteModal isOpen={isOpen} closeModal={closeModal} handelDelete={handelDelete } id={camp?._id} ></DeleteModal>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <button onClick={()=>setIsEditModalOpen(true)} className='relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight'>
          <span
            aria-hidden='true'
            className='absolute inset-0 bg-green-200 opacity-50 rounded-full'
          ></span>
          <span className='relative'>Update</span>
        </button>
        {/* Update Modal */}
        <UpdateCampModal isOpen={isEditModalOpen}
         setIsEditModalOpen={setIsEditModalOpen}
         camp={camp}
         refetch={refetch}
         ></UpdateCampModal>

      </td>
    </tr>
  )
}

CampDataRows.propTypes = {
  camp: PropTypes.object,
  refetch: PropTypes.func,
}

export default CampDataRows