import React, { useState } from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { events } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import PDFModal from "../components/PDFModal";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const TeamCard = ({ index, title, icon, price, category, team, registerPath, detailsPath, rulebook }) => {


  const navigate = useNavigate();

  const register = () => {
    navigate(registerPath);
  }
  return (
    <div className="xs:w-[250px] w-full">
      <div
        className="w-full p-[1px] rounded-[20px] shadow-lg shadow-[#00CCFF] backdrop-blur-sm hover:scale-[1.03]"
      >
        <div
          
          className=" rounded-[20px] p-4 min-h-[280px] flex justify-evenly items-center flex-col opacity-90 gap-2 upp"
        >
          <img
            src={icon}
            alt="web-development"
            className=" object-contain max-w-32 max-h-32 shadow rounded-md"
          />

          <h3 className="text-white text-[20px] text-center uppercase  font-Eczar ">
            {title}
          </h3>
          <div className="flex justify-evenly w-full gap-2">

          <button className="text-white text-[15px] font-semibold text-center hover:shadow-sm hover:scale-110 p-2 rounded-lg bg-[#8e51c8] hover:bg-[#9e75c4]" onClick={register}>
            Register
          </button>
          <a className="text-white text-[15px] font-semibold text-center hover:shadow-sm hover:scale-110 p-2 rounded-lg bg-blue-600 hover:bg-blue-400" target="_blank" href={rulebook}>
            Rule Book
          </a>
          </div>
          {/* <button className="text-white text-[15px] font-semibold text-center hover:shadow-sm hover:scale-110 p-2 px-4 rounded-lg bg-blue-600 hover:bg-blue-400" onClick={()=>{navigate(detailsPath)}}>
            Details
          </button> */}

        </div>
      </div>
    </div>
  );
};

const Events = () => {
  return (
    <main className="relative w-full h-full mx-auto sm:px-16 px-6 sm:py-16 py-10 max-w-7xl z-0">
      <div className="mt-20 flex flex-wrap gap-10 justify-center">
        {events.map((service, index) => (
          <TeamCard key={service.title} index={index} {...service} />
        ))}
      </div>
      <div className="text-red-800 mt-8 flex justify-center text-2xl ">
        *All Registrations are Non-Refundable
      </div>
    </main>
  )
}

export default Events