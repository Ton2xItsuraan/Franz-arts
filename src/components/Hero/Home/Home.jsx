import React from 'react'
import Hero from '../Hero'
import Footer from '../Footer/Footer'
import "./Home.css"

const Home = () => {
  return (
    <div id='hero' className='home-container'>
        <div className=' py-52'>
            <Hero />
        </div>
      
      <Footer />
    </div>
  )
}

export default Home
