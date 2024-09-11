import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/header";
import FormAction from "../components/formaction";
import Input from "../components/input";
import axios from "axios";
import Comingsoon from "../components/comingsoon";

const TeamJoin = () => {
  const navigate = useNavigate();
  const [joinState, setJoinState] = useState("");
  const token = sessionStorage.getItem("Token");

  useEffect(() => {
    const token = sessionStorage.getItem("Token");

    if (!token) {
      const jsonData = { error: "Kindly Login First" };
      alert(jsonData.error);
      navigate("/login");
    }
  });

  const handleChange = (e) => {
    setJoinState(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    joinTeam();
  };

  const joinTeam = () => {
    const data_j = {teamId : joinState}
    const token = sessionStorage.getItem("Token")
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    const configuration = {
      method: "post",
      url: "https://api.varchas23.in/account/jointeam/",
      data: data_j,
    };
    axios(configuration)
      .then((result) => {
        alert(result.data.message);
        // sessionStorage.setItem("team_token", result.data.team_token);
        navigate("/");
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
    // console.log({teamId : joinState});
  };

  return (
    <section className="bg-black h-screen flex items-center justify-center">
  <div className="flex flex-col items-center p-4 bg-zinc-900 rounded-2xl overflow-auto max-h-[70%] w-[90%] sm:w-[80%] md:w-[60%] lg:w-[50%] xl:w-[40%] h-fit">
    <Header heading="Join Team" logoUrl={"/NewLogo.png"} />
    <form className="mt-4 space-y-6 w-full sm:w-72 xl:w-96" onSubmit={handleSubmit}>
      <div className="h-2/3 flex flex-col justify-evenly">
        <Input
          key="teamId"
          handleChange={handleChange}
          value={joinState["teamId"]}
          labelText="Team ID"
          labelFor="Team ID"
          id="teamId"
          name="Team ID"
          type="text"
          isRequired={true}
          placeholder="Enter Team ID"
          className="bg-black text-white mt-2"
        />
        <FormAction handleSubmit={handleSubmit} text="Join" />
      </div>
    </form>
  </div>
</section>
  );
};

export default TeamJoin;
