import PropTypes from 'prop-types'
import {
    Dialog,
    Transition,
    TransitionChild,
    DialogPanel,
    DialogTitle,
} from '@headlessui/react'
// import { format } from 'date-fns'
import { Fragment, useState } from 'react'
import UseAuth from '../hook/UseAuth';
import { useParams } from 'react-router-dom';
import useAxiosCommon from '../hook/useAxiosCommon';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useQuery } from '@tanstack/react-query';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from '../Form/CheckoutForm';



const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

const BookingModal = ({ closeModal, isOpen, bookingInfo }) => {
    // const [startDate, setStartDate] = useState(new Date());
    const { user } = UseAuth()
    const { id } = useParams()
    const axiosCommon = useAxiosCommon()


    const { data: camp = {} } = useQuery({
        queryKey: ['camp', id],
        queryFn: async () => {
            const { data } = await axiosCommon.get(`/camp/${id}`)
            return data
        },
    })




    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as='div' className='relative z-10' onClose={closeModal}>
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
                                    Camp  Info Before Joining
                                </DialogTitle>
                                <div className='mt-2'>
                                    <p className='text-sm text-gray-500'>
                                        camp: {bookingInfo.title}
                                    </p>
                                </div>
                                <div className='mt-2'>
                                    <p className='text-sm text-gray-500'>
                                        Location: {bookingInfo.location}
                                    </p>
                                </div>
                                <div className='mt-2'>
                                    <p className='text-sm text-gray-500'>
                                        Descriptions: {bookingInfo.description}
                                    </p>
                                </div>
                                <div className='mt-2'>
                                    <p className='text-sm text-gray-500'>
                                        Date:  {bookingInfo.date}
                                    </p>
                                </div>
                                <div className='mt-2'>
                                    <p className='text-sm text-gray-500'>
                                        perticipent name :  {user.displayName}
                                    </p>
                                </div>

                                <div className='mt-2'>
                                    <p className='text-sm text-gray-500'>
                                        Price: $ {bookingInfo.price}
                                    </p>
                                </div>
                                <hr className='mt-8 ' />

                                <Elements stripe={stripePromise}>
                                    {/* checkout form */}
                                   <CheckoutForm
                                   bookingInfo={bookingInfo}
                                    closeModal={closeModal}></CheckoutForm>
                                </Elements>



                          
                            </DialogPanel>
                        </TransitionChild>
                    </div>
                </div>
            </Dialog>
        </Transition>
    )
}

BookingModal.propTypes = {
    bookingInfo: PropTypes.object,
    closeModal: PropTypes.func,
    isOpen: PropTypes.bool,
}

export default BookingModal