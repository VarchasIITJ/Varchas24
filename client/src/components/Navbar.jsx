import { useState } from "react";
import { NavLink } from "react-router-dom";
import { logo, menu, close } from "../assets";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const navigate = useNavigate();
  const location = useLocation().pathname;
  const handleLogout = () => {
    sessionStorage.clear();
    window.location.reload();
    window.location.href='/login'
  };

  const token = sessionStorage.getItem("Token");
  const team_token = sessionStorage.getItem("team_token");
  return (
    <nav
      id="NAV"
      className="w-screen flex items-center sm:py-5 fixed sm:top-2 z-20 justify-center "
    >
      <ul
        className="px-4 list-none hidden sm:flex w-full justify-between items-center 
      text-[13px] md:text-[14px] lg:text-[16px] xl:text-[18px]  2xl:text-[22px] text-white 
      glass font-robm fixed uppercase
      "
      >
        <li className="p-1  mt-2 hover:text-[#09FBD3] ">
          <NavLink to="/">
            <img src="/VLW.png" className="xl:h-16 xl:w-16 h-12 w-12" />
          </NavLink>
        </li>
        <li className="p-1 mt-2 hover:text-[#09FBD3]  navbar">
          <NavLink to="/events">Events</NavLink>
        </li>
        <li className="p-1 mt-2 hover:text-[#09FBD3]  navbar">
          <NavLink to="/discount">Discount</NavLink>
        </li>
        <li className="p-1 mt-2 hover:text-[#09FBD3]  navbar">
          <NavLink to="/team">Our Team</NavLink>
        </li>
        <li className="p-1 mt-2 hover:text-[#09FBD3]  navbar">
          <NavLink to="/sponsors">Sponsors</NavLink>
        </li>

        {/* <NavLink to="/create">Create Team</NavLink> */}
        <li className="p-1 mt-2 hover:text-[#09FBD3]  navbar">
          <NavLink to="/create">Create Team</NavLink>
        </li>
        <li
          className={`p-1 mt-2 hover:text-[#09FBD3]  navbar`}
        >
          <NavLink to="/join">Join Team</NavLink>
        </li>
        <li className="p-1 mt-2 hover:text-[#09FBD3]  navbar">
          <NavLink to="/payment">Payment</NavLink>
        </li>
        <li
          className={` p-1 mt-2 hover:text-[#09FBD3]  navbar`}
        >
          {token ? (
            <NavLink to="/profile">Profile</NavLink>
          ) : (
            <NavLink to="/login">LogIn</NavLink>
          )}
        </li>
        <li className="p-1 mt-2 hover:text-[#09FBD3]  navbar">
          {token ? (
            <p onClick={handleLogout}>Log Out</p>
          ) : (
            <NavLink to="/signup">SignUp</NavLink>
          )}
        </li>
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
              className={` cursor-pointer text-[16px] text-white hover:text-[#09fbd3]  `}
              onClick={() => {
                setToggle(!toggle);
              }}
            >
              <NavLink to="/events">Events</NavLink>
            </li>
            <li
              className={` cursor-pointer text-[16px] text-white hover:text-[#09fbd3]  `}
              onClick={() => {
                setToggle(!toggle);
              }}
            >
              <NavLink to="/discount">Discount</NavLink>
            </li>
            <li
              className={` cursor-pointer text-[16px] text-white hover:text-[#09fbd3]  `}
              onClick={() => {
                setToggle(!toggle);
              }}
            >
              <NavLink to="/team">Our Team</NavLink>
            </li>
            <li
              className={` cursor-pointer text-[16px] text-white hover:text-[#09fbd3]  `}
              onClick={() => {
                setToggle(!toggle);
              }}
            >
              <NavLink to="/sponsors">Sponsors</NavLink>
            </li>
            <li
              className={` cursor-pointer text-[16px] text-white hover:text-[#09fbd3]  `}
              onClick={() => {
                setToggle(!toggle);
              }}
            >
              <NavLink to="/create">Create Team</NavLink>
            </li>
            <li
              className={` cursor-pointer text-[16px] text-white hover:text-[#09fbd3]  `}
              onClick={() => {
                setToggle(!toggle);
              }}
            >
              <NavLink to="/join">Join Team</NavLink>
            </li>
            <li
              className={` cursor-pointer text-[16px] text-white hover:text-[#09fbd3]  `}
              onClick={() => {
                setToggle(!toggle);
              }}
            >
              <NavLink to="/payment">Payment</NavLink>
            </li>
            <li
              className={` cursor-pointer text-[16px] text-white hover:text-[#09fbd3]  `}
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
              className={` cursor-pointer text-[16px] text-white hover:text-[#09fbd3]  `}
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
