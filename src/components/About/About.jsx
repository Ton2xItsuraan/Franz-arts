
import Image from "../../assets/background4.jpg";
import ArtLogo from "../../assets/art-logo.png";
import './About.css'

const About = () => {


  

  return (
    <section  className="  section relative overflow-hidden z-0">
      {/* Background image */}
      

      {/* Overlay color */}
      <div className="absolute inset-0 bg-[#0C2D48]"></div>

      {/* Content */}
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col xl:flex-row gap-24">
          {/* Your content here */}
          <img
            className="object-cover h-full w-[566px] md:mx-auto lg:mx-0 rounded-2xl shadow-lg border border-blue-900 "
            src={Image}
            alt=""
          />
          <div className="flex flex-col items-center lg:items-start lg:text-left text-center">
            <div className="flex flex-col">
              <h2 className="text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 before:content-about relative before:absolute before:opacity-70 before:-top-[2rem] before:hidden before:lg:block font-header">
                Franz Sto. Domingo
              </h2>
              <p className="mb-4 text-accent">ARTIST</p>
              <hr className="mb-8 opacity-5" />
              <p className="mb-8">
              I've always had a deep passion for the arts, finding my greatest strengths lie in the realms of creativity, design, and choreography. From a young age, I discovered a natural talent for visual expression, effortlessly translating my thoughts and emotions into captivating works of art. Whether it's through painting, sketching, or interior design, I thrive on the endless possibilities of artistic exploration, constantly pushing the boundaries of my creativity to new heights.
                <br /> <br />
                In addition to my artistic pursuits, choreography has become a defining passion of mine. Through the medium of dance, I find a unique avenue for storytelling, blending movement with emotion to create captivating narratives that resonate deeply with audiences. With each choreographed piece, I pour my heart and soul into crafting an experience that transcends mere movement, leaving a lasting impression on those who have the privilege of witnessing my artistic vision come to life.
              </p>
            </div>
            <button className="btn btn-md bg-slate-600 hover:bg-accent-hover transition-all">
              Contact Me
            </button>
            <img src={ArtLogo} alt="" />
          </div>
        </div>
        
      </div>
      
    </section>
    
  );
};

export default About;
