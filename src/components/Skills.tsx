import React from "react";

const Skills = () => {
  const skills = [
    "HTML",
    "CSS",
    "SCSS/SASS",
    "Modules",
    "Tailwind",
    "Bootstrap",
    "JavaScript",
    "Typescript",
    "jQuery",
    "React",
    "Router",
    "Redux",
    "Zustand",
    "Firebase",
    "Astro",
    "Git",
    "Webpack",
    "Gulp",
    "Vite",
    "Figma",
    "Preact",
  ];
  return (
    <>
      <div className="text-xs flex items-center mb-5 justify-center">
        <div className="w-[200%] h-10 border-t border-b overflow-hidden border-gray-600 relative">
          <div className="w-[200%] flex items-center h-10 justify-around absolute left-0 animate-scroll gap-5">
            {skills.slice(0, skills.length / 2).map((skill, idx) => {
              return (
                <div key={idx} className="flex justify-center items-start w-20">
                  <p>{skill}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="text-xs flex items-center mb-5 justify-center">
        <div className="w-[200%] h-10 border-t border-b overflow-hidden border-gray-600 relative">
          <div className="w-[200%] flex items-center h-10 justify-around absolute left-0  animate-scroll_revere gap-5">
            {skills.slice(skills.length / 2, -1).map((skill, idx) => {
              return (
                <div key={idx} className="flex justify-center items-start w-20">
                  <p>{skill}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
