import React from "react";

const TechStack = () => {
  const techStack = [
    { name: "HTML", image: "https://skillicons.dev/icons?i=html" },
    { name: "CSS", image: "https://skillicons.dev/icons?i=css" },
    { name: "JavaScript", image: "https://skillicons.dev/icons?i=js" },
    { name: "Tailwind", image: "https://skillicons.dev/icons?i=tailwind" },
    { name: "BootStrap", image: "https://skillicons.dev/icons?i=bootstrap" },
    { name: "React", image: "https://skillicons.dev/icons?i=react" },
    { name: "Python", image: "https://skillicons.dev/icons?i=python" },
    { name: "Django", image: "https://skillicons.dev/icons?i=django" },
    { name: "Node.js", image: "https://skillicons.dev/icons?i=nodejs" },
    { name: "AWS", image: "https://skillicons.dev/icons?i=aws" },
    { name: "Docker", image: "https://skillicons.dev/icons?i=docker" },
    { name: "Jenkins", image: "https://skillicons.dev/icons?i=jenkins" },
    { name: "Kubernetes", image: "https://skillicons.dev/icons?i=kubernetes" },
    { name: "MySQL", image: "https://skillicons.dev/icons?i=mysql"},
    { name: "MongoDB", image: "https://skillicons.dev/icons?i=mongodb"},
    { name: "Linux", image: "https://skillicons.dev/icons?i=linux"},
    { name: "Selenium", image: "https://skillicons.dev/icons?i=selenium"},
    { name: "GitHub", image: "https://skillicons.dev/icons?i=github"},
  ];

  return (
    <section className="py-20 px-4">
      <h2 className="text-4xl font-bold text-center mb-16 font-playfair hover:text-slate-200">
        Tech Stack
      </h2>
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
        {techStack.map((tech, index) => (
          <div
            key={index}
            className="tech-item flex flex-col items-center gap-4 p-4 rounded-lg hover:bg-slate-700 transition-all"
          >
            <img
              src={tech.image}
              alt={tech.name}
              className="w-16 h-16 object-contain"
            />
            <span className="text-lg font-poppins">{tech.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
