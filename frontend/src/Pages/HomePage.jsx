import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../Components/Button';
import { NavBar } from '../Components/Navbar';
import { OptionBtn } from '../Components/OptionBtn';
import head from '../Images/head.jpg';

export const Home = () => {
  return (
    <>
      <NavBar />
      <div className="grid sm:grid-cols-2 pt-20 md:pt-24">
        <div className="px-5 md:pl-28 ">
          <div className="font-semibold font-poppins text-lg md:text-2xl lg:text-5xl md:leading-loose">
            Lorem ipsum dolor sit amet, consectetur adip
          </div>
          <div className="text-base mt-4 md:mt-8 md:pr-24 md:leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          </div>
          <Link to="getting-started">
            <button className="my-10 px-3 py-2 border font-poppins border-neutral-500 md:text-xl rounded hover:bg-neutral-100 hover:shadow hover:border-neutral-600">
              Getting Started
            </button>
          </Link>
          {/* <div className="my-8">
            <Button content="Detect Now" />
          </div> */}
        </div>
        <div className="">
          <img
            src={head}
            alt="home-page-image"
            className="bg-blue-200 h-96 w-96 mx-auto"
          />
        </div>
      </div>
    </>
  );
};
