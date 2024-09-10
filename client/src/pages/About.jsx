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
  <div className="bg-white h-fit flex flex-col lg:flex-row">
    <div className="bg-black w-full lg:w-1/3 justify-center py-10 flex pl-10 h-inherit text-6xl font-robm transition-colors duration-500 ease-in-out text-yellow-300">
      <span className="my-auto">{typeEffect}</span>
    </div>
    <div className="bg-black w-full h-fit text-2xl font-robm py-10 text-white px-4 text-center lg:text-left">
      <span className="text-yellow-400">Varchas</span>, the annual sports festival of <span className="text-yellow-400">IIT Jodhpur</span>, ignites the flames of competition and stands as the largest sporting event in North-West India. With the intensity of <span className="text-yellow-400">Inferno Glory</span>, this event is a powerful celebration of sportsmanship, where teams fuel their pursuit of excellence with relentless dedication and unyielding determination. Varchas is not just a platform, it’s an arena where champions are forged, and the spirit of victory burns brightest.
    </div>
  </div>
  <div className="bg-yellow-400 h-fit w-full flex flex-col items-center justify-evenly rounded-2xl"> {/* Adjusted container */}
    <div className="text-black text-2xl lg:text-5xl font-bold mt-12  ">
      <span className="font-robm lg:text-5xl bg-black text-yellow-400 p-2 text-3xl md:p-4 rounded-xl px-4 md:px-6">Varchas Begins In</span>
    </div>
    <div className="rounded-2xl text-white h-[80%] w-[80%] max-w-screen flex items-center justify-center mr-0 lg:mr-4">
      <CountdownTimer />
    </div>
  </div>
</div>

  
  )
}

export default About;
