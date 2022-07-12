import React from 'react';

// import data
import {features} from '../data'

const Features = () => {
  const {title, subtitle, image, items} = features;


  return (
    <section className='section'>
      <div className="container mx-auto">
        <div className='flex flex-col lg:flex-row lg: gap-[100px]'>
          {/* image */}
          <div className='flex-1 order-1 lg:-order-1 mt-[-40px] lg:mt-0'>
            <img src={image.type} alt="image_type" />
          </div>

          {/* text */}
          <div className='flex-1 flex-col justify-end'>
            <h2 className='title'>{title}</h2>
            <p className='subtitle's>{subtitle}</p>

            {/* items */}
            <div>
              {items.map((item, index) => {
                  const { title, subtitle, icon, } = item;
                  return (
                    <div className='flex mb-6 lg:last:mb-0'>
                      <div className='text-2xl mr-4 lg:text-3xl'>{icon}</div>
                      <div>
                        <h4 className='text-base lg:text-xl font-semibold mb-3 '>{title}</h4>
                        <p>{subtitle}</p>
                      </div>
                    </div>
                  )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
};

export default Features;
