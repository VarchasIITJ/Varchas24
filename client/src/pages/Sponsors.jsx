import { CB, OIL, cosco, mera, redbull, sbi, yonex } from "../assets";

const Sponsors = () => {
  return (
    <section className="py-base container relative w-full h-fit sm:h-screen mx-auto sm:px-16 px-6 sm:py-16 py-10 max-w-7xl justify-center items-center font-nova_square">
      {/* <Comingsoon /> */}
      <div className=" text-emerald-400 text-center uppercase my-12 he">
        Ticketing Partner
        <span className="w-3/4 mx-auto sm:w-full flex items-center justify-center">
          <span className="sr-only">Ticketing Partner</span>
          <div aria-hidden="true " className="bg-white">
            <img src={mera} />
          </div>
        </span>
      </div>
      <div className=" text-emerald-400 text-center uppercase my-12 he">
        Past Sponsors
      </div>
      <div className="grid sm:grid-cols-3 gap-8 grid-cols-1">
        <span className="w-3/4 mx-auto sm:w-full flex items-center justify-center">
          <span className="sr-only">Canara Bank</span>
          <div aria-hidden="true " className="bg-white">
            <img src={OIL} />
          </div>
        </span>
        <span className="w-3/4 mx-auto sm:w-full flex items-center justify-center">
          <span className="sr-only">Canara Bank</span>
          <div aria-hidden="true">
            <img src={CB} />
          </div>
        </span>
        <span className="w-3/4 mx-auto sm:w-full flex items-center justify-center">
          <span className="sr-only">Canara Bank</span>
          <div aria-hidden="true">
            <img src={redbull} />
          </div>
        </span>
        <span className="w-3/4 mx-auto sm:w-full flex items-center justify-center">
          <span className="sr-only">Canara Bank</span>
          <div aria-hidden="true">
            <img src={yonex} />
          </div>
        </span>
        <span className="w-3/4 mx-auto sm:w-full flex items-center justify-center">
          <span className="sr-only">Canara Bank</span>
          <div aria-hidden="true">
            <img src={sbi} />
          </div>
        </span>
        <span className="w-3/4 mx-auto sm:w-full flex items-center justify-center">
          <span className="sr-only">Canara Bank</span>
          <div aria-hidden="true">
            <img src={cosco} />
          </div>
        </span>
      </div>
    </section>
  );
};

export default Sponsors;
