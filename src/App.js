import React from "react";
import "./App.css";
import MainIntro from "./components/MainIntro";
import TechStack from "./components/TechStack";
import WorkExperience from "./components/WorkExperience";
import Projects from "./components/Projects";
import ContactMe from "./components/ContactMe";


function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <MainIntro />
      <TechStack />
      <WorkExperience />
      <Projects />
      <ContactMe />
    </div>
  );
}

export default App;
