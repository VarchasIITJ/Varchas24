import { useEffect, useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import { menu, close } from "../assets";
import { useNavigate, useLocation } from "react-router-dom";
import {motion} from "framer-motion"
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
      <div
        className="px-4 list-none hidden lg:flex-row md:flex-col sm:flex w-full justify-between items-center 
        text-lg text-white 
      glass font-sans fixed uppercase
      "
      >
        <div className="lg:w-1/4 mt-10 lg:mt-0 hover:text-[#ffeb3b]">
          <NavLink to="/">
            <img src="/NewLogo.png" className="xl:h-16 xl:w-16 h-16 w-16" />
          </NavLink>
        </div>
        <div className="flex w-screen lg:w-3/4 justify-center lg:justify-end md:text-xl">
        <motion.li
        whileHover={{scale: 1.03}}
        whileTap={{scale: 0.93}}
        className="p-1 mt-0 hover:text-[#ffeb3b] navbar center-underline-hover"
        >
          <NavLink id="events" to="/events">Events</NavLink>
        </motion.li>

        <motion.li 
        whileHover={{scale: 1.03}}
        whileTap={{scale: 0.93}}
        className="p-1 mt-0 hover:text-[#ffeb3b]  navbar center-underline-hover">
          <NavLink to="/discount">Discount</NavLink>
        </motion.li>

        <li className="p-1 mt-0 hover:text-[#ffeb3b] navbar relative text-lg " ref={dropdownRef}>
          <motion.button 
            whileHover={{scale: 1.03}}
            whileTap={{scale: 0.93}}
            onClick={() => setTeamDropdown(!teamDropdown)}
            className="px-1 sm:flex
            text-xl text-white 
            font-sans uppercase
            hover:text-[#ffeb3b]
            center-underline-hover
            "
            >
            Team
          </motion.button>

          {teamDropdown && (
            <ul className="bg-gray-800 rounded-xl text-white absolute left-0 mt-2 w-48 shadow-lg ring-1 ring-black ring-opacity-5">
            
              <li className="px-4 py-2 text-sm hover:bg-black hover:text-white hover:rounded-t-xl">
                <NavLink to="/team" onClick={() => setTeamDropdown(false)}>Our Team</NavLink>
              </li>
              
              <li className="px-4 py-2 text-sm hover:bg-black hover:text-white">
                <NavLink to="/create" onClick={() => setTeamDropdown(false)}>Create Team</NavLink>
              </li>

              <li className="px-4 py-2 text-sm hover:bg-black hover:text-white hover:rounded-b-xl">
                <NavLink to="/join" onClick={() => setTeamDropdown(false)}>Join Team</NavLink>
              </li>

            </ul>
          )}
        </li>

        <motion.li 
        whileHover={{scale: 1.03}}
        whileTap={{scale: 0.93}}
        className="p-1 mt-0 hover:text-[#ffeb3b]  navbar center-underline-hover">
          <NavLink to="/sponsors">Sponsors</NavLink>
        </motion.li>

        <motion.li
        whileHover={{scale: 1.03}}
        whileTap={{scale: 0.93}}
        className="p-1 mt-0 hover:text-[#ffeb3b]  navbar center-underline-hover">
          <NavLink to="/payment">Payment</NavLink>
        </motion.li>

        <motion.li
        whileTap={{scale: 0.93}}
        className={`p-1 px-6 mt-0 mb-2  hover:text-[#ffeb3b]  navbar border-white border-2 rounded-l-full rounded-r-full`}
        >
          {token ? (
            <NavLink to="/profile">Profile</NavLink>
          ) : (
            <NavLink to="/login">LogIn</NavLink>
          )}
        </motion.li>

        <motion.li
        whileTap={{scale: 0.93}}
        className="p-1 px-6 mb-2 ml-3 mr-[-10px] hover:text-black  border-yellow-300 border-2 rounded-l-full rounded-r-full bg-yellow-300 text-black">
          {token ? (
            <button onClick={handleLogout}>Log Out</button>
          ) : (
            <NavLink to="/signup">SignUp</NavLink>
          )}
        </motion.li>
        </div>
      </div>

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
          } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-14 rounded-xl`}
          >
          <ul className="font-robm list-none flex flex-col justify-end items-start flex-1 gap-4">
            <li
              className={`cursor-pointer text-[16px] text-white hover:text-[#ffeb3b]  `}
              onClick={() => {
                setToggle(!toggle);
              }}
              >
              <NavLink to="/events">Events</NavLink>
            </li>
            <li
              className={`cursor-pointer text-[16px] text-white hover:text-[#ffeb3b]  `}
              onClick={() => {
                setToggle(!toggle);
              }}
              >
              <NavLink to="/discount">Discount</NavLink>
            </li>
            <li
              className={`cursor-pointer text-[16px] text-white hover:text-[#ffeb3b]  `}
              onClick={() => {
                setToggle(!toggle);
              }}
              >
              <NavLink to="/team">Our Team</NavLink>
            </li>
            <li
              className={`cursor-pointer text-[16px] text-white hover:text-[#ffeb3b]  `}
              onClick={() => {
                setToggle(!toggle);
              }}
              >
              <NavLink to="/sponsors">Sponsors</NavLink>
            </li>
            <li
              className={`cursor-pointer text-[16px] text-white hover:text-[#ffeb3b]  `}
              onClick={() => {
                setToggle(!toggle);
              }}
            >
              <NavLink to="/create">Create Team</NavLink>
            </li>
            <li
              className={`cursor-pointer text-[16px] text-white hover:text-[#ffeb3b]  `}
              onClick={() => {
                setToggle(!toggle);
              }}
              >
              <NavLink to="/join">Join Team</NavLink>
            </li>
            <li
              className={`cursor-pointer text-[16px] text-white hover:text-[#ffeb3b]  `}
              onClick={() => {
                setToggle(!toggle);
              }}
              >
              <NavLink to="/payment">Payment</NavLink>
            </li>
            <li
              className={`cursor-pointer text-[16px] text-white hover:text-[#ffeb3b]  `}
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
              className={`cursor-pointer text-[16px] text-white hover:text-[#ffeb3b]  `}
              onClick={() => {
                setToggle(!toggle);
              }}
              >
              {token ? (
                <button onClick={handleLogout}>Log Out</button>
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