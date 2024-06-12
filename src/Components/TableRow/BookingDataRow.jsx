import { format } from 'date-fns'
import PropTypes from 'prop-types'
import { useState } from 'react'
import DeleteModal from '../Modal/DeleteModal'
import useAxiosSecure from '../hook/useAxiosSecure'
import { useMutation, useQuery } from '@tanstack/react-query'
import Swal from 'sweetalert2'

const BookingDataRow = ({ booking, refetch }) => {
    const axiosSecure=useAxiosSecure()
    const [isOpen,setIsOpen]=useState(false)
    const closeModal= ()=>{
        setIsOpen(false)
    }

//delet
    const {mutateAsync} = useMutation({
        mutationFn: async id=>{
            const {data} = await axiosSecure.delete(`/booking/${id}`)
            return data
        },
        onSuccess: async data=>{
            console.log(data)
            refetch()
            // toast.success('sucessfully deleted')
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "booking canceled ",
                showConfirmButton: false,
                timer: 1500
              });
              await axiosSecure.patch(`/camp/status/${booking?.campId}`,{status: false,

              })
            
        },
    })
    //handel delete 
    const handelDelete = async id => {
        console.log(id);
        try{
            await mutateAsync(id)
        }
        catch(err){
            console.log(err);
        }
    }
    // if (isLoading) return <span className="loading loading-infinity loading-lg mx-auto flex text-primary  "></span>

    return (
        <tr>
            <td className='px-5 py-5 border-b border-gray-200 bg-green-100 text-sm'>
                <div className='flex items-center'>
                    <div className='flex-shrink-0'>
                        <div className='block relative'>
                            <img
                                alt='profile'
                                src={booking?.image}
                                className='mx-auto object-cover rounded h-10 w-15 '
                            />
                        </div>
                    </div>
                    <div className='ml-3'>
                        <p className='text-gray-900 whitespace-no-wrap'>{booking?.title}</p>
                    </div>
                </div>
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-green-100 text-sm'>
                <div className='flex items-center'>
                    <div className='flex-shrink-0'>
                        <div className='block relative'>
                            <img
                                alt='profile'
                                src={booking?.participant?.image}
                                className='mx-auto object-cover rounded h-10 w-15 '
                            />
                        </div>
                    </div>
                    <div className='ml-3'>
                        <p className='text-gray-900 whitespace-no-wrap'>
                            {booking?.participant?.name}
                        </p>
                    </div>
                </div>
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-green-100 text-sm'>
                <p className='text-gray-900 whitespace-no-wrap'>${booking?.price}</p>
            </td>


            <td className='px-5 py-5 border-b border-gray-200 bg-green-100 text-sm'>
                <p className='text-gray-900 whitespace-no-wrap'>{booking?.date}</p>
            </td>

            <td className='px-5 py-5 border-b border-gray-200 bg-green-100 text-sm'>
                <button onClick={()=>setIsOpen(true)} className='relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight'>
                    <span
                        aria-hidden='true'
                        className='absolute inset-0 bg-orange-200  rounded-full'
                    ></span>
                    <span className='relative'>Cancel</span>
                    {/* delete Modal */}
                    <DeleteModal handelDelete={handelDelete}
                     closeModal={closeModal}
                      isOpen={isOpen}
                      id={booking?._id}
                      ></DeleteModal>
                    
                </button>
              
            </td>
        </tr>
    )
}

BookingDataRow.propTypes = {
    booking: PropTypes.object,
    refetch: PropTypes.func,
}

export default BookingDataRow