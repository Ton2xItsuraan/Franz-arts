import React from "react";
import "./Hero.css";


const Hero = () => {
  return (
    <div  className="profile-container flex ">
      <div className="profile-parent">
        <div className="profile-details gap-5 px-2">
          <div className="colz gap-5 p-2">
            <div className="colz-icon gap-5">
              <a href="https://www.facebook.com/franz.stodomingo.370">
                <i className="fa fa-facebook-square gap-5 "></i>
              </a>
              <a href="">
                <i className="fa fa-google-square "></i>
              </a>
              <a href="https://www.instagram.com/">
                <i className="fa fa-instagram px-2"></i>
              </a>
              <a href="https://www.youtube.com/">
                <i className="fa fa-youtube-square  "></i>
              </a>
              <a href="https://twitter.com/">
                <i className="fa fa-twitter px-2"></i>
              </a>
            </div>
          </div>
          <div className="profile-details-name gap-5 px-2">
            <span className="primary-text gap-5 px-2">
              {" "}
              Hello, I'm <span className="higlighted-text gap-5 px-2">Franz</span>
            </span>
          </div>
          <div className="profile-details-role gap-5 px-2">
            <span className="primary-text ggap-5 px-2">
              {" "}
              <h1>
                {" "}
                <div className="i-title-wrapper">
                  <div className="i-title-item">Painter</div>
                  <div className="i-title-item">Event Organizer</div>
                  <div className="i-title-item">Interior Designer</div>
                  <div className="i-title-item">Sketch Artist</div>
                  <div className="i-title-item">Choreographer</div>
                </div>
                
              </h1>
              <span className="profile-role-tagline px-2">
                I'm just a man who loves arts and talents.
              </span>
            </span>
          </div>
          <div className="profile-options flex justify-center gap-5 px-2">
            <a href="#contact">
            <button className="btn primary-btn px-2">
              {""}
              Hire Me{" "}
            </button>
            </a>
            
            <a href="#contact" >
              <button className="btn bg-orange-500 text-white text-xs font-semibold transition-transform duration-200 transform active:translate-y-2 px-2">Make a Booking</button>
            </a>
          </div>
        </div>
        <div className="profile-picture px-2">
          <div className="profile-picture-background px-2"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
