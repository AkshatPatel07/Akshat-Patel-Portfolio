import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import MainIntro from "./components/MainIntro";
import TechStack from "./components/TechStack";
import WorkExperience from "./components/WorkExperience";
import Projects from "./components/Projects";
import ContactMe from "./components/ContactMe";

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <MainIntro id="home" />
      <TechStack id="techstack" />
      <WorkExperience id="experience" />
      <Projects id="projects" />
      <ContactMe id="contact" />
    </div>
  );
}

export default App;
