import { Link } from "react-router-dom";
import Header from "../components/header";
import Logincard from "../components/Logincard";
import { useGoogleLogin } from "@react-oauth/google";
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const Login = () => {
  const [ user, setUser ] = useState(null);
  const login_google=useGoogleLogin({
    onSuccess:(codeResponse)=> setUser(codeResponse),
    onError:(error)=>console.log('Login Failed:',error)

  })

  const navigate = useNavigate();


  useEffect(()=>{
    if(user){
      axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
            headers: {
                Authorization: `Bearer ${user.access_token}`,
                Accept: 'application/json'
            }
        })
      
        .then((res) => {
        const { email } = res.data;
  
        axios.post('http://127.0.0.1:8000/account/google-signup/', {
          email: email,
        }, {
          headers: {
            'Content-Type': 'application/json',
          },
        })
        .then((result) => {
            console.log('Backend Response:', result.data);
            if(result.data.message==='User Created now needs additional information'){
              // alert("account not registered")
              navigate('/form');
            }
            else{
              sessionStorage.setItem('Token', result.data.access_token);
              sessionStorage.setItem('refresh_Token', result.data.refresh_token);
              navigate('/');  // Redirect to the home page or dashboard
            // location.reload();
            }
            
          
        })
        .catch((err) => {
          console.error('Error authenticating user:', err);
          sessionStorage.clear();
           if (err.response && err.response.data && err.response.data.detail){
              alert(err.response.data.message);
            }
        });
      })
      .catch((err) => {
        console.error('Error getting user info from Google:', err);
      });
    }
  }, [user, navigate]);






  return (
    <section className="h-screen flex items-center  justify-center bg-[#222222]">
      <div className="sm:w-fit flex flex-col  items-center p-4 shadow shadow-[#09fbd3] hover:shadow-lg hover:shadow-emerald-300 rounded-2xl ">

        <Header
          heading="Login to your account"
          paragraph="Don't have an account yet?"
          linkName="Signup"
          linkUrl="/signup"
          logoUrl={"/VLW.png"}
        />
        <Logincard />
        <h4 className="text-white mt-4">Or</h4>
        <button
        onClick={() => login_google()}
        className="
            bg-white text-black
            border-none rounded-md
            py-2 px-4
            text-lg font-semibold
            flex items-center justify-center
            transition-colors duration-300
            hover:bg-blue-500 mt-4
        "
    >
        Log in with Google 🚀
    </button>
      </div>
    </section>)
    ;
};

export default Login;
