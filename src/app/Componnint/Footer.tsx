import { Github, Instagram, Linkedin } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <div className='h-[50vh] w-full  flex flex-col justify-center items-center text-stone-300/30 bg-gray-900/20 mt-12 gap-5'>
        <div className='w-full grid grid-cols-3 justify-between items-center px-12 '>
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
                <ul className='flex flex-col gap-3 text-xl'>
                    <Link href="">Home</Link>
                    <Link href="">About</Link>
                    <Link href="">Skills</Link>
                    <Link href="">Project</Link>
                    <Link href="">Blog</Link>
                    <Link href="">Contuct</Link>
                </ul>
            </div>
            {/* div 2 */}
             <div className=' w-full h-full flex flex-col justify-center items-center'>
        <h1 className='font-bold text-2xl'>Contact Information</h1>
        <div className='h-fit w-full flex flex-col lg:gap-7 md:gap-7 gap-0'>
            <div className='flex lg:gap-16 md:gap-16 gap-4 items-center  ml-16 h-fit p-2'>
               <i className="fas fa-envelope text-2xl p-3 bg-nav rounded-full"></i>
               <h2 className='text-xl'>Email <br /> Nazisharifi415@gmail.com</h2>
            </div>
            </div>
        <div className='h-fit w-full flex flex-col lg:gap-7 md:gap-7 gap-0'>
            <div className='flex lg:gap-16 md:gap-16 gap-4 items-center  mx-auto h-fit p-2'>
               <i className="fas fa-phone text-2xl p-3 bg-nav rounded-full"></i>
               <h2 className='text-xl'>Phone Number <br /> +93-795-064-469</h2>
            </div>
            </div>
        <div className='h-fit w-full flex flex-col lg:gap-7 md:gap-7 gap-0'>
            <div className='flex lg:gap-16 md:gap-16  items-center  mx-auto h-fit p-2'>
               <i className="fas fa-map-marker-alt text-2xl p-3 bg-nav rounded-full"></i>
               <h2 className='text-xl'>Location <br /> Ghazni Afghanistan</h2>
            </div>
        </div>
        </div>
        </div>
    </div>
  )
}

export default Footer