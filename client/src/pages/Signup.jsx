import Header from "../components/header";
import Signupcard from "../components/Signupcard";
const Signup = () => {
  return (
    <section className="h-screen flex items-center justify-center bg-[#222222]">
        <div className="flex flex-col items-center p-4 overflow-auto rounded-2xl max-h-[70%] shadow-sm shadow-[#09fbd3]">
            
        <Header
          heading="Create an account"
          paragraph="Already have an account? "
          linkName="Login"
          linkUrl="/login"
          logoUrl={"/VLW.png"}
          />
        <Signupcard />
          </div>
    </section>
  );
};

export default Signup;
