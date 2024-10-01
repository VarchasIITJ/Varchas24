import { useEffect, useState } from "react";
// import Comingsoon from "../components/comingsoon";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const backendUrl = import.meta.env.VITE_BACKEND_URL;


const Payment = () => {
  const handleClick = () => {
    window.open('https://forms.eduqfix.com/vsevents/add', '_blank');
  };
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
    <main className="relative bg-black w-screen h-screen sm:h-screen mx-auto sm:px-16 px-6 sm:py-16 py-10 max-w-7xl z-0 flex flex-col items-center justify-center">
      <div className="text-yellow-400 text-[2.5rem] font-mono capitalize my-10">
        Click on the button Below to Pay
      </div>

      <div>
        <button onClick={handleClick} className="px-4 py-2 bg-yellow-400 text-balck rounded hover:bg-orange-400-600 transition-colors"> Pay Now </button>
      </div>

      
      {/* <Comingsoon /> */}
    </main>
  );
};

export default Payment;