import { Link } from "react-router-dom";
import Header from "../components/header";
import Logincard from "../components/Logincard";

const Login = () => {
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
      </div>
    </section>)
    ;
};

export default Login;
