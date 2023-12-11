import { useState } from "react";
import { signupFields } from "../constants";
import Input from "./input";
import axios from "axios";
import { json, useNavigate } from "react-router-dom";

const fields = signupFields;
let fieldsState = {};

fields.forEach((field) => (fieldsState[field.id] = ""));

export default function Signupcard() {
  const [disabled, setDisabled] = useState(false);
  const [signupState, setSignupState] = useState(fieldsState);
  const navigate = useNavigate();

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
      url: "https://api.varchas23.in/account/userregister/",
      data: signupState,
    };
    axios(configuration)
      .then((result) => {
        const jsondata = { success: "Signed Up Successfully" };
        alert(jsondata.success);
        navigate("/");
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
            pattern={field.pattern}
            options={field.options}
          />
        ))}

        <div className="text-[#a2c288] ">
          <div>
            <br />
            <h5>Undertaking :</h5>
            <ul className="list-disc pl-2 ">
              <li>
                Indian Institute of Technology, Jodhpur and its students are not
                responsible for any mishappening that may or may not occur
                during my visit to Varchas 2023.
              </li>
              <li>
              I will not inflict any damage on any object present in the accommodation facilities and on campus and if found then there will be a fine/ team disqualification charged to me.
              </li>
              <li>
              I will not administer or consume any type of alcoholic and/or narcotics substances. If found, I will be liable to pay a fine of INR 5000.
              </li>
              <li>
              I will behave in a respectful and responsible manner towards everyone during my visit to Varchas, 2023.
              </li>
              <li>
              I will not invite anyone to my particular accommodation allotted to me who is not documented for their stay in the same accommodation.
              </li>
              <li>
              I will not visit any prohibited areas as instructed. If found included, I will be liable to pay a fine of INR 2500.
              </li>
              <li>
              I understand that visiting the hostels instead of the one allotted to me is strictly prohibited and if found, I will be liable to pay a fine of INR 2500. 
              </li>
              <li>
              I will have to keep the ID card given by the PR team at all times with me during my visit to Varchas, 2023 and if I lose it by some means then I will be liable to pay a fine of INR 500 for issuing a new ID card. 
              </li>
              <li>
              I will bring original college identity proof along with a valid Aadhar card, which is mandatory for all the participants. Along with this, our captain has to get a signed statement from the college having our details.
              </li>
              <li>
              I may also be required to leave the IIT campus if I do not adhere to the guidelines mentioned above
              </li>
            </ul>
            <br />
            If I am found breaking or not complying with any of the above-mentioned guidelines,I am bound to fine/ team disqualification by the authority of the organizing committee or any disciplinary action the committee wants to take against me and also I am not allowed to enter informal ground, Varchas, 2023.
          </div>
          <div className="font-bold font-mono italic mb-2 underline">
            <br />
            I have read and accept the terms :{" "}
            <input
              type="checkbox"
              id="agree"
              name="agree"
              checked={disabled}
              onClick={(e)=> setDisabled(e.target.checked)}
            />
          </div>
        </div>

        <button
          type={"submit"}
          className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 mt-10"
          onSubmit={handleSubmit}
          disabled = {!disabled}
        >
          Signup
        </button>
      </div>
    </form>
  );
}
