import PropTypes from 'prop-types'
import { useState } from 'react'
import UpdateUserModal from '../Modal/UpdateUserModal'
import { useMutation } from '@tanstack/react-query'
import useAxiosSecure from '../hook/useAxiosSecure'
import UseAuth from '../hook/UseAuth'
import Swal from 'sweetalert2'
const UserDataRow = ({ user, refetch }) => {
    const {user:loggedInUser}=UseAuth()
    const [isOpen, setIsOpen,] = useState(false)
    const axiosSecure = useAxiosSecure()
    // const { user: loggedInUser } = UseAuth()

    const { mutateAsync } = useMutation({
        mutationFn: async role => {
            const { data } = await axiosSecure.patch(`users/update/${user?.email}`, role)

            return data
        },
        onSuccess: (data) =>{
            refetch()
            console.log(data)
            Swal.fire("user update role sucessfully!")
            setIsOpen(false)
        }
      

    })

    //modalHandler
    const modalHandler = async selected => {
        if(loggedInUser.email === user.email){
            Swal.fire("action not allow !")
            return setIsOpen(false)
        }
       
        console.log('user role updated', selected)
        const userRole = {
            role: selected,
            status: 'verified',
           
        }
        try {
            await mutateAsync(userRole)

        } catch (err) {
            console.log(err);
            Swal.fire(err.message);
        }
    }
    return (
        <tr>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <p className='text-gray-900 whitespace-no-wrap'>{user?.email}</p>
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <p className='text-gray-900 whitespace-no-wrap'>{user?.role}</p>
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                {user?.status ? (
                    <p
                        className={`${user.status === 'Verified' ? 'text-green-500' : 'text-yellow-500'
                            } whitespace-no-wrap`}
                    >
                        {user.status}
                    </p>
                ) : (
                    <p className='text-red-500 whitespace-no-wrap'>Unavailable</p>
                )}
            </td>

            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <button onClick={() => setIsOpen(true)} className='relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight'>
                    <span
                        aria-hidden='true'
                        className='absolute inset-0 bg-green-200 opacity-50 rounded-full'
                    ></span>
                    <span className='relative'>Update Role</span>
                </button>
                {/* Update User Modal */}
                <UpdateUserModal isOpen={isOpen} setIsOpen={setIsOpen} modalHandler={modalHandler} user={user}></UpdateUserModal>
            </td>
        </tr>
    )
}

UserDataRow.propTypes = {
    user: PropTypes.object,
    refetch: PropTypes.func,
}

export default UserDataRow