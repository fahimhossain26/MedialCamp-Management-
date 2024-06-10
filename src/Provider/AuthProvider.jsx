import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { app } from "../Firebase/firebase.config";
import axios from "axios";

 export const AuthContext=createContext(null)

const auth=getAuth(app)

const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(true)
    const googleProvider= new GoogleAuthProvider();


    const createUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signIn= (email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password)
    }
    const googleSignIn=()=>{
        setLoading(true)
       return signInWithPopup(auth,googleProvider);
    }

    const logOut=()=>{
        setLoading(true)
        return signOut(auth);
     }
 
     const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photo,
        })
      }

      //save user
      const saveUser=async user=>{

        const currentUser={
          email:user?.email,
          role:'participant',
          status:'verified'
        }
        const {data}=await axios.put(`${import.meta.env.VITE_API_URL}/user`,currentUser)
        return data
      }

      
//      // Get token from server start --------------
//   const getToken = async email => {
//     const { data } = await axios.post(
//       `${import.meta.env.VITE_API_URL}/jwt`,
//       { email },
//       { withCredentials: true }
//     )
//     return data
//   }
// //jwt close ----------------

    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser);
            console.log('current user',currentUser);
            if(currentUser){
              // getToken(currentUser.email)
              saveUser(currentUser)
            }
            setLoading(false);
        });
        return ()=>{
            return unsubscribe()
        }
        
    },[])
    const authInfo={
      user,
      loading,
      createUser,
      signIn,
      googleSignIn,
      logOut,
      updateUserProfile


    }
    return (
        <AuthContext.Provider value={authInfo}>
          { children}
        </AuthContext.Provider>
        
    );
};

export default AuthProvider;