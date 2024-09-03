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
    <main className="bg-black h-screen w-screen flex flex-col">
    <div className="bg-white h-2/5 flex flex-row">
      <div className="bg-black w-1/3 py-10 flex pl-10 h-full text-6xl font-normal font-robm text-white transition-colors duration-500 ease-in-out text-yellow-300">
        <span>{typeEffect}</span>
      </div>
      <div className="bg-black w-2/3 h-full text-2xl font-robm py-10 text-white-100">
        <span className="text-yellow-300">Varchas</span> stands as the annual sports festival of <span className="text-yellow-300">IIT Jodhpur</span> and holds the distinction of being the largest sporting event in North-West India. Varchas is a celebration of the spirit of sportsmanship, offering a prominent platform to showcase the dedication and hard work invested by various teams to attain excellence in their respective sporting disciplines.
      </div>
    </div>
    <div className="bg-black h-1/2 flex items-center justify-center">
  <div className="rounded-2xl bg-gray-800 text-white h-[90%] w-[90%] flex items-center justify-center">
    <div className="h-[100%] w-[100%] bg-yellow-400 rounded-2xl text-white flex items-center justify-center "><CountdownTimer /></div>
  </div>
</div>

  </main>
  )
}

export default About;
