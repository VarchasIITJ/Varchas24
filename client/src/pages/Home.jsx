// import Hero from "./Hero";
import About from "./About";
import Gallery from "./Gallery";
// import Soch from "./Soch";
import Footer from "../components/Footer";
// import Disclaimer from "../components/disclaimer";
import CollegeModel from "../components/CollegeModel";
import ParticleSlider from "../components/particleSlider";
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
            className="bg2">
                <About />
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
        </main>
    )
}

export default Home;