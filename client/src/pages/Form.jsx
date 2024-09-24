import Header from "../components/header";
import { useState, useEffect } from 'react';
import axios from 'axios';
import { addInfoFields } from "../constants";
import Input from "../components/input";
import { useNavigate,useLocation } from "react-router-dom";
const backendUrl = import.meta.env.VITE_BACKEND_URL;


const fields = addInfoFields;
let fieldsState = {};

fields.forEach((field) => (fieldsState[field.id] = ""));

const Form = () => {

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
    console.log("signupState",signupState);
     const configuration = {
    method: "put",
    url: `${backendUrl}/account/updateInfo/`,
    
    headers: {
    "Content-Type": "application/json",
    },
    data: signupState,
  
  };

    console.log("url",configuration.url)
    axios(configuration)
      .then(response => {
            console.log("Success:", response.data);
            // Display a success message if needed
            alert("User created successfully!");
            navigate('/login')
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
    <section className="h-screen flex items-center justify-center bg-[#222222]">
        <div className="w-3/4 flex flex-col items-center p-4 overflow-auto rounded-2xl max-h-[90%] shadow-sm shadow-[#09fbd3]">
            
        <Header
          heading="👋 Provide us with basic details"
          logoUrl={"/VLW.png"}
          />
        <form className="mt-6  w-full grid grid-cols-2 gap-20" onSubmit={handleSubmit}>
  <div className="col-span-1 space-y-4">
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
    <div >
     <div className="font-bold text-white font-mono italic mb-2 underline">
      <br />
      I have read and accept the terms :{" "}
      <input
        type="checkbox"
        id="agree"
        name="agree"
        checked={disabled}
        onClick={(e) => setDisabled(e.target.checked)}
      />
    </div>
    <button
      type="submit"
      className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 "
      disabled={!disabled}
    >
      Signup
    </button>
  </div>
  </div>
  

  <div className="col-span-1 text-[#a2c288]">
    <div>
      <h5>Undertaking :</h5>
      <ul className="list-disc pl-2">
        <li>
          Indian Institute of Technology, Jodhpur and its students are not
          responsible for any mishappening that may or may not occur during my
          visit to Varchas 2023.
        </li>
        <li>
          I will not inflict any damage on any object present in the accommodation facilities and on campus, and if found, then there will be a fine/team disqualification charged to me.
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
          I understand that visiting the hostels instead of the one allotted to me is strictly prohibited, and if found, I will be liable to pay a fine of INR 2500.
        </li>
        <li>
          I will have to keep the ID card given by the PR team at all times with me during my visit to Varchas, 2023, and if I lose it by some means, I will be liable to pay a fine of INR 500 for issuing a new ID card.
        </li>
        <li>
          I will bring original college identity proof along with a valid Aadhar card, which is mandatory for all the participants. Along with this, our captain has to get a signed statement from the college having our details.
        </li>
        <li>
          I may also be required to leave the IIT campus if I do not adhere to the guidelines mentioned above.
        </li>
      </ul>
      <br />
      If I am found breaking or not complying with any of the above-mentioned guidelines, I am bound to fine/team disqualification by the authority of the organizing committee or any disciplinary action the committee wants to take against me, and also I am not allowed to enter informal ground, Varchas, 2023.
    </div>
   
  </div>

  
</form>

          </div>
    </section>

    
  );
};

export default Form;