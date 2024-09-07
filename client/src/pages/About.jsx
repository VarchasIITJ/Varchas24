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
    <main className="bg-black h-[120vh] w-screen flex flex-col">
  <div className="bg-white h-2/5 flex flex-row">
    <div className="bg-black w-1/3 py-10 flex pl-10 h-full text-6xl font-robm transition-colors duration-500 ease-in-out text-yellow-300">
      <span>{typeEffect}</span>
    </div>
    <div className="bg-black w-2/3 h-full text-2xl font-robm py-10 text-white">
      <span className="text-yellow-400">Varchas</span>, the annual sports festival of <span className="text-yellow-400">IIT Jodhpur</span>, ignites the flames of competition and stands as the largest sporting event in North-West India. With the intensity of <span className="text-yellow-400">Inferno Glory</span>, this event is a powerful celebration of sportsmanship, where teams fuel their pursuit of excellence with relentless dedication and unyielding determination. Varchas is not just a platform, it’s an arena where champions are forged, and the spirit of victory burns brightest.
    </div>
  </div>
  <div className="bg-black h-[60vh] flex flex-col items-center justify-evenly rounded-2xl"> {/* Adjusted container */}
    <div className="text-yellow-300 text-5xl font-bold mt-12  ">
      <span className="font-robm text-5xl bg-black text-yellow-400 p-4 rounded-xl px-6">Varchas Begins In</span>
    </div>
    <div className="rounded-2xl text-white h-[80%] w-[80%] flex items-center justify-center mr-4">
      <CountdownTimer />
    </div>
  </div>
</main>

  
  )
}

export default About;
