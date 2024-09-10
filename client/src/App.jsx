import Navbar from "./components/Navbar";
import Events from "./pages/Events";
import Sponsors from "./pages/Sponsors";
import Team from "./pages/Team";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import TeamCreate from "./pages/CreateTeam";
import TeamJoin from "./pages/Join";
import Payment from "./pages/Payment";
import VTeam from "./pages/viewTeam";
import Discount from "./pages/Discount";
import Forgot from "./pages/Forgot";
import Dcricket from "./sports/c";
<<<<<<< HEAD
import Not_Found from "./pages/Not_Found";
=======
import SignUp from "./pages/Signup";
import Form from "./pages/Form"

>>>>>>> e0698d22d03cff2d821faf5ee9e6302870c7bd64

const App = () => {

  return (

    <div>
      <div className="relative z-0 bg-black bg-cover bg-no-repeat bg-center">
        <Router>
          <div className="">
            <Navbar />

          </div>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sponsors" element={<Sponsors />} />
            <Route path="/events" element={<Events />} />
            <Route path="/team" element={<Team />} />

            <Route path="/profile" element={<Profile />} />
            <Route path="/login" element={<Login />} />
            {/* <Route path="/signup" element={<Signup />} /> */}
            <Route path="/signup" element={<SignUp />} />
            <Route path="/form" element={<Form/>} />
            

            <Route path="/create" element={<TeamCreate />} />
            <Route path="/join" element={<TeamJoin />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/view_team" element={<VTeam />} />

            <Route path="/discount" element={<Discount />} />
            <Route path="/forgot" element={<Forgot />} />

            <Route path="/cricket" element={<Dcricket />} />
            <Route path="/hockey" element={<Forgot />} />
            <Route path="/kabaddi" element={<Forgot />} />
            <Route path="/table-tennis" element={<Forgot />} />
            <Route path="/lawn-tennis" element={<Forgot />} />
            <Route path="/basketball" element={<Forgot />} />
            <Route path="/volleyball" element={<Forgot />} />
            <Route path="/esports/bgmi" element={<Forgot />} />
            <Route path="/esports/valorant" element={<Forgot />} />
            <Route path="/esport/clash-royale" element={<Forgot />} />
            <Route path="/chess" element={<Forgot />} />
            <Route path="/forgot" element={<Forgot />} />
            <Route path="/forgot" element={<Forgot />} />
            <Route path="*" element={<Not_Found/>}></Route>
          </Routes>
        </Router>
      </div >
    </div>
  );
};

export default App;
