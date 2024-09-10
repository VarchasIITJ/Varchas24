import { useEffect } from "react";
import { useState } from "react";
import { events } from "../constants"
import axios from "axios";
import { useNavigate } from "react-router-dom";

const VTeam = () => {

  const [teamDetails, setTeamDetails] = useState({});
  const navigate = useNavigate();

  const token = sessionStorage.getItem("Token");
  const getTeamDetails = () => {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`
    const configuration = {
      method: "get",
      url: "http://localhost:8000/account/displayTeam/",
    }
    axios(configuration)
      .then((result) => {
        setTeamDetails(result.data);
        console.log(result.data)
        console.log(teamDetails.team_data);
        const a = teamDetails.team_data
        console.log(Array.isArray(teamDetails.team_data));
        console.log(Array.isArray(a));
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
  }
  useEffect(() => {
    getTeamDetails();
  }, []);

  return (
    <div className="bg-black h-screen items-center flex w-full flex-col justify-center">
    <div className="flex flex-col font-mono items-center mx-auto w-[90%] md:w-[60%] lg:w-[60%] p-8 md:p-10 rounded-2xl backdrop-blur bg-zinc-900 text-white h-[80%] overflow-auto">
      <div className="text-[2rem] md:text-[3rem]">TEAM</div>
      <br />
      <div className="text-[1rem] md:text-[1.25rem] mb-10">Registered Teams</div>
      {teamDetails.team_data !== undefined && teamDetails.team_data.map((val, key) => (
        <div key={key} className="w-full">
          <div className="flex justify-between text-[1rem] md:text-[1.25rem] gap-5 md:gap-10">
            <div className="">Team ID</div>
            <div className="text-yellow-300">{val.team_id}</div>
          </div>-
          <div className="flex justify-between text-[1rem] md:text-[1.25rem] gap-5 md:gap-10">
            <div className="">Sport</div>
            {events.map((x, y) => {
              if (x.id === val.sport) {
                return <div key={y} className="text-yellow-300">{x.title}</div>
              }
            })}
          </div>
          <div className="flex justify-between text-[1rem] md:text-[1.25rem] gap-5 md:gap-10">
            <div className="">College</div>
            <div className="text-yellow-300">{val.college}</div>
          </div>
          <div className="flex justify-between text-[1rem] md:text-[1.25rem] gap-5 md:gap-10">
            <div className="">Captain</div>
            <div className="text-yellow-300">{val.captain_username}</div>
          </div>
          <div className="flex justify-between text-[1rem] md:text-[1.25rem] gap-5 md:gap-10">
            <div className="">Category</div>
            <div className="text-yellow-300">{val.category}</div>
          </div>
          <div className="flex justify-between text-[1rem] md:text-[1.25rem] gap-5 md:gap-10">
            <div className="">Event</div>
            <div className="text-yellow-300">{val.event}</div>
          </div>
          <div className="flex flex-row justify-between">
          <div className="text-[1.25rem] md:text-[1.5rem] mt-4">Player Details</div>
          <div className="flex justify-between text-[1rem] md:text-[1.25rem] gap-5 md:gap-10">
            <br />
            <div className="mx-auto justify-center text-start">
              {val.sport < 13 && val.players_info.map((val, key) => (
                <div key={key} className="flex flex-col justify-start mx-auto">
                  <div className="text-gray-400">player - {key + 1}</div>
                  <div className="text-yellow-300"><span className="text-gray-400 hover hover:text-white mr-5">name</span> {val.name}</div>
                  <div className="text-yellow-300"><span className="text-gray-400 hover hover:text-white mr-5">email</span> {val.email}</div>
                  <div className="text-yellow-300"><span className="text-gray-400 hover hover:text-white mr-5">phone</span>  {val.phone}</div>
                </div>
              ))}
              </div>
              {val.sport >= 13 && val.players_info.map((player, index) => (
                <div key={index} className="flex flex-col justify-start mx-auto">
                  {Object.entries(player).map(([key, value]) => (
                    <div key={key} className="text-yellow-300">
                      {key} -{">"} {value}
                    </div>
                  ))}
                </div>
                
                  // 
              ))}
            </div>
          </div>
          <br />
          <div className="h-[2px] w-[100%] bg-yellow-300 mb-10"></div>
        </div>
      ))}
    </div>
  </div>
  
  );
};

export default VTeam;
