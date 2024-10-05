import {useTypewriter} from "react-simple-typewriter";
import CountdownTimer from "../components/countdownCalendar";

const About = () => {
  const [typeEffect] = useTypewriter({
    words:['About Us','हमारे बारे में'],
    loop:{},
    typeSpeed:100,
    deleteSpeed:40,
})

return (
  <div className="bg-black h-fit w-screen flex flex-col">
    <div className="bg-black h-full flex flex-col lg:flex-row">
      <div className="bg-black w-full lg:w-1/3 text-left font-bold justify-start py-10 flex pl-10 h-full text-5xl md:text-6xl sm:text-6xl font-robm transition-colors duration-500 ease-in-out text-yellow-300">
        <span className="my-auto ">&nbsp;{typeEffect}</span>
      </div>
      <div className="bg-black w-full h-fit text-xl md:text-2xl sm:text-2xl font-robm py-10 text-white px-4 text-left lg:text-left sm:text-left mb-20">
        <span className="text-yellow-400">Varchas</span>, the annual sports festival of <span className="text-yellow-400">IIT Jodhpur</span>, ignites the flames of competition and stands as the largest sporting event in North-West India. With the intensity of <span className="text-yellow-400">Inferno Glory</span>, this event is a powerful celebration of sportsmanship, where teams fuel their pursuit of excellence with relentless dedication and unyielding determination. Varchas is not just a platform, it’s an arena where champions are forged, and the spirit of victory burns brightest.
      </div>
    </div>
    <div className="bg-yellow-400 h-fit sm: m-1 flex flex-col items-center justify-start rounded-2xl">
      <div className="text-4xl sm:text-5xl md:text-5xl font-bold mt-0 sm:mt-1 mb-6 sm:mb-10 text-center">
        <span className="font-robm bg-black text-yellow-400 p-2 mt-5 sm:p-3 md:p-4 rounded-xl inline-block">
          Varchas Begins In
        </span>
      </div >
      <div className="rounded-2xl bg-yellow-400 h-[30%] w-[80%] max-w-screen flex items-center justify-center">
        <CountdownTimer day={10} month={9} year={2024} />
      </div>
    </div>
  </div>
);
}

export default About;
