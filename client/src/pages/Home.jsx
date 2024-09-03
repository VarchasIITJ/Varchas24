// import Hero from "./Hero";
// import Soch from "./Soch";
// import Disclaimer from "../components/disclaimer";
import CollegeModel from "../components/CollegeModel";
import ParticleSlider from "../components/particleSlider";
import About from "./About";
import Informatics from "../components/informatics";
import Gallery from "./Gallery";
import Footer from "../components/Footer";

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
            <About />
            <Informatics />
            {/* <Gallery /> */}
            <Footer />
        </main>
    )
}

export default Home;