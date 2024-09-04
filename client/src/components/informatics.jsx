import ThreeScene from "./football";
import CountUpCard from "./countUpCard";

const Informatics = () => {


    return (
        <main className="h-screen w-screen bg-black flex flex-row">
        <div className="h-screen w-1/2 bg-black">
          <ThreeScene />
        </div>
        <div className="h-screen w-1/2 bg-black flex flex-col items-center justify-evenly">
          <div 
            className="py-2 text-6xl font-semibold font-robm text-yellow-300 flex flex-col items-center justify-center" 
            style={{ minHeight: '100px' }} 
          >
            <span>Past Year Metrics</span>
          </div>
          <div className="h-full w-full flex flex-row items-center justify-evenly mt-2">
            <CountUpCard name={"FootFall"} start={0} end={20} duration={5} suffix='k+' />      
            <CountUpCard name={"Events"} start={0} end={20} duration={5}/>      
            <CountUpCard name={"Colleges"} start={0} end={50} duration={5}/>      
          </div>
        </div>
      </main>
      
    );
  };
  
export default Informatics;
