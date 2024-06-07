// import { createContext } from "react";
import { Helmet } from "react-helmet-async";
import AddCampForm from "../../../Components/Form/AddCampForm";
import UseAuth from "../../../Components/hook/UseAuth";
import { useMutation } from "@tanstack/react-query";
import useAxiosSecure , { axiosSecure } from "../../../Components/hook/useAxiosSecure";
// import { AuthContext } from "../../../Provider/AuthProvider";


const AddCamp = () => { 
    const {user}=UseAuth()
    const axiosSecure= useAxiosSecure()



    const {mutateAsync}=useMutation({
 
      mutationFn: async campData=>{
        const {data}=await axiosSecure.post('/camp',campData)
       return data
      },
      onSuccess: ()=>{
        console.log('data saev suess fully ');
      }
    })
    
    //from handeler 
    const handelSubmit=async e => {
        e.preventDefault()
        const form=e.target
        const location=form.location.value
        const title=form.title.value
        // const title=form.title.value
        // const to=''
        // const from=''
        const price=form.price.value
        const description=form.description.value
        const image=form.image.value
        const professionalName=form.professionalName.value
        const date=form.date.value
        const organizer={
         Name: user?.displayName,
         image:user?.photoURL,
         email:user?.email

        }
       
       try {
        const campData={location,title,price,description,image,organizer,date,professionalName}
        console.table(campData)

        //post request to a server 
        await mutateAsync(campData)
       }
       catch(err){
        console.log(err)
       }

  
    }
    return (
        <div>
              <Helmet>
                <title>Add Camp|| MCMS</title>
              </Helmet>

            <h1>ADD Camp Page </h1>
           <AddCampForm  handelSubmit={handelSubmit}> </AddCampForm>
        </div>
    );
};

export default AddCamp;