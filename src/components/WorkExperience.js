import React, { useState } from "react";

const WorkExperience = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const experiences = [
    {
      company: "Hackveda",
      role: "Python Developer Intern",
      year: "2022",
      details: [
        "Technical Proficiency: Engineered an email automation tool to streamline internship communications, reduced manual tasks by 50% and boosted efficiency.",
        "Automated personalized email sending, resulting in a 30% faster response rate.",
        "Integrated Google text-to-speech functionality to extract key information, enhancing accessibility and user experience.",
        "Project Leadership: Led a cross-functional team of 10 interns in a remote environment.",
      ],
    },
    {
      company: "Arbdossier",
      role: "Software Developer Intern",
      year: "2023",
      details: [
        "Strategic Collaboration: Partnered with co-founders to design and develop workflow-optimizing software.",
        "Data Automation: Engineered Python-based web scraping tool using Selenium for 10+ High Court websites.",
        "Database Optimization: Evaluated SQL/NoSQL solutions enhancing performance and scalability.",
      ],
    },
    {
      company: "Forcepoint",
      role: "Software Developer",
      year: "2024-25",
      details: [
        "CI/CD Optimization: Streamlined processes using Docker, Jenkins & Kubernetes, reducing deployment time by 25%.",
        "Codebase Modernization: Migrated legacy Python 2.7 to 3.8, cutting maintenance costs by 20%.",
        "Data Security Enhancement: Deployed DLP and DPS patterns for regulatory compliance.",
        "Project Maintenance: Collaborated with Agile/DevOps teams increasing system uptime by 15%.",
      ],
    },
  ];

  return (
    <section className="py-20 px-4 ">
      <h2 className="text-4xl font-bold text-center mb-16 font-poppins hover:text-slate-200 animate-fade-in-up delay-300">
        Work Experience
      </h2>

      <div className="max-w-6xl mx-auto relative animate-fade-in-up delay-300">
        {/* Timeline line */}
        <div className="fixed left-0 right-0 h-1 bg-slate-700 top-1/3 " />

        <div className="relative flex justify-between">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center w-1/3 px-4"
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              {/* Timeline dot */}
              <div
                className={`w-6 h-6 rounded-full mb-4 transition-all ${
                  activeIndex === index
                    ? "bg-emerald-500 scale-300"
                    : "bg-slate-500"
                }`}
              />

              {/* Experience card */}
              <div
                className={`p-6 rounded-lg shadow-lg transition-all transform ${
                  activeIndex === index
                    ? "scale-110 bg-slate-800 shadow-xl"
                    : "bg-slate-900"
                }`}
              >
                <h3 className="text-xl font-bold font-poppins mb-2">
                  {exp.company}
                </h3>
                <p className="text-slate-400 mb-1">{exp.role}</p>
                <p className="text-emerald-400 text-sm">{exp.year}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Details panel */}
        <div
          className={`mt-12 p-8 bg-slate-800 rounded-lg transition-opacity duration-300 ${
            activeIndex !== null ? "opacity-100" : "opacity-0"
          }`}
        >
          {activeIndex !== null && (
            <ul className="space-y-2">
              {experiences[activeIndex].details.map((detail, i) => (
                <li
                  key={i}
                  className="text-white font-poppins leading-relaxed border-l-2 border-emerald-500 pl-4"
                >
                  {detail}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
