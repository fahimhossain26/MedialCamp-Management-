import { Helmet } from "react-helmet-async";
import Banner from "../banner/Banner";
import MedicalCamps from "../../../Components/medicalCamps/MedicalCamps";



const Home = () => {
    return (
        <div>
            
            <Helmet>
                <title>MCMSS||Home</title>
            </Helmet>
            <Banner></Banner>
            <h2 className="text-5xl text-center mb-10 font-mono  text-blue-700">Popular Camps  </h2>
            <MedicalCamps></MedicalCamps>
        </div>
    );
};

export default Home;