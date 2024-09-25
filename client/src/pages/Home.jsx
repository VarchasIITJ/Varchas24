// import Hero from "./Hero";
import About from "./About";
import Gallery from "./Gallery";
import Footer_1 from '../components/Footer_1'
// import Disclaimer from "../components/disclaimer";
import CollegeModel from "../components/CollegeModel";
import ParticleSlider from "../components/particleSlider";
import Informatics from "../components/informatics";
import {motion} from "framer-motion"
import { useAnimationControls,useInView } from "framer-motion";
import { useEffect,useRef, useState } from "react";
import logo from '../assets/logo.png';
const Home = () => {
    const ref1 = useRef();
    const [isSmall,setIsSmall] = useState(true);

    useEffect(()=>{
        const handleResize = () => {
            if(window.innerWidth<=768){
                setIsSmall(true);
            }else{
                setIsSmall(false);
            }
        };
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    },[]);

    const controls1 = useAnimationControls();
    const isInView1 = useInView(ref1);

    useEffect(()=>{
        if(isInView1){
            controls1.start({opacity:1,transition:{duration:2}});
        }
    },[isInView1,controls1]);

    const ref2 = useRef();
    const controls2 = useAnimationControls();
    const isInView2 = useInView(ref2);

    useEffect(()=>{
        if(isInView2){
            controls2.start({opacity:1,transition:{duration:2}});
        }
    },[isInView2,controls2]);

    const ref3 = useRef();
    const controls3 = useAnimationControls();
    const isInView3 = useInView(ref3);

    useEffect(()=>{
        if(isInView3){
            controls3.start({opacity:1,transition:{duration:2}});
        }
    },[isInView3,controls3]);

    return (
        <main className="min-h-screen w-screen bg-black flex flex-col scroll-smooth"> {/* Updated here */}
            <motion.div 
                initial = {{opacity: 0}}
                whileInView={{opacity: 1,transition:{duration:1}}}
                ref={ref1}
                className="h-fit flex flex-col lg:flex-row-reverse">
                <div className="w-full lg:w-1/2 h-1/2">
                    {!isSmall ? <ParticleSlider /> : <img src={logo} className="align-middle ml-11 mt-20 h-full w-[300px] md:w-full sm:w-full" />}
                </div>
                <div className="z-0 w-full lg:w-1/2 h-full md:h-1/3 sm:h-4">
                    <CollegeModel />
                </div>
            </motion.div>

            <motion.div 
                initial = {{opacity: 0}}
                whileInView={{opacity: 1,transition:{duration:1}}}
                ref={ref2}
            >
                <About />
            </motion.div>

            <motion.div
                initial = {{opacity: 0}}
                whileInView={{opacity: 1,transition:{duration:1}}}
                ref={ref3}
            >
                <Informatics />
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
                <Footer_1 />
            </motion.div>
        </main>
    )
}

export default Home;

