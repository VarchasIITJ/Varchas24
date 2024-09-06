import { CB, OIL, cosco, mera, redbull, sbi, yonex } from "../assets";

const Sponsors = () => {
  return (
    <main className="w-full h-screen flex flex-col lg:flex-row">
      {/* Gradient Sidebar */}
      <div className="h-full w-full lg:w-1/4 flex flex-col bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 p-6">
        <div className="flex flex-col justify-center items-center h-full">
          <h3 className="text-black text-3xl lg:text-5xl font-bold mb-8 lg:mb-16 text-center font-roboto">Sponsors</h3>
          <p className="text-black text-sm lg:text-base text-center font-roboto">
            Over the past years Varchas has had the privilege to have hosted a number of sponsors which provided a very entertaining experience to our visitors as well as the brand. The crowd engagement, media exposure, sampling and brand building opportunities offered at Varchas are unparalleled.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="h-full w-full lg:w-3/4 flex flex-col items-center justify-start lg:justify-evenly bg-black p-4">
        {/* Ticketing Partner */}
        <h3 className="text-gray-100 text-3xl lg:text-4xl mb-4">Ticketing Partner</h3>
        <div className="flex flex-row justify-center items-center mb-8">
          <img
            src={yonex}
            alt="yonex"
            className="h-10 lg:h-12 w-auto object-contain"
          />
        </div>

        {/* Past Sponsors */}
        <h3 className="text-gray-100 text-3xl lg:text-4xl mb-4">Past Sponsors</h3>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-12 w-full">
          <img src={CB} alt="CB" className="h-12 lg:h-16 w-auto object-contain mx-auto" />
          <img src={OIL} alt="OIL" className="h-12 lg:h-16 w-auto object-contain mx-auto" />
          <img src={cosco} alt="cosco" className="h-12 lg:h-16 w-auto object-contain mx-auto" />
          <img src={mera} alt="mera" className="h-12 lg:h-16 w-auto object-contain mx-auto" />
          <img src={redbull} alt="redbull" className="h-12 lg:h-16 w-auto object-contain mx-auto" />
          <img src={sbi} alt="sbi" className="h-12 lg:h-16 w-auto object-contain mx-auto" />
        </div>
      </div>
    </main>
  );
};

export default Sponsors;
