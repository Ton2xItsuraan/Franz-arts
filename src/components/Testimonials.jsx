import React from 'react'
import TestimonialsSlider from './TestimonialsSlider'

const Testimonials = () => {
  return (
    <section id='testimonials' className='section bg-tertiary'>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center text-center'>
            <h2 className='section-title before:content-testimonials relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-64 before:hidden before:lg:block'>What other perople say
            </h2>
            <p className='subtitle'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus, aliquid sunt non optio ex ipsa! Et fugiat rerum possimus illum, nemo laudantium fugit, aspernatur nulla voluptate id temporibus deleniti repellat.
            </p>
        </div>
        <TestimonialsSlider /> 
      </div>
    </section>
  );
}

export default Testimonials
