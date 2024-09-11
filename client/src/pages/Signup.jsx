import Header from "../components/header";
import SignupCard from "../components/SignupCard";
import { useGoogleLogin } from "@react-oauth/google";
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { BackgroundBeamsWithCollision } from "../components/background-beams-with-collision";
import axios from 'axios';


const SignUp = () => {
  const [ user, setUser ] = useState(null);
  const signup_google=useGoogleLogin({
    onSuccess:(codeResponse)=> setUser(codeResponse),
    onError:(error)=>console.log('Login Failed:',error)

  })

  const navigate = useNavigate();

  //google auth
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
              navigate("/form", { state: { email: email}});
            }
            else{
              sessionStorage.setItem('Token', result.data.access_token);
              sessionStorage.setItem('refresh_Token', result.data.refresh_token);
              navigate('/');  // Redirect to the home page or dashboard
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
    <section className="h-screen flex items-center justify-center bg-black p-4 overflow-auto">
    <BackgroundBeamsWithCollision>
      <div className="w-full max-w-md flex flex-col items-center p-4 shadow-lg bg-[#18171c] rounded-2xl z-50 overflow-auto">
        <Header
          heading="Create an account"
          paragraph="Already have an account? "
          linkName="Login"
          linkUrl="/login"
          logoUrl={"/NewLogo.png"}
        />
        <SignupCard />
        {/* <h4 className="text-white mt-4">Or</h4> */}
        <button
          onClick={() => signup_google()}
          className="
            bg-black text-white
            rounded-full
            py-2 px-6
            text-lg font-semibold
            flex items-center justify-center
            transition-colors duration-300
            mt-4
            w-full max-w-xs
            mb-8
            border border-white
            hover:border-yellow-400
          "
        >
          Signup with Google
        </button>
      </div>
    </BackgroundBeamsWithCollision>
  </section>
  
    
  )
    ;
};

export default SignUp;
