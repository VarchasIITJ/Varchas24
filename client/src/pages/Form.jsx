import React from 'react';
import Header from "../components/header";
import { useState, useEffect } from "react";
import axios from "axios";
import { addInfoFields } from "../constants";
import Input from "../components/input";
import { useNavigate, useLocation } from "react-router-dom";
const backendUrl = import.meta.env.VITE_BACKEND_URL;
import './Form.css'
const fields = addInfoFields;
let fieldsState = {};

fields.forEach((field) => (fieldsState[field.id] = ""));
const Form = () => {
  const [height,setHeight] = useState(`200px`);
  useEffect(()=>{
    setHeight(String(window.innerHeight*0.5)+"px");
    console.log(height);
  },[window.innerHeight])
  const location = useLocation();
  const email = location.state?.email || "";
  const navigate = useNavigate();

  const [disabled, setDisabled] = useState(false);
  const [signupState, setSignupState] = useState({
    ...fieldsState,
    email: email,
  });

  useEffect(() => {
    if (!email) {
      navigate("/signup");
    }
  }, [email, navigate]);

  const handleChange = (e) =>
    setSignupState({ ...signupState, [e.target.id]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    const phoneNumber = signupState["phone"];
    const phonePattern = /^[0-9]{10}$/;

    if (!phonePattern.test(phoneNumber)) {
      alert("Phone number must be exactly 10 digits.");
      return;
    }

    // If validation passes, proceed with the form submission
    createAccount();
  };

  //handle Signup API Integration here
  const createAccount = () => {
    console.log("signupState", signupState);
    const configuration = {
      method: "put",
      url: `${backendUrl}/account/updateInfo/`,

      headers: {
        "Content-Type": "application/json",
      },
      data: signupState,
    };

    console.log("url", configuration.url);
    axios(configuration)
      .then((response) => {
        console.log("Success:", response.data);
        // Display a success message if needed
        alert("User created successfully!");
        navigate("/login");
      })
      .catch((error) => {
        if (error.response) {
          console.log("Error data:", error.response.data);
          alert(
            `Error: ${
              error.response.data.Error || "An unexpected error occurred."
            }`
          );
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
    <section className="h-full lg:h-screen flex items-center justify-center bg-[#000]">
      <div className="lg:w-3/4 m-4 mt-10 overflow-hidden lg:mt-16 flex flex-col bg-[#222222] items-center p-4  rounded-2xl lg:max-h-[85%] shadow-sm shadow-[#ffeb3b]">
        <Header
          heading="👋 Provide us with basic details"
          logoUrl={"NewLogo.png"}
        />
        <form
          className="mt-6 w-full h-fit space-x-3 flex flex-col md:flex-row "
          onSubmit={handleSubmit}
        >
            <div className="scroll-mr-4 md:overflow-y-scroll lg:overflow-y-scroll xl:overflow-y-scroll sm:h-full md:h-[300px] lg:h-[450px]">
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
              <div>
                <div className="font-bold text-white font-mono italic mb-2 underline flex gap-3">
                  <input
                    type="checkbox"
                    id="agree"
                    name="agree"
                    checked={disabled}
                    onClick={(e) => setDisabled(e.target.checked)}
                  />
                  I have read and accepted all the terms and conditions {" "}
                </div>
                <button
                  type="submit"
                  className="w-1/2 group relative mx-auto flex justify-center py-2 mt-8 px-4 border border-transparent text-md font-medium rounded-full text-black bg-[#ffeb3b] hover:bg-[#D8C83A] cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 "
                  disabled={!disabled}
                >
                  Signup
                </button>
              </div>
            </div>

            <div className={`md:w-1/2 h-full md:h-[400px] lg:h-[450px] text-[#fff] overflow-y-scroll`}>
              <div>
                <h5>Undertaking :</h5>
                <ul className="list-disc pl-2 max-h-full">
                  <li>
                    Indian Institute of Technology, Jodhpur and its students are
                    not responsible for any mishappening that may or may not occur
                    during my visit to Varchas 2024.
                  </li>
                  <li>
                    I will not inflict any damage on any object present in the
                    accommodation facilities and on campus, and if found, then
                    there will be a fine/team disqualification charged to me.
                  </li>
                  <li>
                    I will not administer or consume any type of alcoholic and/or
                    narcotics substances. If found, I will be liable to pay a fine
                    of INR 5000.
                  </li>
                  <li>
                    I will behave in a respectful and responsible manner towards
                    everyone during my visit to Varchas, 2024.
                  </li>
                  <li>
                    I will not invite anyone to my particular accommodation
                    allotted to me who is not documented for their stay in the
                    same accommodation.
                  </li>
                  <li>
                    I will not visit any prohibited areas as instructed. If found
                    included, I will be liable to pay a fine of INR 2500.
                  </li>
                  <li>
                    I understand that visiting the hostels instead of the one
                    allotted to me is strictly prohibited, and if found, I will be
                    liable to pay a fine of INR 2500.
                  </li>
                  <li>
                    I will have to keep the ID card given by the PR team at all
                    times with me during my visit to Varchas, 2024, and if I lose
                    it by some means, I will be liable to pay a fine of INR 500
                    for issuing a new ID card.
                  </li>
                  <li>
                    I will bring original college identity proof along with a
                    valid Aadhar card, which is mandatory for all the
                    participants. Along with this, our captain has to get a signed
                    statement from the college having our details.
                  </li>
                  <li>
                    I may also be required to leave the IIT campus if I do not
                    adhere to the guidelines mentioned above.
                  </li>
                </ul>
                <br />
                If I am found breaking or not complying with any of the
                above-mentioned guidelines, I am bound to fine/team
                disqualification by the authority of the organizing committee or
                any disciplinary action the committee wants to take against me,
                and also I am not allowed to enter informal ground, Varchas, 2024.
              </div>
            </div>
        </form>
      </div>
    </section>
  );
};

export default Form;
