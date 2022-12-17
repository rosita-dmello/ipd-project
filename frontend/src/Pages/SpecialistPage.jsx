import React from 'react';
import { NavBar } from '../Components/Navbar';
import specialist from '../Images/specialist.jpg';
import { AiFillStar } from 'react-icons/ai';
import { IoMdThumbsUp } from 'react-icons/io';

export const SpecialistPage = () => {
  return (
    <>
      {/* <NavBar /> */}
      <div className="ml-5 my-10 md:ml-20 text-2xl font-medium font-poppins">
        Recommended Specialists :
      </div>
      <div className="md:mt-2 ml-5 md:ml-20 mb-20 flex">
        <div className="bg-white border-qBor border rounded py-3 px-3 shadow">
          <img src={specialist} alt="specialist" className="w-full" />
          <div className="font-poppins text-2xl font-medium mt-3">
            Ms. Rashi Laskari
          </div>
          <div className="text-base mt-1 text-special">BA, MA - Psychology</div>
          <div className="flex mt-5 items-center">
            <button className="bg-specialBtn text-special rounded-3xl text-sm py-1 px-2 mr-2">
              Therapist
            </button>
            <div className="text-sm text-special">
              13 Years Experience Overall
            </div>
          </div>
          <div className="flex items-baseline text-special mt-5">
            <IoMdThumbsUp className="text-green-600 text-lg pt-[0.12rem] mr-1" />
            <div className="text-green-600 font-medium">98%</div>
            <div className="text-xs ml-2">(82 votes)</div>
          </div>
          <div className="text-xs mt-5 text-special">Andheri West, Mumbai</div>
          <div className="flex mt-4">
            <div className="text-xs tracking-tight font-medium font-poppins text-blue-400">
              Inner Light Conselling Center
            </div>
            <div className="text-xs font-poppins track-tight font-medium pl-12">
              Mon-Sat
            </div>
            <div className="text-xs font-poppins  text-center pl-10">1800</div>
          </div>
          <div className="flex mt-4">
            <div className="flex items-center text-xs tracking-tight font-medium font-poppins text-green-600">
              5.0 stars
              <AiFillStar className="ml-1" />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
            </div>
            <div className="text-xs font-poppins font-light  pl-24">
              11.00 AM - 02.00 PM
            </div>
          </div>
        </div>
        {/* <div className="bg-white border-qBor border rounded py-3 px-3 shadow ml-20">
          <img src={specialist} alt="specialist" className="w-full" />
          <div className="font-poppins text-2xl font-medium mt-3">
            Ms. Rashi Laskari
          </div>
          <div className="text-base mt-1 text-special">BA, MA - Psychology</div>
          <div className="flex mt-5 items-center">
            <button className="bg-specialBtn text-special rounded-3xl text-sm py-1 px-2 mr-2">
              Therapist
            </button>
            <div className="text-sm text-special">
              13 Years Experience Overall
            </div>
          </div>
          <div className="flex items-baseline text-special mt-5">
            <IoMdThumbsUp className="text-green-600 text-lg pt-[0.12rem] mr-1" />
            <div className="text-green-600 font-medium">98%</div>
            <div className="text-xs ml-2">(82 votes)</div>
          </div>
          <div className="text-xs mt-5 text-special">Andheri West, Mumbai</div>
          <div className="flex mt-4">
            <div className="text-xs tracking-tight font-medium font-poppins text-blue-400">
              Inner Light Conselling Center
            </div>
            <div className="text-xs font-poppins track-tight font-medium pl-12">
              Mon-Sat
            </div>
            <div className="text-xs font-poppins  text-center pl-10">1800</div>
          </div>
          <div className="flex mt-4">
            <div className="flex items-center text-xs tracking-tight font-medium font-poppins text-green-600">
              5.0 stars
              <AiFillStar className="ml-1" />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
            </div>
            <div className="text-xs font-poppins font-light  pl-24">
              11.00 AM - 02.00 PM
            </div>
          </div> 
         </div> */}
      </div>
    </>
  );
};
