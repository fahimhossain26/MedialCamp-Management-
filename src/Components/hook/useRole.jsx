
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure.jsx";
import UseAuth from "./UseAuth.jsx";

const useRole = () => {
    const {user,loading}=UseAuth()
    const axiosSecure = useAxiosSecure()
    


    const {data: role='',isLoading}=useQuery({
        queryKey:['role',user?.email],
        enabled: !loading && !!user?.email,
        queryFn: async ()=>{
            const {data}=await axiosSecure(`/user/${user?.email}`)
            return data.role
        },

    })

    
    // feth user info using login user email

    return [role,isLoading]
};

export default useRole;