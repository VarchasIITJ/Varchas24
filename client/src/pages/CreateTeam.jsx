import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/header";
import FormAction from "../components/formaction";
import { eventOptions, categoryOptions, teamTypeOptions } from "../constants";
import Select from "react-select";
import Input from "../components/input";
import axios from "axios";
import Loader1  from '../components/Loader1';
const backendUrl = import.meta.env.VITE_BACKEND_URL;


const customStyles = {
  control: (provided) => ({
    ...provided,
    backgroundColor: 'black',
    color: 'white',
    border: '1px solid white',
  }),
  menu: (provided) => ({
    ...provided,
    backgroundColor: 'black',
    color: 'white',
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected ? 'gray' : 'black',
    color: 'white',
    '&:hover': {
      backgroundColor: 'gray',
    },
  }),
  multiValue: (provided) => ({
    ...provided,
    backgroundColor: 'gray',
    color: 'white',
  }),
  multiValueLabel: (provided) => ({
    ...provided,
    color: 'white',
  }),
  multiValueRemove: (provided) => ({
    ...provided,
    color: 'white',
    '&:hover': {
      backgroundColor: 'red',
      color: 'white',
    },
  }),
};

const fixedInputClass =
  "rounded-md appearance-none block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-yellow-400 focus:border-yellow-400 focus:z-10 sm:text-sm";

let categoryList = [];
let teamList = [];
let idList = [];
let fieldsState = {}


const TeamCreate = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const token = sessionStorage.getItem("Token");
    if (!token) {
      const jsonData = { error: "Kindly Login First" };
      alert(jsonData.error);
      navigate("/login");
    }
  });

  const [selectedEvent, setSelectedEvent] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedTeamType, setSelectedTeamType] = useState([]);
  const [iD, setID] = useState({});

  const eventChangeHandler = (event) => {
    const selectedEventValue = event.target.value;
    setSelectedEvent(selectedEventValue);
    setSelectedTeamType([]);

    // Find the selected event to get its category and team types
    const selectedEventObj = eventOptions.find(
      (event) => event.value === selectedEventValue
    );
    if (selectedEventObj) {
      let categoryValues = selectedEventObj.category;
      categoryList = [];
      setSelectedCategory(categoryValues);
      if (Array.isArray(categoryValues)) {
        categoryList = categoryValues;
      } else {
        categoryList = [categoryValues];
      }

      let teamValues = selectedEventObj.teamTypes;
      teamList = [];
      setSelectedCategory(teamValues);
      for (let i = 0; i < teamValues.length; i++) {
        teamList[i] = { value: teamValues[i], label: teamValues[i] };
      }

      const team_id = selectedEventObj.team_id;
      idList = team_id;
      idList && idList.forEach((field) => (fieldsState[field.id] = ""))
      setID(fieldsState);
      // console.log(idList);
    }
  };

  const handleChange = (e) =>
    setID({ ...iD, [e.target.id]: e.target.value });

  const categoryChangeHandler = (event) => {
    setSelectedCategory(event.target.value);
    setSelectedTeamType([]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createTeam();
  };

  const [loader,setLoader] = useState("hidden");
  const [main_d,setMainD] = useState("100");
  const createTeam = () => {
    const list = [
      "4",
      "4",
      "20",
      "20",
      "20",
      "4",
      "4",
      "20",
      "20",
      "20",
      "1",
      "1",
      "4",
      "5",
      "1",
    ];
    setLoader("flex");
    setMainD("10");
    const data_t = {
      category: selectedCategory,
      sport: selectedEvent,
      teams: selectedTeamType,
      teamsize: list[selectedEvent - 1],
      team_id : iD
    };
    console.log(data_t);
    const token = sessionStorage.getItem("Token");
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    console.log(token)
    const configuration = {
      method: "post",
      url: `${backendUrl}/registration/createteam/`,
      data: data_t,
    };
    axios(configuration)
      .then((result) => {
        alert(result.data.message);
        // console.log(result);
        // sessionStorage.setItem("team_token", result.data.team_token)
        navigate("/payment")
      })
      .catch((error) => {
        console.log(error);
        if (error.response && error.response.data && error.response.data.message){
            alert(error.response.data.message);
            setLoader("hidden");
            setMainD("100");
        }
        if (error.response && error.response.data && error.response.data.detail){
          alert('Session Expired. Kindly login again');
          sessionStorage.clear();
          window.location.reload();
          window.location.href='/login'
        }
      });
  };

  return (
    <section className="w-screen h-screen flex items-center justify-center">
      <div className={`${loader} fixed inset-0 w-screen h-screen`}>
        <Loader1/>
      </div>
  <div className={`flex flex-col items-center p-4 bg-zinc-900 rounded-2xl overflow-auto h-[80%] w-[90%] sm:w-[80%] md:w-[60%] lg:w-[50%] xl:w-[40%]`}>
    <Header heading="Event Registration" logoUrl={"/NewLogo.png"} />
    <form className={`mt-4 space-y-10 w-full sm:w-72 xl:w-96 h-[90%]`} onSubmit={handleSubmit}>
      <div className="h-2/3 flex flex-col justify-evenly">
        <div>
          <label className="text-yellow-400">Select an Event:</label>
          <select
            value={selectedEvent}
            onChange={eventChangeHandler}
            className={`${fixedInputClass} bg-black text-white mt-2`}
            required
          >
            <option value="">Select an Event</option>
            {eventOptions.map((event) => (
              <option key={event.value} value={event.value}>
                {event.label}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="text-yellow-400">Select a Category:</label>
          <select
            value={selectedCategory}
            onChange={categoryChangeHandler}
            className={`${fixedInputClass} bg-black text-white mt-2`}
            required
          >
            <option value="">Select a Category</option>
            {categoryList.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="text-yellow-400">Select a Team Type:</label>
          <Select
            closeMenuOnSelect={false}
            className="mt-2"
            defaultValue={{ value: 'Select a Team Type', label: 'Select a Team Type' }}
            styles={customStyles}
            isMulti
            required
            options={teamList}
            value={selectedTeamType.map((x) => ({
              value: x,
              label: x,
            }))}
            onChange={(selectedOptions) => {
              setSelectedTeamType(
                selectedOptions.map((option) => option.value)
              );
            }}
          />
        </div>
      </div>
      {idList &&
        idList.map((field, index) => (
          <Input
            key={index}
            handleChange={handleChange}
            value={iD[field.id]}
            labelText={field.labelText}
            labelFor={field.labelFor}
            id={field.id}
            name={field.name}
            type={field.type}
            isRequired={field.isRequired}
            placeholder={field.placeholder}
          />
        ))}
      <br />
      <FormAction handleSubmit={handleSubmit} text="Create Team" />
    </form>
  </div>
</section>

  );
};

export default TeamCreate;
