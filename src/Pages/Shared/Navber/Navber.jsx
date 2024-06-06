import { createContext, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";


const Navber = () => {
  const{user,logOut}=useContext(AuthContext)
  const handelLogout=()=>{
    logOut()
    .then(()=>{})
    .catch(error=>console.log(error))
    }
    return (
        <div className="navbar bg-base-100  px-4 mx-auto shadow-2xl  z-10  ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden ">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[50] p-2 shadow bg-base-100 rounded-box w-52 gap-3">
              <li className=" p-1 rounded-xl  bg-slate-300">
                <Link to={'/'}> <div>Home</div></Link>
              </li>
              
              <li>
                <Link to={'/availableCamp'}> <div>Available Camp</div></Link>
              </li>
           
              {
              

            
              }
  
  
              {
                 (
                  <li className=" p-2 rounded-xl  bg-slate-300">
                    <Link to={'/login'}> <div>Login</div></Link>
                  </li>)
              }
            </ul>
          </div>
  
          <div className='flex-1'>
            <div className='flex gap-1 items-center '>
              <img className='w-auto h-16' src='https://i.postimg.cc/tgg5TbKL/Blue-Minimalist-Health-Logossss-removebg-preview.png' alt='' />
              <span className='font-bold '><span className="text-orange-500 text-xl">Med-</span>CAMP</span>
            </div>
          </div>
  
        </div>
        <div className="navbar-center hidden lg:flex  ">
          <ul className="menu menu-horizontal px-1 gap-2 ">
            <li className=" p-1 rounded-xl btn bg-slate-300">
              <Link to={'/'}> <div>Home</div></Link>
            </li>
            <li className="btn   rounded-xl  bg-slate-300 ">
                <Link to={'/availableCamp'}> <div>Available Camp</div></Link>
              </li>
              {/* <li className="btn   rounded-xl  bg-slate-300 ">
                <Link to={'/login'}> <div>Login</div></Link>
              </li> */}
  
  
            
  
  
  
  
             {
              !user && (
                <li className=" p-2 rounded-xl  bg-slate-300">
                  <Link to={'/login'}> <div>Login</div></Link>
                </li>)
            } 
  
          </ul>
        </div>
        
        <div className="navbar-end gap-2">
    
  
  
        
          { user&& 
             (
              <div className='dropdown dropdown-end z-50'>
                <div
                  tabIndex={0}
                  role='button'
                  className='btn btn-ghost btn-circle avatar'
                >
                  <div className='w-10 rounded-full' title='name'>
                    <img
                      referrerPolicy='no-referrer'
                      alt='User Profile Photo'
                      src={user?.photoURL}
                    />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 '
                >
                
                   <li>
                    <div> name: {user.displayName}</div>
                  </li>
  
                  {/* <li>
                    <div>{user?.email}</div>
                  </li> */}
                  <li>
                    <div><Link to='/dashboard'> <button className="className='bg-gray-200 block text-center"> DashBoard</button></Link></div>
                  </li>
  
               <li className='mt-2'>
                <button onClick={handelLogout} className='bg-gray-200 block text-center'>Logout</button>
                </li>
                </ul>
              </div>
            )
          }
  
  
        </div>
      </div>
  
    );
};

export default Navber;