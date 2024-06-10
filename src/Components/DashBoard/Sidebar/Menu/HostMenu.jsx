import { BsFillHouseAddFill } from 'react-icons/bs'
import {MdOutlineManageHistory } from 'react-icons/md'
import MenuItem from './MenuItem'
import { FaListCheck } from 'react-icons/fa6'
const HostMenu = () => {
  return (
    <>
      <MenuItem icon={BsFillHouseAddFill} label='Add Camp' address='add-camp' />
      <MenuItem icon={FaListCheck} label='My Listings' address='my-listing' />
      <MenuItem
        icon={MdOutlineManageHistory}
        label='Manage Bookings'
        address='manage-bookings'
      />
    </>
  )
}

export default HostMenu