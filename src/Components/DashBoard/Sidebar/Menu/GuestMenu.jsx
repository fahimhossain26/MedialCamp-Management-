import { BsFingerprint } from 'react-icons/bs'
import { GrUserAdmin } from 'react-icons/gr'
import MenuItem from './/MenuItem'
import HostModal from '../../../Modal/HostRequestModal'
import Swal from 'sweetalert2'
import { useContext, useState } from 'react'
import { toast } from 'react-toastify'
import useAxiosSecure, { axiosSecure } from '../../../hook/useAxiosSecure'
import { AuthContext } from '../../../../Provider/AuthProvider'

const GuestMenu = () => {

  const [isModalOpen, setModalOpen] = useState(false)
  const axiosSecure = useAxiosSecure()
  const { user, logOut } = useContext(AuthContext)
  const closeModal = () => {
    setModalOpen(false)
  }
  const modalHandler = async() => {
    console.log('i Want to be a organier')
    // closeModal();
    try {
      const currentUser = {
        email: user?.email,
        role: 'participant',
        status: 'Requested'
      }
      const { data } = await  axiosSecure.put(`/user`, currentUser)
      console.log(data);
      if(data.modifiedCount>0){
        // toast.success('success please wait for Admin confermation')
        Swal.fire("success . please wait for Admin confermation 🔰");
        
      }
      else{
        // toast.success(' please wait for Admin aproval🔰')
        Swal.fire(" please wait for Admin aproval !⏳");
      }

    } catch (err) {
      console.log(err);
      toast.error(err.message)
    }
    finally{
      closeModal()
    }
  }
  return (
    <>
      <MenuItem
        icon={BsFingerprint}
        label='My Bookings'
        address='my-bookings'
      />

      <div   onClick={() => setModalOpen(true)} className='flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform text-gray-600  hover:bg-gray-300   hover:text-gray-700 cursor-pointer'>
        <GrUserAdmin className='w-5 h-5' />

        <span className='mx-4 font-medium'>Become A Organizer</span>
      </div>
      <HostModal isOpen={isModalOpen} closeModal={closeModal} modalHandler={modalHandler}></HostModal>
    </>
  )
}

export default GuestMenu