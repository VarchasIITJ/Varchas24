
import { loginFields } from "../constants";
import FormAction from "./formaction";
import FormExtra from "./formextra";
import Input from "./input";
import axios from "axios";
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

const fields = loginFields;
let fieldsState = {};
fields.forEach((field) => (fieldsState[field.id] = ""));

export default function Logincard() {
  const [loginState, setLoginState] = useState(fieldsState);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setLoginState({ ...loginState, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    authenticateUser();
  };

  //Handle Login API Integration here
  const authenticateUser = () => {
    const configuration = {
      method: "post",
      // url : "https://api.varchas23.in/account/userlogin/",
      url: "http://127.0.0.1:8000/account/userlogin/",
      data: loginState,
    };

    axios(configuration)
      .then((result) => {
        // alert(result.data.message);
        sessionStorage.setItem("Token", result.data.access_token);
        sessionStorage.setItem("refresh_Token", result.data.refresh_token);
        navigate("/");
        location.reload();
      })
      .catch((error) => {
        console.log(error);
        if (error.response && error.response.data && error.response.data.message){
            alert(error.response.data.message);
        }
        if (error.response && error.response.data && error.response.data.detail){
          alert('Sorry For the inconvinience. Kindly try again');
          sessionStorage.clear();
          window.location.reload();
        }
      });
    // console.log(loginState);
  };

  return (
    <form className="mt-4 space-y-6 w-72 xl:w-96 bg-zinc-900" onSubmit={handleSubmit}>
      <div className="-space-y-px">
        {fields.map((field) => (
          <Input
            key={field.id}
            handleChange={handleChange}
            value={loginState[field.id]}
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

      <FormExtra />
      <FormAction handleSubmit={handleSubmit} text="Login" />
    </form>
  );
}
