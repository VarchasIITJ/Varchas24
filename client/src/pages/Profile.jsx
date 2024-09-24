import { useEffect } from "react";
import { useState } from "react";
import Comingsoon from "../components/comingsoon";
import axios from "axios";
import VTeam from "./viewTeam";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const backendUrl = import.meta.env.VITE_BACKEND_URL;

export default function Profiles() {
  const [details, setDetails] = useState({});
  const navigate = useNavigate();

  const token = sessionStorage.getItem("Token");

  const getuserProfile = async () => {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    const configuration = {
      method: "get",
      url: `${backendUrl}/account/displayProfile/`,
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
    <section className="bg-black h-screen flex flex-col items-center justify-center gap-4 w-full overflow-y-auto">
  <div className="flex flex-col font-mono items-center w-[90%] md:w-[80%] lg:w-[60%] px-5 md:px-10 pt-10 h-auto lg:h-[65%] backdrop-blur bg-zinc-900 text-white rounded-xl mb-10">
    <div className="w-full">
      <div className="flex flex-col justify-between mb-5">
        <div className="text-[1.5rem] md:text-[2rem] mb-2 md:mb-4">{details.first_name} {details.last_name}</div>
        <div className="h-[2px] w-full bg-yellow-300"></div>
      </div>  
      <div className="flex flex-col md:flex-row justify-between text-[0.875rem] md:text-[1.125rem] gap-4 md:gap-6 mb-4">
        <div className="text-gray-400 hover:text-white">Email</div>
        <div className="text-yellow-300">{details.email}</div>
      </div>
      <div className="flex flex-col md:flex-row justify-between text-[0.875rem] md:text-[1.125rem] gap-4 md:gap-6 mb-4">
        <div className="text-gray-400 hover:text-white">Phone</div>
        <div className="text-yellow-300">{details.phone}</div>
      </div>
      <div className="flex flex-col md:flex-row justify-between text-[0.875rem] md:text-[1.125rem] gap-4 md:gap-6 mb-4">
        <div className="text-gray-400 hover:text-white">College</div>
        <div className="text-yellow-300">{details.college}</div>
      </div>
      <div className="flex flex-col md:flex-row justify-between text-[0.875rem] md:text-[1.125rem] gap-4 md:gap-6 mb-4">
        <div className="text-gray-400 hover:text-white">Registered Teams</div>
        <div className="text-yellow-300 flex flex-col items-end">
          {details.team_id && details.team_id.map((e, index) => (
            <div key={index}>{e}</div>
          ))}
        </div>
      </div>
    </div>
  </div>
  <Link to="/view_team">
    <button className="py-2 px-4 text-black bg-yellow-400 rounded-full bg-opacity-100 hover:bg-yellow-500">
      View Team
    </button>
  </Link>
</section>

  );
}
