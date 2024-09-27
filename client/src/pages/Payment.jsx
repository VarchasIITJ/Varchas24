import { useEffect, useState } from "react";
import Comingsoon from "../components/comingsoon";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const backendUrl = import.meta.env.VITE_BACKEND_URL;


const Payment = () => {
  const navigate = useNavigate();
  const [Data, setData] = useState("");
  useEffect(() => {
    const token = sessionStorage.getItem("Token");

    if (!token) {
      const jsonData = { error: "Kindly Login First" };
      alert(jsonData.error);
      navigate("/login");
    }
  });
  useEffect(() => {
    const token = sessionStorage.getItem("Token")
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    const configuration = {
      method: "get",
      url: `${backendUrl}/payment`,
    };
    axios(configuration)
      .then((result) => {
        setData(result.data.message);
        // alert(result.data.message);
      })
      .catch((error) => {
        console.log(error);
        if (error.response && error.response.data && error.response.data.message){
            alert(error.response.data.message);
        }
        if (error.response && error.response.data && error.response.data.detail){
          alert('Session Expired. Kindly login again');
          sessionStorage.clear();
          window.location.reload();
          window.location.href='/login'
        }
      });
  }, []);
  return (
    <main className="relative w-screen h-fit sm:h-screen mx-auto sm:px-16 px-6 sm:py-16 py-10 max-w-7xl z-0 flex flex-col items-center justify-center">
      <div className="text-yellow-400 text-[2.5rem] font-mono capitalize my-10">
        {Data}
      </div>

      <div className="w-[80%]">
        <div>
          
        </div>
        <iframe
          src="https://forms.eduqfix.com/vsevents/add"
          width="100%"
          height="600px"
          frameborder="0px"
          onLoad={handleLoad}
        ></iframe>
      </div>
      {/* <Comingsoon /> */}
    </main>
  );
};

export default Payment;
