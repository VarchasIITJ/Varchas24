import React, { Suspense, lazy, useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loader from "./components/Loader1";

// Lazy load components
const Navbar = lazy(() => import("./components/Navbar"));
const Home = lazy(() => import("./pages/Home"));
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
const Not_Found = lazy(() => import("./pages/Not_Found"));
const SignUp = lazy(() => import("./pages/Signup"));
const Form = lazy(() => import("./pages/Form"));

// Custom Suspense wrapper with minimum delay
const SuspenseWrapper = ({ children }) => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsReady(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Suspense fallback={<Loader />}>
      {isReady ? children : <Loader />}
    </Suspense>
  );
};

const App = () => {
  return (
    <div className="relative z-0 bg-black bg-cover bg-no-repeat bg-center">
      <Router>
        <SuspenseWrapper>
          <Navbar />
        </SuspenseWrapper>
        <Routes>
          <Route path="/" element={<SuspenseWrapper><Home /></SuspenseWrapper>} />
          <Route path="/sponsors" element={<SuspenseWrapper><Sponsors /></SuspenseWrapper>} />
          <Route path="/events" element={<SuspenseWrapper><Events /></SuspenseWrapper>} />
          <Route path="/team" element={<SuspenseWrapper><Team /></SuspenseWrapper>} />
          <Route path="/profile" element={<SuspenseWrapper><Profile /></SuspenseWrapper>} />
          <Route path="/login" element={<SuspenseWrapper><Login /></SuspenseWrapper>} />
          <Route path="/signup" element={<SuspenseWrapper><SignUp /></SuspenseWrapper>} />
          <Route path="/form" element={<SuspenseWrapper><Form /></SuspenseWrapper>} />
          <Route path="/create" element={<SuspenseWrapper><TeamCreate /></SuspenseWrapper>} />
          <Route path="/join" element={<SuspenseWrapper><TeamJoin /></SuspenseWrapper>} />
          <Route path="/payment" element={<SuspenseWrapper><Payment /></SuspenseWrapper>} />
          <Route path="/view_team" element={<SuspenseWrapper><VTeam /></SuspenseWrapper>} />
          <Route path="/discount" element={<SuspenseWrapper><Discount /></SuspenseWrapper>} />
          <Route path="/forgot" element={<SuspenseWrapper><Forgot /></SuspenseWrapper>} />
          <Route path="*" element={<SuspenseWrapper><Not_Found /></SuspenseWrapper>} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;