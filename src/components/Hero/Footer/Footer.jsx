import React from 'react';
import shapeBg from '../../../assets/home/shape-bg.png';
import './Footer.css';

const Footer = () => {
  return (
    <div className='footer-container'>
      <div className='footer-parent'>
        <img src={shapeBg} alt="no internet connection" />
      </div>
    </div>
  );
};

export default Footer;
