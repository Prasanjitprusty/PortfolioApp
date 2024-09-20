import React from "react";
import skills from "../data/skills.json";

function Skills(setSkillsDetails) {
  return (
    <div className="bg-custom-navy py-14" id="skills">
      <h1 className="text-center text-4xl font-bold text-yellow-400 leading-tight tracking-widest underline mb-12">
        SKILLS
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-24 lg:px-32">
        {skills.map((data, idx) => (
          <div
            className="bg-black flex flex-col items-center justify-center p-6 rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105"
            key={idx}
            data-aos="flip-left"
            data-aos-duration="1000"
          >
            <img
              src={process.env.PUBLIC_URL + "/" + data.imageSrc}
              alt={data.title}
              className="w-24 h-24 sm:w-32 sm:h-32 object-contain mb-4"
            />
            <h3 className="text-white text-lg font-semibold">{data.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
