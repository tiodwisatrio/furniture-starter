import React from 'react';

// import swiper react components
import {Swiper, SwiperSlide} from 'swiper/react';

// import swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import data
import {testimonial} from '../data'

// import required modules
import {Autoplay, Navigation} from 'swiper'

const TestimonialSlider = () => {
  return <Swiper 
  className='testimonialSlider'
  modules={[Navigation, Autoplay]}
  navigation={true}
  autoplay={true}
  >
    {testimonial.persons.map((person, index) => {
      // destructuring person
      const {avatar, occupation, name, message} = person;
      return <SwiperSlide key={index} className='mb-4 lg:mb-8'>
          <div className='flex flex-col min-h-[250px]'>
            <div className='flex items-center gap-x-5 mb-9'>
              {/* avatar */}
              <img src={avatar.type} alt="" />
              <div>
                <div className='text-xl font-semibold'>{name}</div>
                <div className='text-gray-500'>{occupation}</div>
              </div>
            </div>
              <div className='text-xl max-w-[570px]'>{message}</div>
          </div>
      </SwiperSlide>
    })}
  </Swiper>
};

export default TestimonialSlider;
