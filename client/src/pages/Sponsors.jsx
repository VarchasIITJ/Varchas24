import { CB, OIL, cosco, mera, redbull, sbi, yonex } from "../assets";
// import {Decathlon} from '../assets/Sponsors/Decathlon.png'
import '../../index.css'; // Import global CSS for the animation

const Sponsors = () => {
  return (
    <main className="w-full h-screen flex flex-col lg:flex-row">

      <div
        className="h-full w-full lg:w-1/4 flex flex-col p-6"
        style={{
          background: 'linear-gradient(to right, #f56565, #ed64a6, #9f7aea)',
          backgroundSize: '200% 200%',
          animation: 'gradientMove 5s ease-in-out infinite',
        }}
      >
        <div className="flex flex-col justify-center items-center h-full">
          <h3 className="text-black text-3xl lg:text-5xl font-bold mb-8 lg:mb-16 text-center font-roboto">Sponsors</h3>
          <p className="text-black text-sm lg:text-base text-center font-roboto">
            Over the past years Varchas has had the privilege to have hosted a number of sponsors which provided a very entertaining experience to our visitors as well as the brand. The crowd engagement, media exposure, sampling and brand building opportunities offered at Varchas are unparalleled.
          </p>
        </div>
      </div>

      <div className="h-full w-full lg:w-3/4 flex flex-col items-center justify-start lg:justify-evenly bg-black p-4">
      <div className="flex w-full justify-evenly">

        <div className="flex justify-center items-center flex-col ">
          <h3 className="text-gray-100 text-3xl lg:text-4xl my-2">Associate Sponsor</h3>
          <img
            src='src/assets/Sponsors/Decathlon.png'
            alt="Decathlon"
            className="h-10 lg:h-16 w-auto object-contain"
            />
        </div>
        <div className="flex justify-center items-center flex-col ">
          <h3 className="text-gray-100 text-3xl lg:text-4xl mb-2">Sports Sponsor</h3>
          <img
            src='src/assets/Sponsors/STAG.png'
            alt="STAG"
            className="h-10 lg:h-16 w-auto object-contain"
            />
        </div>

            </div>
        <h3 className="text-gray-100 text-3xl lg:text-4xl mb-4">Past Sponsors</h3>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-12 w-full">
          <img src='/src/assets/Sponsors/SARAS.png' alt="SARAS" className="h-12 w-25 lg:h-20 object-contain mx-auto" />
          <img src='/src/assets/Sponsors/WOMANERA.png' alt="WOMANERA" className="h-12 lg:h-16 w-auto object-contain mx-auto" />
          <img src='/src/assets/Sponsors/934FM-removebg-preview.png' alt="94.3 FM" className="h-12 lg:h-16 w-auto object-contain mx-auto" />
          <img src='/src/assets/Sponsors/DUBEAT.png' alt="DUBEAT" className="h-12 lg:h-16 w-auto object-contain mx-auto" />
          <img src='/src/assets/Sponsors/SAGEDIGIX.png' alt="SAGEDIGIX" className="h-14 lg:h-20 w-24 object-contain mx-auto" />
          <img src='/src/assets/Sponsors/RAJEVENTS.png' alt="RAJEVENTS" className="h-12 lg:h-20 w-24 object-contain mx-auto" />
          <img src='/src/assets/Sponsors/NHCLUB.png' alt="NHCLUB" className="h-12 lg:h-20 w-24 object-contain mx-auto" />
          <img src='/src/assets/Sponsors/KANAHOTEL.jpg' alt="KANAHOTEL" className="h-12 lg:h-20 w-24 object-contain mx-auto" />
          <img src='/src/assets/Sponsors/SFFS.png' alt="KANAHOTEL" className="h-12 lg:h-20 w-24 object-contain mx-auto" />
        </div>
      </div>
    </main>
  );
};

export default Sponsors;
