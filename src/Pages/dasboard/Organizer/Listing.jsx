// import {  useMutation, useQuery } from '@tanstack/react-query'
import { Helmet } from 'react-helmet-async'
// import { axiosCommon } from '../../../Components/hook/useAxiosCommon'
import useAxiosSecure from '../../../Components/hook/useAxiosSecure'
import UseAuth from '../../../Components/hook/UseAuth'
import CampDataRows from '../../../Components/TableRow/CampDataRows'
import toast from 'react-hot-toast'
import { useMutation, useQuery } from '@tanstack/react-query'
import Swal from 'sweetalert2'

const Listing = () => {
    const axiosSecure = useAxiosSecure()
    const { user } = UseAuth()
    //fetch camp Data
    const { data: camps = [], isLoading,refetch } = useQuery({
        queryKey: ['my-listing', user?.email],
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/my-listing/${user?.email}`)
            return data
        },
    })
    // console.log(camps);
   

   
   
    //delete
    const {mutateAsync} = useMutation({
        mutationFn:async id=>{
            const {data}=await axiosSecure.delete(`/camp/${id}`)
            return data
        },
        onSuccess:(data)=>{
            console.log(data)
            refetch()
            // toast.success('sucessfully deleted')
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Delete Camp Successfully ",
                showConfirmButton: false,
                timer: 1500
              });
            
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
    if (isLoading) return <span className="loading loading-infinity loading-lg mx-auto flex text-primary  "></span>
    return (
        <>
            <Helmet>
                <title>My Listing</title>
            </Helmet>




            <div className='container mx-auto px-4 sm:px-8'>
                <div className='py-8'>
                    <div className='-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto'>
                        <div className='inline-block min-w-full shadow rounded-lg overflow-hidden'>
                            <table className='min-w-full leading-normal'>
                                <thead>
                                    <tr>
                                        <th
                                            scope='col'
                                            className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                                        >
                                            Title
                                        </th>
                                        <th
                                            scope='col'
                                            className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                                        >
                                            Location
                                        </th>
                                        <th
                                            scope='col'
                                            className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                                        >
                                            Price
                                        </th>
                                        <th
                                            scope='col'
                                            className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                                        >
                                            Date
                                        </th>

                                        <th
                                            scope='col'
                                            className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                                        >
                                            Delete
                                        </th>
                                        <th
                                            scope='col'
                                            className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                                        >
                                            Update
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>{/* Room row data */}</tbody>
                                {camps.map(camp =>
                                    // <p key={camp._id}>{camp.title}</p>
                                    <CampDataRows key={camp._id} 
                                      camp={camp}
                                      refetch={refetch}
                                        
                                        handelDelete={handelDelete}
                                    ></CampDataRows>
                                )}
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Listing