import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import { motion } from "framer-motion";

export default function TeamCard({
  imgPath,
  instaLink,
  linkedinLink,
  Name,
  Designation
}) {
  const [isFlipped, setIsFlipped] = useState(false);

  const cardStyle = {
    transformStyle: "preserve-3d",
    backfaceVisibility: "hidden",
    WebkitBackfaceVisibility: "hidden",
    MozBackfaceVisibility: "hidden",
  };

  return (
    <div
      className="relative w-64 h-80"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <motion.div
        className="w-full h-full"
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
        style={cardStyle}
      >
        {/* Front of the card */}
        <div className="absolute w-full h-full" style={cardStyle}>
          <div className="text-center text-white border-2 rounded-2xl p-3 h-full bg-black">
            <img
              className="mx-auto mt-4 mb-4 w-32 h-32 rounded-full object-cover"
              src={imgPath}
              alt={Name}
            />
            <h3 className="mb-1 text-2xl font-bold tracking-tight text-white">
              {Name}
            </h3>
            <p className="text-white">{Designation}</p>
          </div>
        </div>

        {/* Back of the card */}
        <div
          className="absolute w-full h-full"
          style={{ ...cardStyle, transform: "rotateY(180deg)" }}
        >
          <motion.div 
          animate={{ scale: isFlipped ? 1.02 : 1 }}
          transition={{ duration: 0.3}}
          className="text-center text-white border-2 rounded-2xl p-3 h-full flex flex-col justify-center items-center bg-black">
            <motion.img
              className="mx-auto mb-4 w-32 h-32 rounded-full object-cover"
              src={imgPath}
              alt={Name}
            />
            <h3 className="mb-4 text-2xl font-bold tracking-tight text-white">
              Connect with {Name}
            </h3>
            <ul className="flex justify-center space-x-4">
              <li>
                <a
                  href={instaLink}
                  className="text-[#ea4c89] text-3xl hover:text-white transition-colors duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaIcons.FaInstagram />
                </a>
              </li>
              <li>
                <a
                  href={linkedinLink}
                  className="text-[#3a61b0] text-3xl hover:text-white transition-colors duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaIcons.FaLinkedin />
                </a>
              </li>
            </ul>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}