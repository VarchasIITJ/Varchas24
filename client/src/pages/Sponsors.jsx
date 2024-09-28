// import { CB, OIL, cosco, mera, redbull, sbi, yonex } from "../assets";
import '../../index.css'; // Import global CSS for the animation
import {Decathlon,STAGE,FM934,KANA,NH,DUBEAT,RAJ,SAGE,SARAS,SFFS,WOMAN} from '../assets/Sponsors'
const Sponsors = () => {
  return (
    <main className="w-full h-screen flex flex-col lg:flex-row">

      <div
        className="h-screen overflow-cover w-full lg:w-1/4 flex flex-col p-6"
        style={{
          background: 'linear-gradient(to right, #f56565, #ed64a6, #9f7aea)',
          backgroundSize: '200% 200%',
          animation: 'gradientMove 5s ease-in-out infinite',
        }}
      >
        <div className="mt-20 flex flex-col justify-center items-center h-full">
          <h3 className="text-black text-3xl lg:text-5xl font-bold mb-8 lg:mb-16 text-center font-roboto">Sponsors</h3>
          <p className="text-black text-sm lg:text-base text-center font-roboto">
            Over the past years Varchas has had the privilege to have hosted a number of sponsors which provided a very entertaining experience to our visitors as well as the brand. The crowd engagement, media exposure, sampling and brand building opportunities offered at Varchas are unparalleled.
          </p>
        </div>
      </div>

      <div className="h-full w-full lg:w-3/4 flex flex-col items-center justify-start lg:justify-evenly bg-black p-4">
      <div className="flex w-full justify-evenly">

        <div className="flex justify-center items-center mt-20 flex-col ">
          <h3 className="text-gray-100 text-xl  md:text-3xl lg:text-4xl mb-2">Associate Sponsor</h3>
          <img
            src={Decathlon}
            alt="Decathlon"
            className="h-10 lg:h-16 w-auto object-contain mt-3"
            />
        </div>
        <div className="flex justify-center items-center flex-col ">
          <h3 className="text-gray-100 text-xl mt-20 md:text-3xl lg:text-4xl mb-2">Sports Sponsor</h3>
          <img
            src={STAGE}
            alt="STAG"
            className="h-10 lg:h-16 w-auto object-contain mt-3"
            />
        </div>

            </div>
        <h3 className="text-gray-100 text-xl  md:text-3xl mt-4 mb-4 lg:text-4xl">Past Sponsors</h3>
        <div className="grid grid-cols-3 lg:grid-cols-3 gap-6 lg:gap-12 w-full">
          <img src={SARAS} alt="SARAS" className="h-12 w-25 lg:h-20 object-contain mx-auto" />
          <img src={WOMAN} alt="WOMANERA" className="h-12 lg:h-16 w-auto object-contain mx-auto" />
          <img src={FM934} alt="94.3 FM" className="h-12 lg:h-16 w-auto object-contain mx-auto" />
          <img src={DUBEAT} alt="DUBEAT" className="h-12 lg:h-16 w-auto object-contain mx-auto" />
          <img src={SAGE} alt="SAGEDIGIX" className="h-14 lg:h-20 w-24 object-contain mx-auto" />
          <img src={RAJ} alt="RAJEVENTS" className="h-12 lg:h-20 w-24 object-contain mx-auto" />
          <img src={NH} alt="NHCLUB" className="h-12 lg:h-20 w-24 object-contain mx-auto" />
          <img src={KANA} alt="KANAHOTEL" className="h-12 lg:h-20 w-24 object-contain mx-auto" />
          <img src={SFFS} alt="KANAHOTEL" className="h-12 lg:h-20 w-24 object-contain mx-auto" />
        </div>
      </div>
    </main>
  );
};

export default Sponsors;
