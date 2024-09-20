import React, { useEffect, useRef } from "react";
import pdf from "../pdf/Prasanjit.resume-1.pdf";
import Typed from "typed.js";
import AOS from "aos";
import "aos/dist/aos.css";
import Experience from "../pages/exprience";
import Skills from "../pages/Skills";
import Project from "../pages/Projects";
import Contact from "../pages/contactUs";

const Home = () => {
  const typedRef = useRef(null); // Create ref

  useEffect(() => {
    // Check if ref is available before initializing Typed.js
    if (typedRef.current) {
      const typed = new Typed(typedRef.current, {
        strings: [
          "Welcome to my profile",
          "My Name is Prasanjit Prusty",
          "I'm a Web Full Stack Developer",
        ],
        typeSpeed: 50,
        backSpeed: 50,
        loop: true,
      });

      // Clean up Typed instance when component unmounts
      return () => {
        typed.destroy();
      };
    }
  }, []); // Empty dependency array so it runs once on mount

  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // Initialize AOS
  }, []);

  return (
    <>
      <div
        className="bg-custom-navy min-h-screen min-w-full text-white container mx-auto p-8 lg:p-16 flex flex-col lg:flex-row items-center justify-between h-screen"
        id="home"
      >
        {/* Left section with Typed.js text */}
        <div
          className="left flex flex-col justify-center text-center lg:text-left rounded-md border-2 border-red-600"
          style={{ width: "45%" }} // Adjusting width for left side
          data-aos="fade-up-right"
          data-aos-duration="1000"
        >
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 lg:mb-8">
            {/* This span will be populated by Typed.js */}
            <span className="text-white font-extralight" ref={typedRef}></span>
          </h1>

          {/* Download Resume Button */}
          <button
            onClick={() => {
              const link = document.createElement("a");
              link.href = pdf;
              link.download = "Prasanjit.resume-1.pdf";
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            }}
            className="inline-block px-6 py-4 text-navy bg-yellow-400 border border-yellow-400 rounded-lg hover:bg-transparent hover:text-yellow-400 transition duration-300"
          >
            Download Resume
          </button>
        </div>

        {/* Right section with image */}
        <div
          className="right flex justify-end"
          style={{ width: "45%" }} // Adjusting width for right side
          data-aos="fade-up-left"
          data-aos-duration="1000"
        >
          <div className="img">
            <img
              src="/images/image1.png"
              alt="hero"
              className="w-full h-auto rounded-full shadow-md"
            />
          </div>
        </div>
      </div>

      {/* Other content sections */}
      <Experience />
      <Skills />
      <Project />
      <Contact />
    </>
  );
};

export default Home;
