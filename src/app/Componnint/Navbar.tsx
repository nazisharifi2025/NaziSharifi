"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Menunav from "./menuNav";
function Navbar() {
   
  return (
    <div className="w-full flex justify-center fixed  top-3 z-50 items-center">
    <div className='w-[60%] border border-stone-400 mx-auto h-15 py-7 px-3 rounded-md   bg-stone-400/20 flex items-center justify-between'>
        <h1 className=" font-bold text-3xl font-serif bg-linear-to-l from-blue-300  to-blue-900 text-transparent  bg-clip-text">Nazi</h1>
       {/* menu */}
       <Menunav />
    </div>
    </div>
  )
}

export default Navbar