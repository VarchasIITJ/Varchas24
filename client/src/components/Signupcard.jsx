import { signupFields } from "../constants";
import FormAction from "./formaction";
import Input from "./input";
import axios from "axios";
import { useState } from 'react';
import { useNavigate } from "react-router-dom";


const fields = signupFields;
let fieldsState = {};
fields.forEach((field) => (fieldsState[field.id] = ""));

export default function Signup({disabled,text}) {
  const [signupState, setSignupState] = useState(fieldsState);
  const navigate = useNavigate();
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  console.log(backendUrl);

  const handleChange = (e) =>
    setSignupState({ ...signupState, [e.target.id]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    createAccount();
  };

  

  //handle Signup API Integration here
  const createAccount = () => {
    console.log(signupState);
     const configuration = {
    method: "post",
    url: `${backendUrl}/account/userregister/`,
    headers: {
    "Content-Type": "application/json",
    },
    data: signupState,
  };
    console.log("URL",configuration.url);
    axios(configuration)
      .then(response => {
            console.log("Success:", response.data);
            // Display a success message if needed
            alert("Email Registered successfully!");
            navigate("/form", { state: { email: signupState.email } });
        })
        .catch(error => {
            if (error.response) {
         
                console.log("Error data:", error.response.data);
                alert(`Error: ${error.response.data.Error || 'An unexpected error occurred.'}`);
            } else if (error.request) {
            
                console.log("Error request:", error.request);
                alert("Error: No response from server.");
            } else {
            
                console.log("Error message:", error.message);
                alert(`Error: ${error.message}`);
            }
        });
  };

  return (
    <form className="mt-4 space-y-6 w-72 xl:w-96" onSubmit={handleSubmit}>
      <div className="-space-y-px ">
    {fields.map((field) => (
      <Input
        key={field.id}
        handleChange={handleChange}
        value={signupState[field.id]}
        labelText={field.labelText}
        labelFor={field.labelFor}
        id={field.id}
        name={field.name}
        type={field.type}
        isRequired={field.isRequired}
        placeholder={field.placeholder}
      />
    ))}
      </div>
   
         
      <FormAction handleSubmit={handleSubmit} text={text} disabled={disabled}/>

  </form>


  );
}
