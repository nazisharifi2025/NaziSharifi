import { Github, Instagram, Linkedin } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <div className='h-[55vh] w-full  flex flex-col justify-center  text-stone-300/30 bg-gray-900/20 mt-12 gap-5'>
        <div className='w-[95%] mx-auto grid grid-cols-3 justify-between items-center px-12 border-b pb-5 '>
            <div className='flex flex-col '>
                <h1 className=" font-bold text-3xl font-serif bg-linear-to-l from-blue-300  to-blue-900 text-transparent  bg-clip-text">Nazi</h1>
                <p className=''>I build modern, responsive websites that help brands grow and get noticed online. Passionate about collaborating with creative minds and exploring opportunities to learn and innovate.</p>
                 <div className='flex gap-5 items-center mt-12'>
               <button className=" p-3 text-white rounded-full border border-stone-400 bg-stone-950 hover:shadow-2xl shadow-fuchsia-400/50 hover:border-fuchsia-400/50"><Link href="https://github.com/nazisharifi2025" target="_blank"> <Github/> </Link></button>
               <button className=" p-3 text-white rounded-full border border-stone-400 bg-stone-950 hover:shadow-2xl shadow-fuchsia-400/50 hover:border-fuchsia-400/50"><Link href="https://www.linkedin.com/in/nazi-sharifi-102735368/" target="_blank"> <Linkedin/></Link> </button>
               <button className=" p-3 text-white rounded-full border border-stone-400 bg-stone-950 hover:shadow-2xl shadow-fuchsia-400/50 hover:border-fuchsia-400/50"><Link href="https://www.instagram.com/nazthe_coder?igsh=bWFzcGxoaXhhcXY0" target="_blank"> <Instagram/> </Link></button>
            </div>
            </div>
            {/* one div endded */}
            <div className='flex flex-col gap-2 items-center justify-center'>
                <h1 className='text-2xl'>Quick Links</h1>
                <ul className='flex flex-col gap-3 text-'>
                    <Link href="#" className='hover:text-fuchsia-300'>Home</Link>
                    <Link href="#" className='hover:text-fuchsia-300'>About</Link>
                    <Link href="#" className='hover:text-fuchsia-300'>Skills</Link>
                    <Link href="#" className='hover:text-fuchsia-300'>Project</Link>
                    <Link href="#" className='hover:text-fuchsia-300'>Blog</Link>
                    <Link href="#" className='hover:text-fuchsia-300'>Contuct</Link>
                </ul>
            </div>
            {/* div 2 */}
             <div className=' w-full h-full flex flex-col justify-center '>
        <h1 className='font-bold text-xl mx-4'>Contact Information</h1>
        <div className='h-fit w-full flex flex-col items-start group lg:gap-7 md:gap-7 gap-0'>
            <div className='flex lg:gap-5 md:gap-16 gap-4 items-center h-fit p-2'>
               <i className="fas fa-envelope text-2xl  group-hover:text-fuchsia-300 p-3 bg-nav rounded-full"></i>
               <h2 className='group-hover:text-fuchsia-300'>Email <br /> Nazisharifi415@gmail.com</h2>
            </div>
            </div>
        <div className='h-fit w-full flex flex-col lg:gap-7 md:gap-7 group gap-0'>
            <div className='flex lg:gap-5 md:gap-16 gap-4 items-center   h-fit p-2'>
               <i className="fas fa-phone text-2xl p-3 bg-nav group-hover:text-fuchsia-300 rounded-full"></i>
               <h2 className='group-hover:text-fuchsia-300'>Phone Number <br /> +93-795-064-469</h2>
            </div>
            </div>
        <div className='h-fit w-full flex flex-col lg:gap-7 md:gap-7 group gap-0'>
            <div className='flex lg:gap-5 md:gap-16  items-center h-fit p-2'>
               <i className="fas fa-map-marker-alt group-hover:text-fuchsia-300 text-2xl p-3 bg-nav rounded-full"></i>
               <h2 className='group-hover:text-fuchsia-300'>Location <br /> Ghazni Afghanistan</h2>
            </div>
        </div>
        </div>
        </div>
        <h1 className='text-md text-stone-400  mx-12'>© 2025 Nazi Web Developer. Made with ❤️ and passion.</h1>
    </div>
  )
}

export default Footer