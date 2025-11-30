"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
function Navbar() {
    const Navbar =[
        {
            id: 1,
            Name: 'Home',
            href: '/'
        },
        {
            id: 2,
            Name: 'About',
            href: '/about'  
        },
        {
            id: 3,
            Name: 'Skills',
            href: '/Bloge'
        },
        {
            id: 4,  
            Name: 'Projects',
            href: '/product'
        },
        {
            id: 5,  
            Name: 'Blog',
            href: '/Blog'
        },
        {
            id: 4,  
            Name: 'Contact',
            href: '/Contact'
        },
    ]
    const PathName = usePathname();
  return (
    <div className='w-full h-15 py-7 px-12  fixed bg-black/10 flex items-center justify-between'>
        <h1 className=" font-bold text-3xl font-serif bg-linear-to-l from-blue-300  to-blue-900 text-transparent  bg-clip-text">Nazi Sharifi</h1>
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
        <button className='px-4 py-2 border-white text-white border rounded-xl font-bold'>Let's Taik</button>
    </div>
  )
}

export default Navbar