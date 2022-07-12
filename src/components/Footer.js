import React from 'react';


// import data
import {footer} from '../data'

const Footer = () => {
  // const {social, copyright} = footer;
  return (
    <footer className='bg-primary text-white'>
      <div className="container mx-auto">
        <div className='flex flex-col lg:flex-row justify-between border-b border-opacity-75 border-gray-700 pb-7 lg:pb-14 mb-14 ' >
          <a className='mb-6 lg:mb-0 mt-10' href="/">
          <h2 className='text-white text-xl lg:text-2xl font-semibold'>MebelShop</h2>
          </a>
          <div className='flex gap-x-4 lg:mt-10' >
            {footer.social.map((item, index) => {
              return (
                <div className='text-2xl w-12 h-12 bg-gray-700 hover:bg-accent rounded-full flex justify-center items-center transition' key={index}>
                  <a href={item.href}>{item.icon}</a>
                </div>
              )
            } )}
          </div>
        </div>

        {/* copyright text*/}
        <p className='text-center translate-y-[-24px]'>
          &copy; Tio Dwi Satrio 2022 - All rights reserved.
        </p>

      </div>
    </footer>
  )
};

export default Footer;
