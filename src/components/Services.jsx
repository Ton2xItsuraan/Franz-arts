import React from 'react'
import { services } from '../data'

const Services = () => {
  return (
    <section id='services' className='section bg-[#0C2D48]'>
      <div className='container mx-auto'>
        {/* SECTION TITLE */}
        <div className='flex flex-col items-center text-center'>
            <h2 className='section-title before:content-services relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-28 before:hidden before:lg:block text-[#2E8BC0]'>
                What I do for clients
                <p className='subtitle'>
                With an unwavering commitment to growth and a relentless pursuit of excellence, I offer artistic services that are unparalleled in their dedication to quality and innovation. Each piece I offer is not just a product, but a culmination of my dedication, representing the highest standards of artistry and creativity. Whether it's painting, design, or choreography, my services are a testament to my passion for delivering unparalleled artistic excellence to clients who seek nothing but the best.
                </p>
            </h2>
        </div>
        {/* ITEM GRID */}
        <div className='grid lg:grid-cols-4 gap-8'>
            {services.map((service, index) => {
                const {icon, name, description} = service;
                return <div className='bg-[#05445E] p-6 rounded-2xl'>
                    <div className='text-accent rounded-sm w-12 h-12 flex justify-center items center mb-24 text-[28px]'>
                    {icon}
                    </div>
                    <h4 className='text-xl font-medium mb-2'>
                        {name}
                    </h4>
                    <p>{description}</p>
                </div>
                
            })}

        </div>
      </div>
    </section>
  )
}

export default Services
