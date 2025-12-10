import AboutUs from "./Componnint/AboutUs";
import Footer from "./Componnint/Footer";
import Hero from "./Componnint/Hero";
import Mysceel from "./Componnint/Mysceel";
import Navbar from "./Componnint/Navbar";
import Project from "./Componnint/Project";
export default function Home() {
  return (
   <div className="bg-gray-950  w-full">
    <Navbar />
    <Hero />
    <AboutUs />
    <Mysceel />
    <Project />
    <Footer/>
   </div>
  );
}
