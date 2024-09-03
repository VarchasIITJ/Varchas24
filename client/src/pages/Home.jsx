// import Hero from "./Hero";
import About from "./About";
import Gallery from "./Gallery";
import Soch from "./Soch";
import Footer from "../components/Footer";
// import Disclaimer from "../components/disclaimer";
import CollegeModel from "../components/CollegeModel";
import ParticleSlider from "../components/particleSlider";

const Home = () => {
    return (
        <main className="h-full w-screen bg-black">
            <div className="h-screen flex">
                <div className="w-1/2">
                    <CollegeModel />
                </div>
                <div className="w-1/2 flex items-center justify-center h-full">
                    <ParticleSlider />
                </div>
            </div>
            {/* <div className="bg1">
            <Soch />
            </div> */}
            <div className="bg2">
            <About />
            </div>
            <Gallery />
            <Footer />
        </main>
    )
}

export default Home;