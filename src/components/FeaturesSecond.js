import React from 'react';

// import data
import {features } from '../data'


const FeaturesSecond = () => {
  const {title, subtitle, image } = features.feature2;
  return (
    <section className='section'>
    <div className="container mx-auto">
      <div className='flex flex-col lg:flex-row lg: gap-[100px] items-center'>

         {/* text */}
         <div className='flex-1 flex-col justify-end '>
          <h2 className='title'>{title}</h2>
          <p className='subtitle'>{subtitle}</p>
        </div>

        {/* image */}
        <div className='flex-1 '>
          <img src={image.type} alt="image_type" />
        </div>

       
      </div>
    </div>
  </section>
  )
  
};

export default FeaturesSecond;
