import React from "react";
import experience from "../data/experience.json";

function Experience(setExprienceDetails) {
  return (
    <>
      <div className="bg-custom-navy min-w-full  container mx-auto py-10" id="experience">
        <h1 className="text-4xl font-bold text-center text-white mb-8">EXPERIENCE</h1>
        {experience.map((data) => (
          <div
            key={data.id}
            className="flex flex-col mx-14 md:flex-row items-center text-center md:text-left my-10 px-4 md:px-24 p-5 bg-blue-900 rounded-lg shadow-lg animate-slideInLeft"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            <div className="w-full sm:w-64 mb-6 md:mb-0">
              <img
                src={process.env.PUBLIC_URL + "/" + data.imageSrc}
                alt={data.role}
                className="w-2/3 md:w-1/2 lg:w-1/3 h-auto object-cover mx-auto rounded-full shadow-md"
              />
            </div>
            <div className="w-full md:w-2/3 md:pl-8">
              <h2 className="text-2xl font-semibold text-white mb-3">
                {data.role}
              </h2>
              <h4 className="text-lg text-yellow-400 mb-2">
                <span className="text-green-400">
                  {data.startDate} - {data.endDate}
                </span>{" "}
                <span>{data.location}</span>
              </h4>
              {data.experiences.map((experience, index) => (
                <h5 key={index} className="text-yellow-400 text-base">
                  {experience}
                </h5>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Experience;
