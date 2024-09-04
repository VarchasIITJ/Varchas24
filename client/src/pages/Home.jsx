import CollegeModel from "../components/CollegeModel";
import ParticleSlider from "../components/particleSlider";
import About from "./About";
import Informatics from "../components/informatics";
import Gallery from "./Gallery";
import Footer_1 from "../components/Footer_1";
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

            <motion.div 
            initial = {{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 2}}
            >
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
                <Footer_1/>
            </motion.div>
        </main>
    )
}

export default Home;