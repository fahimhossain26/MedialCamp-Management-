import React from 'react';
import { Link } from 'react-router-dom';

const SingleCamp = ({camp}) => {
    const { _id, campFees,price,campName, description, image, location,professionalName } = camp
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
      <figure><img src={image} alt="Shoes" /></figure>
      <div className="card-body">
        <h2 className="card-title mx-auto text-3xl font-mono font-bold text-orange-500 mb-2">{campName} </h2>
        <p>{description }</p>
        {/* <p className='text-orange-600 font-bold'><span className='text-black'>service Price:</span> {campFees}$</p> */}
        <p className='text-orange-600 font-bold'><span className='text-black'>service Price:</span> {price}$</p>
        <p className='text-orange-600 font-bold'><span className='text-black'>camp location :</span> {location}</p>
      
      {/* <div className='flex items-center gap-2'>
      <div className='rounded-full object-cover overflow-hidden w-14 h-14'>
          <img src={buyer?.photo} alt='' />
        </div>
      <div> <p>{buyer?.name}</p></div>
      
       
      </div> */}

        <div className="">
          <Link to={`/camp/${_id}`}><button className="btn btn-block mt-1 bg-orange-300">View Details</button></Link>
        </div>
      </div>
    </div>
    );
};

export default SingleCamp;