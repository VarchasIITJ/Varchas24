import { useEffect } from "react";
import { useState } from "react";
import Comingsoon from "../components/comingsoon";
import axios from "axios";
import VTeam from "./viewTeam";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Profiles() {
  const [details, setDetails] = useState({});
  const navigate = useNavigate();

  const token = sessionStorage.getItem("Token");

  const getuserProfile = async () => {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    const configuration = {
      method: "get",
      url: "https://api.varchas23.in/account/displayProfile/",
    };
    await axios(configuration)
      .then((result) => {
        setDetails(result.data);
        console.log(details);
      })
      .catch((error) => {
        console.log(error);
        if (error.response && error.response.data && error.response.data.message){
            alert(error.response.data.message);
        }
        if (error.response && error.response.data && error.response.data.detail){
            alert('Session Expired. Kindly login again');
            sessionStorage.clear();
            window.location.reload();
            window.location.href='/login'
        }
      });
  };

  useEffect(() => {
    getuserProfile();
  }, []);

  return (
    <section className="bg-[#222222]  h-screen items-center flex w-screen flex-col justify-center gap-4">
      <div className="flex flex-col font-mono items-center justify-center  w-fit p-10 rounded-2xl max-h-[70%] shadow-sm shadow-[#09fbd3] backdrop-blur bg-green-100/10 text-white">
        <div className=" text-[3rem]">User Profile</div>
        <div className="w-full">
          {console.log(details)}
          <div className="flex justify-between text-[1.25rem] gap-10">
            <div className="">Name -{">"}</div>
            <div className="">{details.name}</div>
          </div>
          <div className="flex justify-between text-[1.25rem] gap-10">
            <div className="">Email -{">"}</div>
            <div className="">{details.email}</div>
          </div>
          <div className="flex justify-between text-[1.25rem] gap-10">
            <div className="">Phone -{">"}</div>
            <div className="">{details.phone}</div>
          </div>
          <div className="flex justify-between text-[1.25rem] gap-10">
            <div className="">College -{">"}</div>
            <div className="">{details.college}</div>
          </div>
        </div>
        <br />
        <div className="text-[1.25rem]">Registered Teams</div>

        {details.team_id && details.team_id.map((e, index) => (
          <div className="w-full text-center" key={index}>{e}</div>
        ))}
      </div>
      <Link to="/view_team" >
        <button className="p-4 border border-[#09fbd3] border-rounded text-white bg-[#09fbd3] rounded-lg bg-opacity-90 hover:shadow-md hover:shadow-[#09fbd3]">
          View Team
        </button>
      </Link>
    </section >
  );
}
