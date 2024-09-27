import { useState } from "react";
import Input from "../components/input";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { BackgroundBeamsWithCollision } from "../components/background-beams-with-collision";

const Forgot = () => {
  const [eid, setEid] = useState("");
  const [otp, setOtp] = useState("");
  const [req, setReq] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [pass, setPass] = useState("");
  const [cnfpass, setCnfpass] = useState("");
  const navigate = useNavigate();

  const handleEid = (e) => {
    setEid(e.target.value);
  };
  const handleOtp = (e) => {
    setOtp(e.target.value);
  };

  const handleOtpgenerate = (e) => {
    e.preventDefault();
    generateOTP();
  };

  const handleOtpsubmit = (e) => {
    e.preventDefault();
    confirmOTP();
  };

  const handlePass = (e) => {setPass(e.target.value)}
  const handleCnfpass = (e) => {setCnfpass(e.target.value)}

  const generateOTP = () => {
    console.log(eid);
    setTimeout(() => {
      alert("Generating OTP");
    }, 150);
    const configuration = {
      method: "post",
      url: "https://apivarchas24.in/account/password_reset_request/",
      data: { email: eid },
    };

    axios(configuration)
      .then((result) => {
        alert(result.data.message);
        setReq(true);
      })
      .catch((error) => {
        console.log(error);
        if (error.response && error.response.data && error.response.data.message){
            alert(error.response.data.message);
        }
        if (error.response && error.response.data && error.response.data.detail){
            alert(error.response.data.detail);
        }
      });
  };

  const confirmOTP = () => {
    console.log(otp);
    const configuration = {
      method: "post",
      url: "https://apivarchas24.in/account/otp_verification/",
      data: { email: eid, otp: otp },
    };

    axios(configuration)
      .then((result) => {
        alert(result.data.message);
        setToggle(true);
      })
      .catch((error) => {
        console.log(error);
        if (error.response && error.response.data && error.response.data.message){
            alert(error.response.data.message);
        }
        if (error.response && error.response.data && error.response.data.detail){
            alert(error.response.data.detail);
        }
      });
  };

  const handleChangePassword = (e) => {
    e.preventDefault();
    changePassword();
  }

  const changePassword = () => {
    if (pass === cnfpass){
        console.log({ email: eid, password: pass })

        const configuration = {
            method: "post",
            url: "https://apivarchas24.in/account/reset_password/",
            data: { email: eid, password: pass },
        };
        
        axios(configuration)
        .then((result) => {
            alert(result.data.message);
            navigate("/login");
        })
        .catch((error) => {
            console.log(error);
            if (error.response && error.response.data && error.response.data.message){
                alert(error.response.data.message);
            }
            if (error.response && error.response.data && error.response.data.detail){
                alert(error.response.data.detail);
            }
          }); 
    }else{
        alert("Passwords don't match");
    }
  }
  return (
    <section className="h-screen w-screen flex justify-center items-center bg-black" >
      <BackgroundBeamsWithCollision>
      {!req ? (
        <div className="border border-yellow-400 sm:w-[33%] sm:h-1/2 h-[80%] w-[80%]  p-2 flex flex-col items-center justify-center gap-2 bg-zinc-900 z-50">
          <div className="text-center sm:text-[2rem] text-[1.125rem] font-mono text-yellow-400">
            {" "}
            Reset Password
          </div>
          <div className="text-center text-gray-500">
            {" "}
            Enter your <span className="text-white">registered email address</span> and we will send you a code to
            reset your password
          </div>

          <div className="w-full">
            <form action="" onSubmit={handleOtpgenerate} className="w-full">
              <Input
                isRequired={true}
                value={eid}
                handleChange={handleEid}
                type={"email"}
                id={"forgot_password"}
                key={"forgot_password"}
                labelFor={"forgot_password"}
                labelText={"forgot_password"}
                name={"forgot_password"}
                placeholder={"Enter your email"}
              />
              <button
                type={"submit"}
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-full text-black bg-yellow-400 hover:bg-yellow-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-4  00"
                onSubmit={handleOtpgenerate}
              >
                Send OTP
              </button>
            </form>
          </div>
        </div>
      ) : !toggle ? (
        <div className="border sm:w-[33%] sm:h-1/2 h-[80%] w-[80%] text-white p-2 flex flex-col items-center justify-center gap-2">
          <div className="text-center sm:text-[2rem] text-[1.125rem] font-mono">
            {" "}
            Reset Password
          </div>
          <div className="text-center">
            {" "}
            Enter the OTP(4-digits) received in your registered Email Address
          </div>

          <div className="w-full">
            <form action="" onSubmit={handleOtpsubmit} className="w-full">
              <Input
                isRequired={true}
                value={otp}
                handleChange={handleOtp}
                type={"text"}
                id={"OTP"}
                key={"OTP"}
                labelFor={"OTP"}
                labelText={"OTP"}
                name={"OTP"}
                placeholder={"Enter OTP"}
              />
              <button
                type={"submit"}
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-yellow-400 hover:bg-yellow-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-300"
                onSubmit={handleOtpsubmit}
              >
                Send OTP
              </button>
            </form>
          </div>
        </div>
      ) : (
        <div className="border sm:w-[33%] sm:h-1/2 h-[80%] w-[80%] text-white p-2 flex flex-col items-center justify-center gap-2">
          <div className="text-center sm:text-[2rem] text-[1.125rem] font-mono">
            {" "}
            Reset Password
          </div>
          <div className="text-center">
            {" "}
            Enter New Passwords
          </div>

          <div className="w-full">
            <form action="" onSubmit={handleChangePassword} className="w-full">
              <Input
                isRequired={true}
                value={pass}
                handleChange={handlePass}
                type={"text"}
                id={"Password"}
                key={"Password"}
                labelFor={"Password"}
                labelText={"Password"}
                name={"Password"}
                placeholder={"Enter Password"}
              />
              <Input
                isRequired={true}
                value={cnfpass}
                handleChange={handleCnfpass}
                type={"text"}
                id={"Confirm Password"}
                key={"Confirm Password"}
                labelFor={"Confirm Password"}
                labelText={"Confirm Password"}
                name={"Confirm Password"}
                placeholder={"Re-Enter Password"}
              />
              <button
                type={"submit"}
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-yellow-400 hover:bg-yellow-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-300"
                onSubmit={handleChangePassword}
              >
                Change Password
              </button>
            </form>
          </div>
        </div>
      )}
      </BackgroundBeamsWithCollision>
    </section>
  );
};

export default Forgot;
