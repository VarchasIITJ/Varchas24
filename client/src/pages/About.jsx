import React, { useState } from "react";

const TeamCard = ({ index, para }) => {
  return (
    <div
      className="w-3/4 mx-auto p-[1px] rounded-[20px] "
    >
      <div
        className=" rounded-[20px] p-4 min-h-[280px] flex justify-evenly items-center flex-col card-grad "
      >
        <p className="text-[#9fffef] xl:text-2xl font-robm">{para}</p>

      </div>
    </div>
  );
};

const About = () => {
  return (
    <main className="relative w-full h-full mx-auto mb-12  max-w-7xl z-0 flex flex-col items-center justify-center font-nova_square ">
      <div className="text-[3em] uppercase text-white">about us </div>
      <div className="mt-5 flex flex-wrap gap-10 uppercase">
        <TeamCard
          index={1}
          para={"Varchas stands as the annual sports festival of IIT Jodhpur and holds the distinction of being the largest sporting event in North-West India. Varchas is a celebration of the spirit of sportsmanship, offering a prominent platform to showcase the dedication and hard work invested by various teams to attain excellence in their respective sporting disciplines. Since its inception in 2011, the prestige and grandeur of Varchas has extended far and wide, gaining recognition among the most esteemed colleges and universities in India"}
        />
        <TeamCard
          index={1}
          para={"Indian Institute of Technology Jodhpur was established in 2008, to foster technology education and research in India. The Institute is committed to technological thought and action to benefit the economic development of India. IIT Jodhpur. functions from its sprawling résidential permamnent north- northwest of Jodhpur towards Nagaur. This campus is meticulously planned and envisioned to stand as a symbol of academics- simple, but deep"}
        />
      </div>
    </main>
  )
}

export default About;
