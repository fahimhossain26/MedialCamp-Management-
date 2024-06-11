import { Navigate } from "react-router-dom"
import useRole from "../Components/hook/useRole"

const HostRoute=({children})=>{
const [role,isLoading]=useRole()
if(isLoading) return  <span className="loading loading-infinity loading-lg mx-auto flex text-primary"></span>
if(role==='host') return children
    return <Navigate to='/dashboard'></Navigate>
}
export default HostRoute