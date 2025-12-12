"use client"
import { Github, Instagram, Linkedin } from 'lucide-react'
import { useState } from 'react'
import emailjs from '@emailjs/browser';

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
    <section id='Contact' className='lg:h-[120vh] h-fit w-full pt-32 text-gray-400 flex flex-col justify-center items-center font-body'>
      <h1 className='text-4xl'>Get In <span className='font-serif'>Touch</span></h1>

      <div className='h-[90%] w-[90%] flex lg:flex-row flex-col my-12 items-center justify-between'>

        {/* Left - Info */}
        <div className='lg:w-1/2 w-full'>
          <h1 className='font-bold text-3xl'>Contact Information</h1>

          <div className='flex items-center gap-4 p-2'>
            <i className="fas fa-envelope text-2xl p-3 bg-nav rounded-full"></i>
            <h2 className='text-xl'>Email <br /> Nazisharifi415@gmail.com</h2>
          </div>

          <div className='flex items-center gap-4 p-2'>
            <i className="fas fa-phone text-2xl p-3 bg-nav rounded-full"></i>
            <h2 className='text-xl'>Phone <br /> +93-795-064-469</h2>
          </div>

          <div className='flex items-center gap-4 p-2'>
            <i className="fas fa-map-marker-alt text-2xl p-3 bg-nav rounded-full"></i>
            <h2 className='text-xl'>Location <br /> Ghazni Afghanistan</h2>
          </div>

          <div className='flex space-x-14 text-nav justify-center items-center py-4'>
            <a href="https://github.com/nazisharifi2025"><Github /></a>
            <a href="https://www.linkedin.com/in/nazi-sharifi-102735368/"><Linkedin /></a>
            <a href="https://www.instagram.com/nazisharifi14/"><Instagram /></a>
          </div>
        </div>

        {/* Right - Form */}
        <div className='lg:w-1/2 w-full flex flex-col items-center'>
          <h1 className='text-2xl text-nav py-6'>Send A Message</h1>

          <form onSubmit={handleClick} className='w-full flex flex-col items-center gap-5'>

            <label className='flex flex-col gap-2 w-[60%]'>
              Your Name
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className='outline-0 border text-nav rounded-md py-3'
                placeholder='Nazi'
              />
            </label>

            <label className='flex flex-col gap-2 w-[60%]'>
              Your Email
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className='outline-0 border text-nav rounded-md py-3'
                placeholder='Nazisharifi415@gmail.com'
              />
            </label>

            <label className='flex flex-col gap-2 w-[60%]'>
              Subject
              <input
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                type="text"
                placeholder="Subject"
                className='outline-0 border text-nav rounded-md py-3'
              />
            </label>

            <label className='flex flex-col gap-2 w-[60%]'>
              Your Message
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder='Hi there, I am writing this to...'
                className='outline-0 border text-nav rounded-md py-3'
              />
            </label>

            <button className='px-6 py-2 bg-stone-400 text-black rounded-sm'>
              Send Message
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}

export default Git;
