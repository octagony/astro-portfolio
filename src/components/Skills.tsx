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
    <div className="text-xs flex items-center mb-8 justify-center">
      <div className="w-[200%] h-20 border-t border-b border-gray-600 relative">
        <div className="w-[200%] flex items-center h-20 justify-around absolute left-0 animate-scroll gap-20">
          {skills.map((skill, idx) => {
            return (
              <div
                key={idx}
                className="flex justify-center items-start w-[20rem]"
              >
                <p>{skill}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;
