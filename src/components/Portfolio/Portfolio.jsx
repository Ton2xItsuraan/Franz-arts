import React from 'react'
import Project from '../Project/Project'

const Portfolio = () => {
  return (
    <section id='portfolio' className='section bg-[#B1D4E0] min-h-[1000px] max-h-1'>
        <div className='container mx-auto'>
            <div className='flex flex-col items-center text-center'>
                <h2 className='section-title before:content-portfolio relative before:absolute before:opacity-100 before:-top-[2rem] before:-left-3/4 before:hidden before:lg:block text-[#0C2D48]'>
                    My latest artworks
                </h2>
                <p className='subtitle text-[#2E8BC0]'>
                Each of my artworks is a testament to the countless hours of dedicated practice and unwavering determination I've poured into honing my craft. Every stroke of the brush, every line meticulously drawn, is a reflection of the passion and perseverance that drive me forward on my artistic journey. 
                </p>
            </div>
            <div>
            <Project />
            </div>
        </div>
    </section>
  )
}

export default Portfolio
