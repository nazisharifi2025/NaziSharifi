"use client"
import { Github, Instagram, Linkedin } from 'lucide-react'
import { useState } from 'react'
import emailjs from '@emailjs/browser';
import Link from 'next/link';

function Git() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  function handleClick(e: any) {
    e.preventDefault();

    const public_key = "dBf6x-D_GzZLr3gSr";
    const template_id = "template_r756xnc";
    const service_id = "service_ve0cr4c";

    const content = {
      from_name: name,
      from_email: email,
      subject: subject,
      to_name: "Nazi Sharifi",
      message: message
    };

    emailjs
      .send(service_id, template_id, content, {
        publicKey: public_key,
      })
      .then(() => {
        alert("SUCCESS!");
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
      })
      .catch(() => {
        alert("FAILED...");
      });
  }

  return (
    <section id='contactme' className='lg:h-[120vh] h-fit w-full pt-32 text-gray-400 flex flex-col justify-center items-center font-body'>
      <h1 className='text-5xl font-bold bg-linear-to-l from-blue-300  to-blue-900 text-transparent bg-clip-text'>Get In <span className='font-serif'>Touch</span></h1>

      <div className='h-[90%] w-[90%] flex lg:flex-row flex-col my-12 items-center justify-between'>

        {/* Left - Info */}
         <div className='lg:w-1/2 w-full h-full flex flex-col gap-5 justify-center items-center'>
        <h1 className='font-bold text-3xl'>Contact Information</h1>
        <div className='h-fit w-full flex flex-col lg:gap-3 md:gap-7 gap-0 pt-4'>
            <div className='flex lg:gap-16 md:gap-16 gap-4  items-center lg:w-[60%] md:w-[60%] w-[95%] mx-auto h-fit p-2'>
               <i className="fas fa-envelope text-2xl p-3 bg-nav rounded-full"></i>
               <h2 className='text-xl'>Email <br /> Nazisharifi415@gmail.com</h2>
            </div>
            </div>
        <div className='h-fit w-full flex flex-col lg:gap-7 md:gap-7 gap-0 lg:py-2 py-6'>
            <div className='flex lg:gap-16 md:gap-16 gap-4  items-center lg:w-[60%] md:w-[60%] w-[95%] mx-auto h-fit p-2'>
               <i className="fas fa-phone text-2xl p-3 bg-nav rounded-full"></i>
               <h2 className='text-xl'>Phone Number <br /> +93-795-064-469</h2>
            </div>
            </div>
        <div className='h-fit w-full flex flex-col lg:gap-7 md:gap-7 gap-0 lg:py-2 py-6'>
            <div className='flex lg:gap-16 md:gap-16   items-center lg:w-[60%] md:w-[60%] w-[95%] mx-auto h-fit p-2'>
               <i className="fas fa-map-marker-alt text-2xl p-3 bg-nav rounded-full"></i>
               <h2 className='text-xl'>Location <br /> Ghazni Afghanistan</h2>
            </div>
           <div className='flex gap-5 items-center justify-center mt-12'>
               <button className=" p-3 text-white rounded-full border border-stone-400 bg-stone-950 hover:shadow-2xl shadow-fuchsia-400/50 hover:border-fuchsia-400/50"><Link href="https://github.com/nazisharifi2025" target="_blank"> <Github/> </Link></button>
               <button className=" p-3 text-white rounded-full border border-stone-400 bg-stone-950 hover:shadow-2xl shadow-fuchsia-400/50 hover:border-fuchsia-400/50"><Link href="https://www.linkedin.com/in/nazi-sharifi-102735368/" target="_blank"> <Linkedin/></Link> </button>
               <button className=" p-3 text-white rounded-full border border-stone-400 bg-stone-950 hover:shadow-2xl shadow-fuchsia-400/50 hover:border-fuchsia-400/50"><Link href="https://www.instagram.com/nazthe_coder?igsh=bWFzcGxoaXhhcXY0" target="_blank"> <Instagram/> </Link></button>
            </div>
        </div>
        </div>

        {/* Right - Form */}
        <div className='lg:w-1/2 w-full flex flex-col items-center'>
          <h1 className='text-2xl text-nav py-6'>Send A Message</h1>

          <form onSubmit={handleClick} className='w-full flex flex-col items-center gap-5'>

            <label className='flex flex-col gap-2 md:w-[70%] w-11/12'>
              Your Name
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className='outline-0 p-2 border text-nav rounded-md py-3'
                placeholder='Nazi'
              />
            </label>

            <label className='flex flex-col gap-2 md:w-[70%] w-11/12'>
              Your Email
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className='outline-0 p-2 border text-nav rounded-md py-3'
                placeholder='Nazisharifi415@gmail.com'
              />
            </label>

            <label className='flex flex-col gap-2 md:w-[70%] w-11/12'>
              Subject
              <input
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                type="text"
                placeholder="Subject"
                className='outline-0 p-2 border text-nav rounded-md py-3'
              />
            </label>

            <label className='flex flex-col gap-2 md:w-[70%] w-11/12'>
              Your Message
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder='Hi there, I am writing this to...'
                className='outline-0 p-2 border text-nav rounded-md py-3 resize-none h-36'
              />
            </label>

            <button className='px-6 w-[71%] py-2   hover:bg-stone-300 hover:-translate-y-1 transform-3d transition-all duration-300 bg-stone-400 text-black rounded-sm'>
              Send Message
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}

export default Git;
