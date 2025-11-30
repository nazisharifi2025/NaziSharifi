import Hero from "./Componnint/Hero";
import Navbar from "./Componnint/Navbar";
export default function Home() {
  return (
   <div className="bg-black h-screen w-full">
    <Navbar />
    <Hero />
   </div>
  );
}
