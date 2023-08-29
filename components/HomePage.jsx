import React from "react";
import { Link } from "react-router-dom";


function HomePage(){
    return (
        <div className='flex flex-col items-center p-16 h-full bg-purp w-full'>
            <h1 className='text-3xl text-neutral-200'>ROCK / PAPER / SCISSORS</h1>
            <img src="/images/gamer.png" alt="" className='mt-8'/>
            <Link to="/test"><button className="capitalize bg-white p-4 w-64 mt-16 rounded-md font-bold text-black">start</button></Link>
            <br />
            <br />
            <br />
            <br />
            <br />
        </div>
    )
}
export default HomePage