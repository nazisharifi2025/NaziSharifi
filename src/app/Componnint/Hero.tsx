import { Github, Instagram, Linkedin } from "lucide-react"
import Link from "next/link";
function Hero() {
  return (
    <div className='h-screen w-full bg-cover bg-center bg-[url(/image.avif)]'>
        <div className='h-full w-full bg-black/70 flex flex-col justify-end items-center'>
        <div className='w-[60%] h-[80%] flex flex-col gap-4 mx-auto justify-center items-center  relative'>
            <div className="h-[60%] w-[70%] bg-linear-to-l from-blue-400/10 via-black/40 to-fuchsia-400/10 absolute top-[30%] rounded-full "></div>
            <span className='text-cyan-600 font-bold text-center text-xl'>Salam, I'm</span>
            <h1 className='text-8xl font-bold bg-linear-to-l from-fuchsia-200 via-fuchsia-700 text-transparent bg-clip-text to-blue-400'>Nazi Sharifi</h1>
            <h2 className='text-4xl text-stone-400 font-medium text-shadow-blue-400 '>Backend Developer & Frontend Developer</h2>
            <p className=' w-[80%] text-center text-xl text-stone-400'>I build modern, responsive websites that help brands grow and get noticed online. Passionate about collaborating with creative minds and exploring opportunities to learn and innovate.</p>
            <div className='flex gap-5 justify-center items-center mt-12'>
               <button className=" p-3 text-white rounded-full border border-stone-400 bg-stone-950 hover:shadow-2xl shadow-fuchsia-400/50 hover:border-fuchsia-400/50"><Link href="https://github.com/nazisharifi2025"> <Github/> </Link></button>
               <button className=" p-3 text-white rounded-full border border-stone-400 bg-stone-950 hover:shadow-2xl shadow-fuchsia-400/50 hover:border-fuchsia-400/50"><Link href="https://www.linkedin.com/in/nazi-sharifi-102735368/"> <Linkedin/></Link> </button>
               <button className=" p-3 text-white rounded-full border border-stone-400 bg-stone-950 hover:shadow-2xl shadow-fuchsia-400/50 hover:border-fuchsia-400/50"><Link href=""> <Instagram/> </Link></button>
            </div>
            
            <div className="h-12 w-6 rounded-full border border-white p-4 text-fuchsia-400/60 my-6 animate-bounce text-5xl font- flex justify-center items-center ">'</div>
        </div>
        </div>
        
    </div>
  )
}

export default Hero