import React from "react";
import "./App.css";

const techStack = [
  { name: "HTML", image: "https://skillicons.dev/icons?i=html" },
  { name: "CSS", image: "https://skillicons.dev/icons?i=css" },
  { name: "JavaScript", image: "https://skillicons.dev/icons?i=js" },
  { name: "Tailwind", image: "https://skillicons.dev/icons?i=tailwind" },
  { name: "React", image: "https://skillicons.dev/icons?i=react" },
  { name: "Node.js", image: "https://skillicons.dev/icons?i=nodejs" },
  { name: "Django", image: "https://skillicons.dev/icons?i=django" },
  { name: "Python", image: "https://skillicons.dev/icons?i=python" },
  { name: "AWS", image: "https://skillicons.dev/icons?i=aws" },
  { name: "Docker", image: "https://skillicons.dev/icons?i=docker" },
  { name: "Kubernetes", image: "https://skillicons.dev/icons?i=kubernetes" },
  { name: "Jenkins", image: "https://skillicons.dev/icons?i=jenkins" },
];

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-900 via-black to-black text-white">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <img
            src="profilephoto.jpg"
            alt="Akshat Patel"
            className="w-48 h-48 rounded-full border-4 border-white object-cover shadow-xl"
          />
          <div className="text-center md:text-left">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 font-playfair">
              Akshat Patel
            </h1>
            <p className="text-2xl md:text-3xl mb-3 text-slate-300 font-poppins">
              Software Engineer
            </p>
            <a
              href="https://www.linkedin.com/in/akshatpatel07/"
              target="_blank"
              className="inline-flex items-center gap-2 bg-[#0A66C2] hover:bg-[#004182] text-white font-poppins px-6 py-3 rounded-lg transition-colors duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
              LinkedIn
            </a>

            <a
              href="/AKSHAT_PATEL_RESUME.pdf" // Path to your resume in public folder
              target="_blank"
              download="Akshat_Patel_Resume.pdf"
              // rel="noopener noreferrer"
              className="inline-flex items-center ml-2.5 gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-poppins px-6 py-3 rounded-lg transition-colors duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              My Resume
            </a>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-20 px-4">
        <h2 className="text-4xl font-bold text-center mb-16 font-playfair">
          Tech Stack
        </h2>
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {techStack.map((tech, index) => (
            <div
              key={index}
              className="tech-items flex flex-col items-center gap-4 p-4 rounded-lg hover:bg-slate-700 transition-all"
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
    </div>
  );
}

export default App;
