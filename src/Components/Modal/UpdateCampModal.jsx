import PropTypes from 'prop-types'
import {
  Dialog,
  Transition,
  TransitionChild,
  DialogPanel,
  DialogTitle,
} from '@headlessui/react'
import { Fragment, useState } from 'react'
import UpdateCampForm from '../Form/UpdateCampForm'
import useAxiosSecure from '../hook/useAxiosSecure'
import Swal from 'sweetalert2'

const UpdateCampModal = ({ setIsEditModalOpen, isOpen,camp , refetch }) => {
  
  const axiosSecure=useAxiosSecure()
  const [loading,setLoading]=useState(false)
  const [campData,setCampData]=useState(camp)


  const handleSubmit= async e =>{
    setLoading(true)
    e.preventDefault()
    const  updatedCampData= Object.assign({},campData)
    delete updatedCampData._id
    console.log(updatedCampData)
    try{
const {data}=await axiosSecure.put(`/camp/update/${camp?._id}`,
  updatedCampData
)
console.log(data);
refetch()
setLoading(false)
Swal.fire("Camp info Updated");
    }catch(err){
console.log(err);
Swal.fire("Error!!");

    }
  }
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as='div'
        className='relative z-10'
        onClose={() => setIsEditModalOpen(false)}
      >
        <TransitionChild
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 bg-black bg-opacity-25' />
        </TransitionChild>

        <div className='fixed inset-0 overflow-y-auto'>
          <div className='flex min-h-full items-center justify-center p-4 text-center'>
            <TransitionChild
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 scale-95'
              enterTo='opacity-100 scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 scale-100'
              leaveTo='opacity-0 scale-95'
            >
              <DialogPanel className='w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all'>
                <DialogTitle
                  as='h3'
                  className='text-lg font-medium text-center leading-6 text-gray-900'
                >
                  Update Camp Info
                </DialogTitle>
                <div className='mt-2 w-full'>
                  
                  
                  <UpdateCampForm 
                  handleSubmit={handleSubmit}
                  campData={campData}
                  loading={loading}
                  setCampData={setCampData}
                  ></UpdateCampForm>
                  
                  {/* Update room form */}
                  {/* Update room form */}
                
                
                
                
                
                </div>
                <hr className='mt-8 ' />
                <div className='mt-2 '>
                  <button
                    type='button'
                    className='inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2'
                    onClick={() => setIsEditModalOpen(false)}
                  >
                    Cancel
                  </button>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}


export default UpdateCampModal