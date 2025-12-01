
function AboutUs() {
  return (
    <div className="h-fit  w-full flex-col justify-center items-center p-5">
        <h1 className="text-5xl mx-auto text-center font-extrabold bg-linear-to-l from-blue-400 via-fuchsia-700 text-transparent bg-clip-text to-blue-400">About Me</h1>
        <div className="w-full grid grid-cols-2 mt-12 gap-3">
          <div className=" flex flex-col gap-5 ">
            <div className="w-full rounded-md border border-violet-500/50 p-4 flex flex-col gap-4">
              <h1 className="font-bold text-3xl text-white">Frontend Developer</h1>
            </div>
          </div>
        <div className=" flex flex-col gap-8 justify-center items-center border border-violet-500/50  mx-auto p-8 rounded-xl bg-black/50 shadow-xl shadow-fuchsia-400/10">
          <h1 className="text-4xl font-bold bg-linear-to-l from-blue-400 via-fuchsia-700 text-transparent bg-clip-text to-blue-400">Step into the World of Code</h1>
        <p className="text-center text-xl text-stone-500 w-[80%] mx-auto">
         The day I first entered the world of computers, my only goal was to understand its fundamentals—without knowing exactly where I was headed or which skill I should pursue. I just knew that technology was the future, and I wanted to be part of it.

I started with HTML and gradually became familiar with CSS and JavaScript. That was when I experienced a unique sense of creativity and power—realizing that with just a few lines of code, I could build a simple page or make a button respond. That moment became my true starting point—the moment my path shifted toward web development.

Since then, every project I’ve worked on has taught me how to think better, write cleaner code, and take user experience more seriously.

Today, I proudly consider myself a web developer—someone who doesn’t just write code but creates 
solutions, learns continuously, and strives to grow alongside the digital future.

            </p>
            </div>
            </div>
    </div>
  )
}

export default AboutUs