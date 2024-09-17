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
    <nav id="NAV" className="w-screen fixed top-0 z-20 flex items-center justify-center py-0">

  <div className="hidden sm:flex w-full justify-between items-center px-6 text-xl text-white font-sans uppercase glass">

    <div className="lg:w-1/4 hover:text-[#ffeb3b]">
      <NavLink to="/">
        <img src="/NewLogo.png" className="h-16 w-16" alt="Logo" />
      </NavLink>
    </div>


    <ul className="flex w-full justify-end space-x-8 lg:w-3/4 list-none items-center">
      <motion.li whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.93 }} className="navbar hover:text-[#ffeb3b] center-underline-hover">
        <NavLink id="events" to="/events">Events</NavLink>
      </motion.li>
      <motion.li whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.93 }} className="navbar hover:text-[#ffeb3b] center-underline-hover">
        <NavLink to="/discount">Discount</NavLink>
      </motion.li>

      <li className="navbar relative text-lg" ref={dropdownRef}>
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.93 }}
          onClick={() => setTeamDropdown(!teamDropdown)}
          className="text-xl uppercase hover:text-[#ffeb3b] center-underline-hover"
        >
          Team
        </motion.button>
        {teamDropdown && (
          <ul className="absolute left-0 mt-2 w-48 bg-gray-800 rounded-xl shadow-lg ring-1 ring-black list-none">
            <li className="px-4 py-2 text-sm hover:bg-black rounded-t-xl">
              <NavLink to="/team" onClick={() => setTeamDropdown(false)}>Our Team</NavLink>
            </li>
            <li className="px-4 py-2 text-sm hover:bg-black">
              <NavLink to="/create" onClick={() => setTeamDropdown(false)}>Create Team</NavLink>
            </li>
            <li className="px-4 py-2 text-sm hover:bg-black rounded-b-xl">
              <NavLink to="/join" onClick={() => setTeamDropdown(false)}>Join Team</NavLink>
            </li>
          </ul>
        )}
      </li>

      <motion.li whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.93 }} className="navbar hover:text-[#ffeb3b] center-underline-hover">
        <NavLink to="/sponsors">Sponsors</NavLink>
      </motion.li>
      <motion.li whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.93 }} className="navbar hover:text-[#ffeb3b] center-underline-hover">
        <NavLink to="/payment">Payment</NavLink>
      </motion.li>

  
      <motion.li whileTap={{ scale: 0.93 }} className="navbar p-1 px-6 border-2 rounded-full border-white hover:text-[#ffeb3b]">
        {token ? <NavLink to="/profile">Profile</NavLink> : <NavLink to="/login">LogIn</NavLink>}
      </motion.li>
      <motion.li whileTap={{ scale: 0.93 }} className="navbar p-1 px-6 ml-3 border-2 bg-yellow-300 text-black border-yellow-300 rounded-full">
        {token ? <button onClick={handleLogout}>Log Out</button> : <NavLink to="/signup">SignUp</NavLink>}
      </motion.li>
    </ul>
  </div>

  <div className="sm:hidden flex justify-between w-full items-center backdrop-blur-sm bg-white/10">
    <NavLink to="/">
      <img src="/VLW.png" className="h-16 w-16" alt="Mobile Logo" />
    </NavLink>
    <img
      src={toggle ? close : menu}
      className="w-[28px] h-[28px] mr-3"
      onClick={() => setToggle(!toggle)}
      alt="Menu Toggle"
    />
    {toggle && (
      <div className="absolute top-20 right-0 mx-4 my-2 p-6 black-gradient min-w-[140px] rounded-xl z-14">
        <ul className="flex flex-col items-start gap-4 list-none text-white">
          <li onClick={() => setToggle(!toggle)}><NavLink to="/events">Events</NavLink></li>
          <li onClick={() => setToggle(!toggle)}><NavLink to="/discount">Discount</NavLink></li>
          <li onClick={() => setToggle(!toggle)}><NavLink to="/team">Our Team</NavLink></li>
          <li onClick={() => setToggle(!toggle)}><NavLink to="/sponsors">Sponsors</NavLink></li>
          <li onClick={() => setToggle(!toggle)}><NavLink to="/create">Create Team</NavLink></li>
          <li onClick={() => setToggle(!toggle)}><NavLink to="/join">Join Team</NavLink></li>
          <li onClick={() => setToggle(!toggle)}><NavLink to="/payment">Payment</NavLink></li>
          <li onClick={() => setToggle(!toggle)}>{token ? <NavLink to="/profile">Profile</NavLink> : <NavLink to="/login">LogIn</NavLink>}</li>
          <li onClick={() => setToggle(!toggle)}>{token ? <button onClick={handleLogout}>Log Out</button> : <NavLink to="/signup">SignUp</NavLink>}</li>
        </ul>
      </div>
    )}
  </div>
</nav>

  );
};
export default Navbar;