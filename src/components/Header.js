import React, {useState, useEffect} from 'react';


// import icons
import {CgMenuRight, CgClose} from 'react-icons/cg'

// import data
import { navigation} from '../data'

// import components
import NavMobile from './NavMobile'




const Header = () => {
  const [bg, setBg] = useState(false)
  const [mobileNav, setMobileNav] = useState(false)

  // useEffect
useEffect(() => {
  window.addEventListener('scroll', () => {
    window.scrollY > 100 ? setBg(true) : setBg(false);
  })
})
  

  return (
    <header className={`${bg ? 'bg-primary py-4 lg:py-6 ' : 'bg-none'} fixed left-0 w-full py-8 z-10 transition-all duration-200`}>
      <div className='container mx-auto'>
        <div className='flex justify-between items-center'>
          {/* logo */}
          <a href="/">
            <h2 className='text-white text-xl lg:text-2xl font-semibold'>MebelShop</h2>
          </a>

          {/* menu icons */}
          <div onClick={() => setMobileNav(!mobileNav)} className='text-2xl text-white md:hidden lg:text-3xl cursor-pointer'>
            {mobileNav ? <CgClose /> : <CgMenuRight />}
          </div>

          {/* nav */}
          <nav className='hidden md:flex'>
            <ul className='md: flex md:gap-x-12'>
              {navigation.map((item, index) => {
                return (
                  <li key={index}>
                    <a className='capitalize text-white hover:border-b transition-all' href={item.href}>{item.name}</a>
                  </li>
                )
              })}
            </ul>
          </nav>
          {/* nav mobile */}
          <div className={`${mobileNav ? 'left-0' : '-left-full'} md:hidden fixed bottom-0 w-full max-w-xs h-screen transition-all`}>
            <NavMobile />
          </div>
        </div>
      </div>
    </header>
  )
};

export default Header;
