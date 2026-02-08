import { Github, Instagram, Linkedin } from "lucide-react"
import Link from "next/link";
import Image from "next/image";
function Hero() {
  return (
    <div className='h-screen w-full bg-cover bg-center bg-[url(/image.avif)]'>
        <div className='h-full w-full bg-gray-950/80 flex lg:flex-row flex-col md:p-12 p-6 justify-end items-center '>
        <div className='lg:w-[60%] md:mt-0 mt-10 w-full  lg:h-[80%] h-[90%] flex flex-col md:gap-4 gap-2 mx-auto justify-center lg:items-start items-center  relative'>
            <div className="h-[40%] w-[70%] bg-linear-to-l from-blue-400/10 via-black/40 to-fuchsia-400/10 absolute top-[40%] rounded-full "></div>
            <span className='text-cyan-600 font-bold  text-xl'>Salam, I'm</span>
            <h1 className='lg:text-8xl font-bold md:text-6xl text-3xl z-40 bg-linear-to-l from-[#042862] via-fuchsia-400 via-25% text-transparent bg-clip-text to-[#042862]'>Nazi Sharifi</h1>
            <h2 className='md:text-4xl text-2xl text-stone-400 font-bold md:font-medium text-shadow-blue-400 lg:text-start text-center '>Backend Developer & Frontend Developer</h2>
            <p className=' md:w-[80%] w-full lg:text-start text-center  text-xl text-stone-400'>I build modern, responsive websites that help brands grow and get noticed online. Passionate about collaborating with creative minds and exploring opportunities to learn and innovate.</p>
            <div className='flex gap-5 items-center mt-12'>
               <button className=" p-3 text-white rounded-full border border-stone-400 bg-stone-950 hover:shadow-2xl shadow-fuchsia-400/50 hover:border-fuchsia-400/50"><Link href="https://github.com/nazisharifi2025" target="_blank"> <Github/> </Link></button>
               <button className=" p-3 text-white rounded-full border border-stone-400 bg-stone-950 hover:shadow-2xl shadow-fuchsia-400/50 hover:border-fuchsia-400/50"><Link href="https://www.linkedin.com/in/nazi-sharifi-102735368/" target="_blank"> <Linkedin/></Link> </button>
               <button className=" p-3 text-white rounded-full border border-stone-400 bg-stone-950 hover:shadow-2xl shadow-fuchsia-400/50 hover:border-fuchsia-400/50"><Link href="https://www.instagram.com/nazthe_coder?igsh=bWFzcGxoaXhhcXY0" target="_blank"> <Instagram/> </Link></button>
            </div>
        </div>
        {/* div text endded */}
        <div className="md:w-[40%] w-full md:h-[80%] h-[95%] flex flex-col justify-center items-end md:items-center">
            <div className="md:h-82 md:w-82 h-64 w-64 rounded-full border-8 border-stone-400 relative shadow-xl shadow-gray-400/20">
              <Image src="/1769718988117.jpg" alt="me1.png" className="h-full w-full rounded-full" height={800} width={800}  />
               <div className="md:h-52 md:w-52 h-44 w-44 rounded-full border-8  border-stone-400 absolute -bottom-12 shadow-xl shadow-gray-400/20 -left-26">
               <Image src="/C.webp" alt="me1.png" className="h-full w-full rounded-full" height={800} width={800}  />
               </div>
            </div>
           
        </div>
         <div className="h-12 w-6 rounded-full border border-white p-4 text-fuchsia-400/60 my-6 animate-bounce text-5xl font- absolute bottom-0 right-[50%] flex justify-center items-center "><Link href="#aboutme">'</Link></div>
        </div>
        
    </div>
  )
}

export default Hero