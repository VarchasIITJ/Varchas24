// import Hero from "./Hero";
import About from "./About";
import Gallery from "./Gallery";
import Soch from "./Soch";
import Footer from "../components/Footer";
// import Disclaimer from "../components/disclaimer";
import CollegeModel from "../components/CollegeModel";

const Home = () => {
    return (
        <main className="h-full w-screen">
            {/* <Disclaimer /> */}
            <CollegeModel/>
            <div className="bg1">

            <Soch />
            </div>
            <div className="bg2">

            <About />
            </div>
            <Gallery />
            <Footer />
        </main>
    )
}

export default Home;