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

            <MedicalCamps></MedicalCamps>
        </div>
    );
};

export default Home;