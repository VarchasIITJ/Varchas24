import { useEffect, useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import { menu, close } from "../assets";
import { useNavigate, useLocation } from "react-router-dom";
import {animate, motion} from "framer-motion"

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [teamDropdown, setTeamDropdown] = useState(false)
  const dropdownRef = useRef(null);

  const navigate = useNavigate();
  const location = useLocation().pathname;
  const handleLogout = () => {
    sessionStorage.clear();
    window.location.reload();
    window.location.href='/login'
  };

  const token = sessionStorage.getItem("Token");
  const team_token = sessionStorage.getItem("team_token");

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setTeamDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav
      id="NAV"
      className="w-screen flex items-center sm:py-5 fixed sm:top-2 z-20 justify-center "
    >
      <ul
        className="px-4 list-none hidden sm:flex w-full justify-between items-center 
        text-lg text-white 
      glass font-sans fixed uppercase
      "
      >
        <li className="p-1  mt-2 hover:text-[#ffeb3b] ">
          <NavLink to="/">
            <img src="/VLW.png" className="xl:h-16 xl:w-16 h-12 w-12" />
          </NavLink>
        </li>
        <motion.li
        whileHover={{scale: 1.07}}
        whileTap={{scale: 0.93}}
        className="ml-96 p-1 mt-2 hover:text-[#ffeb3b]  navbar center-underline-hover"
        >
          <NavLink to="/events">Events</NavLink>
        </motion.li>
        <motion.li 
        whileHover={{scale: 1.07}}
        whileTap={{scale: 0.93}}
        className="p-1 mt-2 hover:text-[#ffeb3b]  navbar center-underline-hover">
          <NavLink to="/discount">Discount</NavLink>
        </motion.li>

        <li className="p-1 mt-2 hover:text-[#ffeb3b] navbar relative text-lg " ref={dropdownRef}>
          <motion.button 
            whileHover={{scale: 1.07}}
            whileTap={{scale: 0.93}}
            onClick={() => setTeamDropdown(!teamDropdown)}
            className="px-1 sm:flex
            text-lg text-white 
            font-sans uppercase
            hover:text-[#ffeb3b]
            center-underline-hover
            "
          >
            Team
          </motion.button>
          {teamDropdown && (
            <ul className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
              <li className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                <NavLink to="/team" onClick={() => setTeamDropdown(false)}>Our Team</NavLink>
              </li>
              <li className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                <NavLink to="/create" onClick={() => setTeamDropdown(false)}>Create Team</NavLink>
              </li>
              <li className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                <NavLink to="/join" onClick={() => setTeamDropdown(false)}>Join Team</NavLink>
              </li>
            </ul>
          )}
        </li>
        
        <motion.li 
        whileHover={{scale: 1.07}}
        whileTap={{scale: 0.93}}
        className="p-1 mt-2 hover:text-[#ffeb3b]  navbar center-underline-hover">
          <NavLink to="/sponsors">Sponsors</NavLink>
        </motion.li>

        
        
        <motion.li 
        whileHover={{scale: 1.07}}
        whileTap={{scale: 0.93}}
        className="p-1 mt-2 hover:text-[#ffeb3b]  navbar center-underline-hover">
          <NavLink to="/payment">Payment</NavLink>
        </motion.li>

        <motion.li
        whileTap={{scale: 0.93}}
        className={` p-1 px-6 mt-2  hover:text-[#ffeb3b]  navbar border-white border-2 rounded-l-full rounded-r-full`}
        >
          {token ? (
            <NavLink to="/profile">Profile</NavLink>
          ) : (
            <NavLink to="/login">LogIn</NavLink>
          )}
        </motion.li>
        <motion.li
        whileTap={{scale: 0.93}}
        className="p-1 px-6 mt-2 mr-4 hover:text-black  navbar border-yellow-300 border-2 rounded-l-full rounded-r-full bg-yellow-300 text-black">
          {token ? (
            <p onClick={handleLogout}>Log Out</p>
          ) : (
            <NavLink to="/signup">SignUp</NavLink>
          )}
        </motion.li>
      </ul>
      <div className="sm:hidden flex flex-1 justify-between gap-8 w-full items-center backdrop-blur-sm bg-white/10 ... ">
        <div className="">
          <NavLink to="/">
            <img src="/VLW.png" className="h-16 w-16" />
          </NavLink>
        </div>
        <img
          src={toggle ? close : menu}
          className="w-[28px] h-[28px] object-contain mr-3"
          onClick={() => setToggle(!toggle)}
        />
        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
        >
          <ul className="font-robm list-none flex flex-col justify-end items-start flex-1 gap-4">
            <li
              className={` cursor-pointer text-[16px] text-white hover:text-[#ffeb3b]  `}
              onClick={() => {
                setToggle(!toggle);
              }}
            >
              <NavLink to="/events">Events</NavLink>
            </li>
            <li
              className={` cursor-pointer text-[16px] text-white hover:text-[#ffeb3b]  `}
              onClick={() => {
                setToggle(!toggle);
              }}
            >
              <NavLink to="/discount">Discount</NavLink>
            </li>
            <li
              className={` cursor-pointer text-[16px] text-white hover:text-[#ffeb3b]  `}
              onClick={() => {
                setToggle(!toggle);
              }}
            >
              <NavLink to="/team">Our Team</NavLink>
            </li>
            <li
              className={` cursor-pointer text-[16px] text-white hover:text-[#ffeb3b]  `}
              onClick={() => {
                setToggle(!toggle);
              }}
            >
              <NavLink to="/sponsors">Sponsors</NavLink>
            </li>
            <li
              className={` cursor-pointer text-[16px] text-white hover:text-[#ffeb3b]  `}
              onClick={() => {
                setToggle(!toggle);
              }}
            >
              <NavLink to="/create">Create Team</NavLink>
            </li>
            <li
              className={` cursor-pointer text-[16px] text-white hover:text-[#ffeb3b]  `}
              onClick={() => {
                setToggle(!toggle);
              }}
            >
              <NavLink to="/join">Join Team</NavLink>
            </li>
            <li
              className={` cursor-pointer text-[16px] text-white hover:text-[#ffeb3b]  `}
              onClick={() => {
                setToggle(!toggle);
              }}
            >
              <NavLink to="/payment">Payment</NavLink>
            </li>
            <li
              className={` cursor-pointer text-[16px] text-white hover:text-[#ffeb3b]  `}
              onClick={() => {
                setToggle(!toggle);
              }}
            >
              {token ? (
                <NavLink to="/profile">Profile</NavLink>
              ) : (
                <NavLink to="/login">LogIn</NavLink>
              )}
            </li>
            <li
              className={` cursor-pointer text-[16px] text-white hover:text-[#ffeb3b]  `}
              onClick={() => {
                setToggle(!toggle);
              }}
            >
              {token ? (
                <p onClick={handleLogout}>Log Out</p>
              ) : (
                <NavLink to="/signup">SignUp</NavLink>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
