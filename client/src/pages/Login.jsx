import { Link } from "react-router-dom";
import Header from "../components/header";
import Logincard from "../components/Logincard";
import { useGoogleLogin } from "@react-oauth/google";
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { BackgroundBeamsWithCollision } from "../components/background-beams-with-collision";
const backendUrl = import.meta.env.VITE_BACKEND_URL;


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
  
        axios.post(`${backendUrl}/account/google-signup/`, {
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
              navigate("/form", { state: { email: email}});
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
    <section className="h-[100vh] w-screen flex items-center justify-center bg-black">
  <BackgroundBeamsWithCollision>
    {/* Card Container */}
    <div className="relative z-9 flex flex-col items-center p-3 bg-zinc-900 rounded-2xl w-[90%] sm:w-[80%] sm:h[80%] md:w-[60%] lg:w-[50%] xl:w-[40%] max-w-md h-fit max-h-[90%] overflow-auto">
      <Header
        heading="Login into your account"
        paragraph="Don't have an account yet?"
        linkName="Signup"
        linkUrl="/signup"
        logoUrl="/NewLogo.png"
      />
      <Logincard />
      <button
        onClick={() => login_google()}
        className="
          bg-black text-gray-200
          border border-gray-400 rounded-full
          py-2 px-6
          text-md font-semibold
          flex items-center justify-center
          transition-colors duration-300
          hover:border-yellow-400 mt-4
          w-full sm:w-80 lg:w-96
        "
      >
        Login with Google
      </button>
    </div>
  </BackgroundBeamsWithCollision>
</section>

  



    
  )
    ;
};

export default Login;
