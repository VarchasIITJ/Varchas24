import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";

// eslint-disable-next-line react/prop-types
const TeamCard = ({ index, para }) => {
  return (
    <div>
      <div className=" w-full">
        <div
          className="w-3/4 mx-auto p-[1px] rounded-[20px]  "
        >
          <div

            className=" rounded-[20px] p-4 min-h-[280px] flex justify-evenly items-center flex-col card-grad"
          >
            <p className="text-[#9fffef] xl:text-2xl font-robm">{para}</p>

          </div>
        </div>
      </div>
    </div>
  );
};

const Soch = () => {
  return (
    <main className="relative h-fit pb-10 w-screen  mx-auto max-w-7xl z-0 flex flex-col items-center font-nova_square">
      <div className="text-[3em] text-white">SOCH</div>
      <div className="flex flex-wrap gap-10  uppercase ">
        <TeamCard
          index={1}
          para={"SOCH is the social initiative of Varchas which develops a platform to spread awarness and motivate the citizen to take a collective stand against contempary social issues prevailing in our society and come up with practical solutions to resolve such issues . \n In order to understand the mindset of our younger generation on these burning issues the volunteers visited numerous school in Jodhpur and conducted competitions like esaay writing, drawing and face paintings in previous editions of Varchas"}
        />
      </div>
    </main>
  )
}

export default Soch