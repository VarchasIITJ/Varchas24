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
      url: "https://api.varchas23.in/account/displayTeam/",
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
    <div className="bg-[#222222]  h-screen items-center flex w-screen flex-col justify-center
    ">
      <div className="flex flex-col font-mono items-center scroll-smooth mx-auto w-fit p-10 rounded-2xl  shadow-sm shadow-[#09fbd3] backdrop-blur bg-green-100/10 text-white max-h-[80%] overflow-auto">
        <div className=" text-[3rem]">Team Details</div>
        <div className="w-full"></div>
        <br />
        <div className="text-[1rem]">Registered Teams</div>
        {teamDetails.team_data !== undefined && teamDetails.team_data.map((val, key) => (
          <div key={key} className="w-full">
            <div className="flex justify-between text-[1rem] gap-10">
              <div className="">Team ID -{">"}</div>
              <div className="">{val.team_id}</div>
            </div>
            <div className="flex justify-between text-[1rem] gap-10">
              <div className="">Sport -{">"}</div>
              {events.map((x, y) => {
                console.log(x.title);
                if (x.id === val.sport) {
                  return <div key={y}>{x.title}</div>
                }
              })}
            </div>
            <div className="flex justify-between text-[1rem] gap-10">
              <div className="">College -{">"}</div>
              <div className="">{val.college}</div>
            </div>
            <div className="flex justify-between text-[1rem] gap-10">
              <div className="">Captain -{">"}</div>
              <div className="">{val.captain_username}</div>
            </div>
            <div className="flex justify-between text-[1rem] gap-10">
              <div className="">Category -{">"}</div>
              <div className="">{val.category}</div>
            </div>
            <div className="flex justify-between text-[1rem] gap-10">
              <div className="">Event -{">"}</div>
              <div className="">{val.event}</div>
            </div>
            <div>Player Details</div>
            <div className="flex justify-between text-[1rem] gap-10">
              <br />
              <div className="mx-auto justify-center text-start">
              {val.sport < 13 && val.players_info.map((val, key) => (
                  <div key={key} className="flex flex-col justify-start mx-auto">
                    <div className="">player - {key + 1}</div>
                    <div className="">name -{">"} {val.name}</div>
                    <div className="">email -{">"} {val.email}</div>
                    <div className="">phone -{">"} {val.phone}</div>
                  </div>
                ))}
                  {val.sport >= 13 && val.players_info.map((player, index) => (
                    <div key={index} className="flex flex-col justify-start mx-auto">
                      {Object.entries(player).map(([key, value]) => (
                        <div key={key}>
                          {key} -{">"} {value}
                        </div>
                      ))}
                    </div>
                  ))}
              </div>
            </div>
            <br />
          </div>
        ))}
      </div>
    </div>
  );
};

export default VTeam;
