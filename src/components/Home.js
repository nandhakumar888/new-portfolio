import React from 'react';
import NandhaImage from "../assests/nandhaImage.jpg";
import {MdOutlineKeyboardArrowRight} from 'react-icons/md';
import {Link} from "react-scroll";


const Home = () => {
  return (
    <div name="home" className="w-full bg-gradient-to-b from-black to-gray-800 text-white h-screen ">
        <div className="max-w-screen-lg mx-auto  flex flex-col items-center justify-center h-full px-4 md:flex-row">
            <div className="flex flex-col justify-center h-full mt-[4rem]">
                <h2 className="text-4xl sm:text-5xl font-bold mt-16 text-white">
                    I'm a React Front End Developer
                </h2>
                <p className="text-white py-5 max-w-md">
                    I have 8 months of expereince building and desgining software.
                    Currently, I love to work on web application using teahnologies like React,Tailwind, Javascript.
                </p>
                <div>
                <Link to="portfolio" smooth duration={500} className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 cursor-pointer">
                    Portfolio
                    <span className="group-hover:rotate-90 duration-300">

            <MdOutlineKeyboardArrowRight size={25}
              className="ml-1"
            />

                    </span>
                    </Link>
            </div>
        </div>
        <div>
            <img src={NandhaImage} alt="my picture" className="rounded-2xl mx-auto w-2/4 md:w-full  " />
        </div>
        </div>
    </div>
  );
};

export default Home
