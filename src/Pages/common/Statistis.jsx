import React from 'react';
import useRole from '../../Components/hook/useRole';
import HostStatistics from '../dasboard/Organizer/HostStatistics';
import GuestStatistics from '../dasboard/Guest/GuestStatistics';

const Statistis = () => {
    const [role,isLoading]=useRole()
    return <>
    {role==='organizer' && <HostStatistics></HostStatistics>}
    {role==='participant' && <GuestStatistics></GuestStatistics>}
    </>
};

export default Statistis;