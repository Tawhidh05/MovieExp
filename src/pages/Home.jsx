// import React from 'react';

import { Link } from "react-router";

const Home = () => {
    return (
        <>
         <div className='flex items-center justify-center h-screen text-white text-center bg-linear-to-r from-cyan-500 to-blue-500 '>
          <div className="">
            <h2 className="pb-6 text-2xl ">DISCOVER MOVIES</h2>
          <p className="pb-8 text-md">Explore and discover your favorite movies from around the world.</p>
          <Link to='/movies'><h4 className="flex justify-center border-2 mx-40 h-8 hover:bg-white hover:text-black transition delay-150 duration-300 ease-in-out cursor-pointer">Explore Now</h4></Link>
          </div>
        </div>
        </>
    );
};

export default Home;