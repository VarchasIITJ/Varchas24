import { useState } from "react";
const Discount = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="h-screen flex justify-center sm:justify-evenly items-center bg-black flex-col discount font-nova_square">
      <div className="text-white flex flex-col gap-3 sm:gap-6  sm:h-[75%]">
        <div className="uppercase flex justify-center text-[1.5rem] sm:text-[2.5rem]">
          {" "}
          contingent leader
        </div>
        <div className="flex  sm:px-4 sm:m-4 justify-evenly sm:flex-row flex-col sm:h-full">
          <div className="flex sm:flex-col gap-4 justify-evenly sm:justify-normal p-2 sm:p-14 cont">
            <a
              className=" text-center before:text-[1rem] cursor-pointer"
              onClick={() => {
                setToggle(false);
              }}
            >
              Contingent Leader
            </a>
            <a
              className="text-center text-[1rem] cursor-pointer"
              onClick={() => {
                setToggle(true);
              }}
            >
              Bulk Discount
            </a>
          </div>
          <div className="items-center justify-center max-w-[80%] mx-auto  sm:w-[60%] sm:p-1 card-grad p-2 mt-4 ">
            {!toggle ? (
              <div className="flex flex-col items-center  justify-center">
                <div className="p-2 text-[0.9rem] sm:text-[1.5rem]">
                  Win FREE ACCOMODATION at IIT Jodhpur and a JODHPUR CITY tour.
                  Simply bring 20 registrations to Varcahs'23 website along with
                  20 accomodations to Varchs'23 Sports fest.
                </div>
                <div className="">
                  <ul className="list-disc text-left px-5 flex flex-col gap-2 sm:gap-4 text-[0.8rem] sm:text-[1.1rem]">
                    <li>
                      {" "}
                      Deliverables: Contingent leaders get FREE Accommodation,
                      Food, Pronite passes and a Jodhpur City TOUR.{" "}
                    </li>
                    <li>
                      {" "}
                      Contingent Leader must: regsiter at least 20 students
                      along with accommodation.{" "}
                    </li>
                    <li>
                      {" "}
                      Contingent leader and the other registrations must be of
                      students(UG/PG)of a registered College/University.{" "}
                    </li>
                    <li>
                      {" "}
                      In case any one person fails to provide legal documents
                      and a valid student id proof, the scheme stands null and
                      the Contingent leader will be fined an amount of
                      Rs.12,000.{" "}
                    </li>
                  </ul>
                </div>
              </div>
            ) : (
              <div className="">
                <ul className="list-disc text-left px-5 flex flex-col gap-2 sm:gap-4 text-[0.8rem] sm:text-[1.1rem]">
                  <li>
                    {" "}
                    For contingent size of 40+, bulk discount of Rs.49 will be
                    provided for each accommodation. 
                    <p className="inline italic">
                    *Must have atleast 40
                    people opting accommodation{" "}
                    </p>
                  </li>
                  <li>
                    {" "}
                    For contingent size of 50+, bulk discount of Rs.149 will be
                    provided for each accommodation. 
                    <p className="inline italic">
                      *Must have atleast 50
                    people opting accommodation{" "}
                      </p>
                  </li>
                  <li>
                    {" "}
                    For contingent size of 80+, bulk discount of Rs.199 will be
                    provided for each accommodation. 
                    <p className="inline italic">

                    *Must have atleast 80
                    people opting accommodation{" "}
                    </p>
                  </li>
                  <li>
                    {" "}
                    To avail Bulk Discount, select the total number of
                    accomodations on the payment page and the Bulk Discount will
                    be auto-applied{" "}
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discount;
