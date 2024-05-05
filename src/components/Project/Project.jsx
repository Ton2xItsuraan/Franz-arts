import React from "react";
import images from "../../Images";
import { motion, useAnimation } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import "./Project.css";

const Project = () => {
  const [width, setWitdh] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWitdh(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  
  return (
    <section id="project">
      <div className=" ">
        <h1 className="flex justify-center items-center  text-4xl text-[#145DA0] font-header font-extrabold">
          
        </h1>
        <motion.div
          ref={carousel}
          className="carousel"
          whileTap={{ cursor: "grabbing" }}
        >
          <motion.div
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            className="inner-carousel"
          >
            {...images.map((image) => {
              return (
                <motion.div className="item " key={image}>
                  <img
                    src={image}
                    alt=""
                    className="shadow-lg border-2 border-cyan-950"
                  />
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Project;
