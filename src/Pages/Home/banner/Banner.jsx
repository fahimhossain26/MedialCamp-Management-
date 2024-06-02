
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
const Banner = () => {
    return (
        
            <Carousel>
                <div >
                    <img  src="https://i.postimg.cc/c43hvZFz/health-camp-service.png" />
                  
                </div>
                <div>
                    <img src="https://i.postimg.cc/vDFyY3DN/Free-Medical-Camp.jpg" />
                  
                </div>
                <div>
                    <img src="https://i.postimg.cc/vZ7YBFrL/Free-Medical-Camp-1024x576.jpg" />
                  
                </div>
            </Carousel>
    
    );
};

export default Banner;