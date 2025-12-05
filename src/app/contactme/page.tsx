import { Github, Instagram, Linkedin } from 'lucide-react'
import React from 'react'
import Navbar from '../Componnint/Navbar'
import Git from '../Componnint/Git'
import Footer from '../Componnint/Footer'

function page() {
  return (
    <div className='h-fit bg-black w-full'>
        <Navbar />
        <Git />
        <Footer />
    </div>
  )
}

export default page