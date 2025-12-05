import { Github, Instagram, Linkedin } from 'lucide-react'
import React, { useState } from 'react'

function Git() {
      const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [subject,setSubject] = useState("");
    const [Messege,setMessege] = useState("");
    function Handelclick(e:any){
        e.preventDefault();
        const publi_key = "dBf6x-D_GzZLr3gSr";
        const template_id = "template_r756xnc";
        const service_id = "service_ve0cr4c";
        const content= {
            from_name : name,
            from_email : email,
            subject : subject,
            to_name : "Nazi Sharifi",
            message: Messege
        };
    emailjs
      .send(service_id,template_id ,content, {
        publicKey: publi_key,
      })
   .then(() => {
    alert('SUCCESS!');
    setName("");
    setEmail("");
    setSubject("");
    setMessege("");
})
.catch((error) => {
     console.error(error); 
    alert('FAILED...');
});

    }
  return (
        <section id='Contuct' className='lg:h-screen h-fit w-full bg-black pt-32 text-stone-400 text-nav flex flex-col justify-center items-center font-body'>
        <h1 className='text-4xl lg:my-0 md:my-0 '>Get In <span className='font-serif text-stone-300'>Touch</span></h1>
    <div className='h-[90%] w-full  flex justify-between lg:flex-row flex-col my-12 items-center'>
        <div className='lg:w-1/2 w-full h-full flex flex-col justify-center items-center'>
        <h1 className='font-bold text-3xl'>Contact Information</h1>
        <div className='h-fit w-full flex flex-col lg:gap-7 md:gap-7 gap-0 '>
            <div className='flex lg:gap-16 md:gap-16 gap-4 items-center lg:w-[60%] md:w-[60%] w-[95%] mx-auto h-fit p-2'>
               <i className="fas fa-envelope text-2xl p-3 bg-nav rounded-full"></i>
               <h2 className='text-xl'>Email <br /> Nazisharifi415@gmail.com</h2>
            </div>
            </div>
        <div className='h-fit w-full flex flex-col lg:gap-7 md:gap-7 gap-0 py-6'>
            <div className='flex lg:gap-16 md:gap-16 gap-4 items-center lg:w-[60%] md:w-[60%] w-[95%] mx-auto h-fit p-2'>
               <i className="fas fa-phone text-2xl p-3 bg-nav rounded-full"></i>
               <h2 className='text-xl'>Phone Number <br /> +93-795-064-469</h2>
            </div>
            </div>
        <div className='h-fit w-full flex flex-col lg:gap-7 md:gap-7 gap-0 py-6'>
            <div className='flex lg:gap-16 md:gap-16  items-center lg:w-[60%] md:w-[60%] w-[95%] mx-auto h-fit p-2'>
               <i className="fas fa-map-marker-alt text-2xl p-3 bg-nav rounded-full"></i>
               <h2 className='text-xl'>Location <br /> Ghazni Afghanistan</h2>
            </div>
            <div className='flex space-x-14 text-nav justify-center items-center'>
               <a href="https://github.com/nazisharifi2025"><Github/></a> 
               <a href="https://www.linkedin.com/in/nazi-sharifi-102735368/"><Linkedin/></a> 
                <a href="https://www.instagram.com/nazisharifi14/"><Instagram/></a>
            </div>
        </div>
        </div>
          <div className='lg:w-1/2 w-full h-full flex flex-col items-center justify-center'>
    <h1 className='text-2xl text-nav py-6'>Send A Messege</h1>
    <form className='w-full flex justify-center items-center flex-col gap-5'>
        <label htmlFor="">Your Name</label>
        <input type="text" className='lg:w-[60%] w-[80%] outline-0 border text-nav rounded-md py-3' placeholder='Nazi' />
        <label htmlFor="">Your Email</label>
        <input type="text" className='lg:w-[60%] w-[80%] outline-0 border text-nav rounded-md py-3' placeholder='nazisharifi415@gmail.com' />
        <label htmlFor="">Your Message</label>
         <textarea  value={Messege} onChange={(e)=> setMessege(e.target.value)}  placeholder='Hi there , i am Writing this to..' className='lg:w-[60%] w-[80%] outline-0 border text-nav rounded-md py-3' />
        <button onClick={()=>Handelclick()} className='px-6 py-2 bg-stone-400 text-black rounded-sm w-fit'>Send Messege</button>
    </form>
    </div>
    </div>
  </section>
  )
}

export default Git