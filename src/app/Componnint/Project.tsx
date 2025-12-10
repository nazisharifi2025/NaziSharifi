import { ArrowRight, ChevronRight, Github, Linkedin } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

function Project() {
    const project = [
        {
            id: 1,
            img: "/project4.png",
            name: "Flowtrest",
            dis: "A modern, interactive web app to explore, organize, and share your favorite flowers with stunning visuals and smooth user experience.",
        },
        {
            id: 2,
            img: "/project2.png",
            name: "Conistraction Company",
            dis: "A modern, interactive web app to explore, organize, and share your favorite flowers with stunning visuals and smooth user experience.",
        },
        {
            id: 3,
            img: "/project1.png",
            name: "Dentall Clinic",
            dis: "A modern, interactive web app to explore, organize, and share your favorite flowers with stunning visuals and smooth user experience.",
        },
              {
            id: 4,
            img: "/project3.png",
            name: "Charety",
            dis: "A modern, interactive web app to explore, organize, and share your favorite flowers with stunning visuals and smooth user experience.",
        },
    ]
  return (
    <section id='project' className='flex flex-col justify-center items-center gap-12'>
        <h1 className='text-5xl font-bold font-web bg-linear-to-r  from-white/30 via-blue-400 to-fuchsia-400/40 text-transparent bg-clip-text'>Featured Projects</h1>
        <div className='w-[90%] mx-auto  px-3 h-fit grid grid-cols-2 gap-2'>
            {project.map((Pro)=>(
            <div key={Pro.id} className='flex-col p-b12 rounded-xl border border-stone-400/20 hover:shadow-[0_0_15px_0_rgba(0,0,0,0.3)] transition-all duration-500 shadow-inner shadow-fuchsia-300/20 hover:border-fuchsia-400/60 group'>
                <div className='w-full h-[300px]  rounded-xl rounded-b-none relative overflow-hidden '>
                    <img src={Pro.img} className='h-full w-full rounded-xl group-hover:scale-120 transition-all duration-500 rounded-b-none' alt="" />
                    <div className=' gap-3 absolute top-4 right-4 hidden group-hover:flex'>
                       <Link href='https://github.com/nazisharifi2025'> <Github  className=' text-white bg-stone-300/40  rounded-md border border-gray-300 p-2' size={35}/></Link>
                       <Link href='https://www.linkedin.com/in/nazi-sharifi-102735368/'> <Linkedin className=' text-white bg-stone-300/40 rounded-md border border-gray-300 p-2' size={35} /></Link>
                    </div>
                </div>
                <div className='p-5 flex flex-col gap-4  '>
                    <h1 className='font-bold text-3xl text-stone-400 group-hover:text-fuchsia-400 transition-all duration-300'>{Pro.name}</h1>
                    <p className='text-xl text-stone-400'>{Pro.dis}</p>
                    <div className='flex space-x-3 px-4 '>
                        <button className='rounded-full px-4 py-1.5 border border-stone-400 bg-stone-600/20 text-stone-300 '>React Js</button>
                        <button className='rounded-full px-4 py-1.5 border border-stone-400 bg-stone-600/20 text-stone-300 '>Tailwind Css</button>
                        <button className='rounded-full px-4 py-1.5 border border-stone-400 bg-stone-600/20 text-stone-300 '>API</button>
                    </div>
                </div>
            </div>
            ))}
        </div>
          <Link className='px-4 py-2 border border-stone-400 space-x-2 shadow-fuchsia-300/20 hover:border-fuchsia-400/20 hover:shadow-inner text-stone-300 text-xl flex items-center justify-center' href="https://github.com/nazisharifi2025" target="_blank"> View All Project <ArrowRight /> </Link> 
    </section>
  )
}

export default Project