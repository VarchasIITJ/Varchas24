import ThreeScene from "./football";
import CountUpCard from "./countUpCard";

const Informatics = () => {


    return (
      <main className="h-screen w-screen bg-black flex flex-row">
        <div className="h-screen w-1/2 bg-black">
          <ThreeScene />
        </div>
        <div className="h-full w-1/2 bg-black flex flex-col items-center justify-evenly">
          <div 
            className="py-6 text-6xl font-semibold font-robm text-yellow-300 flex items-center justify-center" 
            style={{ minHeight: '100px' }} // Adjust this based on your text size
          > 
            <span>PAST YEAR METRICS</span>
          </div>
          <div className="h-full w-full items-center justify-evenly flex flex-row">
            <CountUpCard name={"FootFall"} start={0} end={650} duration={5} />      
            <CountUpCard name={"Events"} start={0} end={20} duration={5}/>      
            <CountUpCard name={"Colleges"} start={0} end={50} duration={5}/>      
          </div>
        </div>
      </main>
    );
  };
  
export default Informatics;
