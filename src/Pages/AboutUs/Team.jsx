import 'animate.css';


const Team = () => {
    return ( 
        <div >

{/* <div class="animate__animated animate__bounce animate__faster">Example</div> */}

            <div className="text-center mb-10 mt-10">
                <h2 className="text-xl">Team Members</h2>
                <h3 className="text-6xl font-serif mb-5  animate__animated animate__flipInX">Our Professional Team</h3>
        
            </div>
        <div className="   grid md:grid-cols-3  gap-5 m-5 ">

           <div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src="https://i.postimg.cc/d3nwsLCh/sq1-1872283342.webp" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Mishel Marsh (Admin)</h2>
    <p> Admin planning, design, managing, and overseeing camp projects.</p>
    
  </div>
</div>
           



           <div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src="https://i.postimg.cc/QNv3LvXy/team-1-2.png" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">John Carry(Organizer) </h2>
    <p>Organizer planning, design, managing, and overseeing camp projects</p>
   
  </div>
</div>




<div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src="https://i.postimg.cc/NMccR17y/Professional-Organizing-Course-Details-768x512.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Joliye (Organizer)</h2>
    <p>Organizer  planning, design, managing, and overseeing camp projects</p>
 
  </div>
</div>

{/* <div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src="https://i.postimg.cc/bYD7RLQH/team-1-4.png" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Anderson</h2>
    <p>A construction engineer is a professional responsible for planning, design, managing, and overseeing construction projects.</p>

  </div>
</div> */}
        </div>

        </div>
    );
};

export default Team;



