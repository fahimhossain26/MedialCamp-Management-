import { Navigate } from "react-router-dom"
import useRole from "../Components/hook/useRole"

const AdminRoute=({children})=>{
const [role,isLoading]=useRole()
if(isLoading) return  <span className="loading loading-infinity loading-lg mx-auto flex text-primary"></span>
if(role==='admin') return children
    return <Navigate to='/dashboard'></Navigate>
}
export default AdminRoute
// AdminRoute.prototype={
//     children: PropTypes.element,
// }