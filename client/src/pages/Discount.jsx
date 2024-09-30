import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function LampDemo() {
  return (
    <div className="relative w-screen">
      <LampContainer className="items-center justify-center">
        <motion.div
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-7 bg-gradient-to-br from-slate-300 to-white py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-2xl">
          <p className="py-4 text-4xl mb-4">Contingent Leader</p>
          <div className="text-xl w-[380px] sm:h-fit md:h-[16vh] text-center md:w-[900px] sm:w-[900px]">
          Win FREE ACCOMODATION at IIT Jodhpur and a JODHPUR CITY tour.{window.innerWidth > 768 ? <br /> : " "}
          Simply bring 20 registrations to Varchas'24 website along with{window.innerWidth > 768 ? <br /> : " "}
          20 accomodations to Varchas'24 Sports fest.
        </div>
        </motion.div>
      </LampContainer>
      <div className="flex justify-center align-middle w-full top-[600px] md:top-[400px] sm:top-[400px] absolute text-white bg-[#010616] p-4 text-left z-10  ">
        <div className="delayed-appear items-center w-[900px] text-xl">
        <ul >
                    <li className="mt-[15px] mb-4">
                      <b>Deliverables</b>: Contingent leaders get FREE Accommodation,
                      Food, Pronite passes and a Jodhpur City TOUR.
                    </li>
                    <li className="mt-4 mb-4">
                      
                      <b>Contingent Leader must</b>: register at least 20 students
                      along with accommodation
                    </li>
                    <li className="mt-4 mb-4">
                      
                      Contingent leader and the other registrations must be of
                      students(UG/PG)of a registered College/University.
                    </li>
                    <li className="mt-4 mb-4">
                      
                      In case any one person fails to provide legal documents
                      and a valid student id proof, the scheme stands null and
                      the Contingent leader will be fined an amount of
                      Rs.12,000
                    </li>
        </ul>
        <p className="text-4xl text-center mt-[50px] mb-[40px]">Bulk Discount</p>
        <ul>
                  <li className="mb-5">
                    
                    For contingent size of 40+, bulk discount of Rs.49 will be
                    provided for each accommodation. 
                    <p>
                    *Must have atleast 40
                    people opting accommodation
                    </p>
                  </li>
                  <li className="mb-5">
                    
                    For contingent size of 50+, bulk discount of Rs.149 will be
                    provided for each accommodation. 
                    <p>
                      *Must have atleast 50
                    people opting accommodation
                      </p>
                  </li>
                  <li className="mb-5">
                    
                    For contingent size of 80+, bulk discount of Rs.199 will be
                    provided for each accommodation. 
                    <p>

                    *Must have atleast 80
                    people opting accommodation
                    </p>
                  </li>
                  <li className="mb-5">
                    
                    To avail Bulk Discount, select the total number of
                    accomodations on the payment page and the Bulk Discount will
                    be auto-applied
                  </li>
                </ul>
        </div>
      </div>
    </div>
  );
}

export const LampContainer = ({
  children,
  className
}) => {
  return (
    <div
      className={cn(
        "relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-slate-950 w-full z-0",
        className
      )}>
      <div
        className="relative flex w-full flex-1 scale-y-125 items-center justify-center isolate z-0 ">
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto right-1/2 h-56 overflow-visible w-[30rem] bg-gradient-conic from-orange-400 via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]">
          <div
            className="absolute  w-[100%] left-0 bg-slate-950 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
          <div
            className="absolute  w-40 h-[100%] left-0 bg-slate-950  bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto left-1/2 h-56 w-[30rem] bg-gradient-conic from-transparent via-transparent to-orange-400 text-white [--conic-position:from_290deg_at_center_top]">
          <div
            className="absolute  w-40 h-[100%] right-0 bg-slate-950  bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
          <div
            className="absolute  w-[100%] right-0 bg-slate-950 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
        </motion.div>
        <div
          className="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-slate-950 blur-2xl"></div>
        <div
          className="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md"></div>
        <div
          className="absolute inset-auto z-50 h-36 w-[28rem] -translate-y-1/2 rounded-full bg-orange-400 opacity-50 blur-3xl"></div>
        <motion.div
          initial={{ width: "8rem" }}
          whileInView={{ width: "16rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-30 h-36 w-64 -translate-y-[6rem] rounded-full bg-orange-400 blur-2xl"></motion.div>
        <motion.div
          initial={{ width: "15rem" }}
          whileInView={{ width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-50 h-0.5 w-[30rem] -translate-y-[7rem] bg-orange-400 "></motion.div>

        <div
          className="absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem] bg-slate-950 "></div>
      </div>
      <div className="relative z-50 flex -translate-y-80 flex-col items-center px-5">
        {children}
      </div>
    </div>
  );
};