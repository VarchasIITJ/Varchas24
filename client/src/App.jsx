import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

// Lazy load other components
const Events = lazy(() => import("./pages/Events"));
const Sponsors = lazy(() => import("./pages/Sponsors"));
const Team = lazy(() => import("./pages/Team"));
const Login = lazy(() => import("./pages/Login"));
const Profile = lazy(() => import("./pages/Profile"));
const TeamCreate = lazy(() => import("./pages/CreateTeam"));
const TeamJoin = lazy(() => import("./pages/Join"));
const Payment = lazy(() => import("./pages/Payment"));
const VTeam = lazy(() => import("./pages/viewTeam"));
const Discount = lazy(() => import("./pages/Discount"));
const Forgot = lazy(() => import("./pages/Forgot"));
const SignUp = lazy(() => import("./pages/Signup"));
const Form = lazy(() => import("./pages/Form"));
const Not_Found = lazy(() => import("./pages/Not_Found"));

const App = () => {
  return (
    <div>
      <div className="relative z-0 bg-black bg-cover bg-no-repeat bg-center">
        <Router>
          <div>
            <Navbar />
          </div>

          {/* Suspense wraps lazy-loaded components */}
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/sponsors" element={<Sponsors />} />
              <Route path="/events" element={<Events />} />
              <Route path="/team" element={<Team />} />

              <Route path="/profile" element={<Profile />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/form" element={<Form />} />

              <Route path="/create" element={<TeamCreate />} />
              <Route path="/join" element={<TeamJoin />} />
              <Route path="/payment" element={<Payment />} />
              <Route path="/view_team" element={<VTeam />} />

              <Route path="/discount" element={<Discount />} />
              <Route path="/forgot" element={<Forgot />} />

              {/* Catch-all route for undefined paths */}
              <Route path="*" element={<Not_Found />} />
            </Routes>
          </Suspense>
        </Router>
      </div>
    </div>
  );
};

export default App;
