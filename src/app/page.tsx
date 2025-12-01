import AboutUs from "./Componnint/AboutUs";
import Hero from "./Componnint/Hero";
import Navbar from "./Componnint/Navbar";
export default function Home() {
  return (
   <div className="bg-black  w-full">
    <Navbar />
    <Hero />
    <AboutUs />
   </div>
  );
}
