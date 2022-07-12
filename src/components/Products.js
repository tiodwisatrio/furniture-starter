import React from 'react';

import {products} from '../data';
import ProductsSlider from '../components/ProductSlider';

const Products = () => {
  const {title, subtitle} = products;

  return (
    <section className='section text-center'>
      <div className='container mx-auto'>
        <div>
          <h2 className='title'>{title}</h2>
          <p className='max-w-[639px] mx-auto mb-[50px] lg:mb-[70px]'>{subtitle}</p>
        </div>

        {/* slider */}
        <ProductsSlider />
      </div>
    </section>
  )
};

export default Products;
