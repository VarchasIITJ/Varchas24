// import Hero from "./Hero";
<<<<<<< HEAD
import About from "./About";
import Gallery from "./Gallery";
import Soch from "./Soch";
import Footer_1 from "../components/Footer_1";
import Footer from '../components/Footer'
=======
// // import Soch from "./Soch";
>>>>>>> 34996ad2feec605e3da5a77193391e2cc33d8d29
// import Disclaimer from "../components/disclaimer";
import CollegeModel from "../components/CollegeModel";
import ParticleSlider from "../components/particleSlider";
import About from "./About";
import Informatics from "../components/informatics";
import Gallery from "./Gallery";
import Footer from "../components/Footer";
import {motion} from "framer-motion"

const Home = () => {
    return (
        <main className="h-full w-screen ">
            <motion.div 
            initial = {{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 2}}
            className="h-screen flex">
                <div className="w-1/2">
                    <CollegeModel />
                </div>
                <div className="w-1/2 flex items-center justify-center h-full">
                    <ParticleSlider />
                </div>
            </motion.div>

<<<<<<< HEAD
            <Soch />
            </div>
            <div className="bg2">

            <About />
            </div>
            <Gallery />
            <Footer_1/>
=======
            <motion.div 
            initial = {{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 2}}
            className="bg2">
                <About />
            </motion.div>

            <motion.div
            initial = {{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 2}}>
                <Informatics/>
            </motion.div>
            
            <motion.div
            initial = {{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 2}}
            >
                <Gallery />
            </motion.div>
            
            <motion.div
            initial = {{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 2}}
            >
                <Footer/>
            </motion.div>
>>>>>>> 34996ad2feec605e3da5a77193391e2cc33d8d29
        </main>
    )
}

export default Home;