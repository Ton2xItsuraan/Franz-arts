import React, { useEffect, useState } from 'react'
import Logo from '../assets/Logo.png'
import Nav from './Nav'
import NavMobile from './NavMobile'
import Socials from './Socials'

const Header = () => {
    const [bg, setBg] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            return window.scrollY > 50 ? setBg(true) : setBg(false);
        })
    
        
    }, []);
  return (
    <header className={`${bg? 'bg-[#2E8BC0] h-20' : 'h-24'} flex items-center fixed top-0 w-full text-white z-10 transition-all duration-300`}>
      <div className='container mx-auto flex items-center justify-between'>
        {/* LOGO */}
        <a href="">
        <img src={Logo} alt="Logo" width="200" height="200"/>
        </a>
        {/* NAV */}
        <div className='hidden lg:block'>
            <Nav />
        </div>
        {/* SOCIALS */}
        <div className='hidden lg:block'>
            <Socials />
        </div>
        {/* NAVMOBILE */}
        <div className='lg:hidden'>
            <NavMobile />
        </div>
      </div>
    </header>
  )
}

export default Header
