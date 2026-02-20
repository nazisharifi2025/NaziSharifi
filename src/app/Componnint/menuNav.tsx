import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { EllipsisVertical, MenuIcon } from 'lucide-react';
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
    <div className='flex justify-end gap-3'>
        <nav className='hidden lg:flex   gap-1'>
         <ul className='flex gap-5 items-center text-xl text-stone-400'>
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
        </nav>
        <nav className='lg:hidden'>
            <Sheet >
                <SheetTrigger className='flex items-center space-x-2'>
                    <button className='px-4 py-2 border-white text-white border hidden md:flex rounded-xl font-bold'><Link href='#contactme'>Let's Taik</Link></button>
                    <MenuIcon className='text-white' size={32} />
                </SheetTrigger>
                <SheetContent className='p-4'>
                    <SheetTitle>Menu</SheetTitle>
            <ul className='flex flex-col gap-5 p-4 text-xl text-stone-400'>
          {Navbar.map((nav)=>{
            const isActive = PathName === nav.href || (PathName.startsWith('nav.href') && nav.href !== '/');
            return(
          <li key={nav.id} className='hover:border-b-2 border-fuchsia-400 hover:text-white transition-all duration-500 '>
            <Link className={isActive? "text-fuchsia-400 , font-bold" : ""} href={nav.href}>{nav.Name}</Link>
          </li>
            )
              })}
          </ul>
          <button className='px-4 py-2 border-gray-600 w-fit text-gray-600 border rounded-xl font-bold'><Link href='#contactme'>Let's Taik</Link></button>
        <SheetDescription></SheetDescription>
                </SheetContent>
            </Sheet>
        </nav>
    </div>
  )
}

export default Menunav