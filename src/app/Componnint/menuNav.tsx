import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'

function Menunav() {
     const Navbar =[
        {
            id: 1,
            Name: 'Home',
            href: '/'
        },
        {
            id: 2,
            Name: 'About',
            href: '#aboutme'  
        },
        {
            id: 3,
            Name: 'Skills',
            href: '#scill'
        },
        {
            id: 4,  
            Name: 'Projects',
            href: '#project'
        },
        {
            id: 5,  
            Name: 'Blog',
            href: '/blogs'
        },
        {
            id: 6,  
            Name: 'Contact',
            href: '#contactme'
        },
    ]
    const PathName = usePathname();
  return (
    <div>
         <ul className='flex gap-5 text-xl text-stone-400'>
          {Navbar.map((nav)=>{
            const isActive = PathName === nav.href || (PathName.startsWith('nav.href') && nav.href !== '/');
            return(
          <li key={nav.id} className='hover:border-b-2 border-fuchsia-400 hover:text-white transition-all duration-500 '>
            <Link className={isActive? "text-fuchsia-400 , font-bold" : ""} href={nav.href}>{nav.Name}</Link>
          </li>
            )
              })}
          </ul>
        <button className='px-4 py-2 border-white text-white border rounded-xl font-bold'><Link href='#contactme'>Let's Taik</Link></button>
    </div>
  )
}

export default Menunav