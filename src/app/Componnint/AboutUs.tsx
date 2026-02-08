import { Codesandbox, Database } from "lucide-react"

function AboutUs() {
  return (
    <section id="aboutme" className="h-fit w-full flex-col justify-center items-center p-5">
        <h1 className='text-5xl font-bold font-web bg-linear-to-l from-blue-300  to-blue-900 text-transparent bg-clip-text mx-auto text-center'>About Me</h1>
        <div className="w-full grid lg:grid-cols-2 grid-cols-1 mt-12 gap-3">
            <div className=" flex flex-col gap-8 justify-center  mx-auto lg:p-8 p-2 rounded-xl  ">
          <h1 className="md:text-4xl text-2xl font-bold  text-stone-300">Step into the World of Code</h1>
        <p className="md:text-xl text-sm text-stone-500  mx-auto">
          From the moment I entered the world of computers, my goal was simply to learn. Discovering HTML, CSS, and JavaScript changed everything—showing me how a few lines of code could turn ideas into reality. Each project since has sharpened my thinking, improved my code, and deepened my focus on user experience. Today, I’m a web developer who builds meaningful solutions and grows with the digital future.
            </p>
            </div>
          {/* div 1 */}
          <div className=" flex flex-col gap-5 ">
            <div className="w-full rounded-md border  p-4 shadow-[0_0_15px_0_rgba(0,0,0,0.3)] shadow-fuchsia-600/20 flex flex-col gap-4">
              <h1 className="font-bold text-2xl text-white flex items-center gap-2"><Codesandbox size={32}/> Frontend Developer</h1>
              <span className="text-sm text-stone-400">Built responsive, high-performance UIs with React and Next.js, focusing on speed and accessibility.Optimized frontend performance to deliver fast and seamless user experiences.

Turned every project into an opportunity to learn, grow, and create better solutions.</span>
<div className="flex flex-wrap gap-3">
  <button className="text-sm px-4 py-1.5 rounded-full border text-stone-200 border-stone-500">Tailwind css</button>
  <button className="text-sm px-4 py-1.5 rounded-full border text-stone-200 border-stone-500">Javaiscript</button>
  <button className="text-sm px-4 py-1.5 rounded-full border text-stone-200 border-stone-500">Typescript</button>
  <button className="text-sm px-4 py-1.5 rounded-full border text-stone-200 border-stone-500">React js</button>
  <button className="text-sm px-4 py-1.5 rounded-full border text-stone-200 border-stone-500">Next Js</button>
</div>
            </div>
            {/* div 1 */}
            <div className="w-full rounded-md border  p-4 shadow-[0_0_15px_0_rgba(0,0,0,0.3)] shadow-fuchsia-600/20 flex flex-col gap-4">
              <h1 className="font-bold text-2xl text-white flex items-center gap-2"><Database size={32}/> Backend Developer</h1>
              <span className="text-sm text-stone-400">Designed and implemented secure, efficient servers and APIs using Laravel and Node.js.
                Managed and optimized databases and server operations for fast, reliable performance.
                Every project has been an opportunity to improve application logic, enhance scalability, and deliver professional solutions.
</span>
<div className="flex space-x-3">
  <button className="text-sm px-4 py-1.5 rounded-full border text-stone-200 border-stone-500">PhP</button>
  <button className="text-sm px-4 py-1.5 rounded-full border text-stone-200 border-stone-500">Laravel</button>
  <button className="text-sm px-4 py-1.5 rounded-full border text-stone-200 border-stone-500">Node.Js</button>
  <button className="text-sm px-4 py-1.5 rounded-full border text-stone-200 border-stone-500">SQL</button>
</div>
            </div>
          </div>
      
            </div>
    </section>
  )
}

export default AboutUs