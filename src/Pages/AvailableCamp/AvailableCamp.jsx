import { Helmet } from "react-helmet-async";
import MedicalCamps from "../../Components/medicalCamps/MedicalCamps";


const AvailableCamp = () => {
    return (
        <div>
            <Helmet>
                <title>MCMSS||Camps</title>
            </Helmet>
            {/* <h2 className="text3xl">Available Campe here </h2> */}
            <h2 className="text-5xl text-center mb-10 font-mono  text-blue-700 mt-10">Available Campe   </h2>
            <MedicalCamps></MedicalCamps>
        </div>
    );
};

export default AvailableCamp;