import React from "react";
import "./App.css";
import MainIntro from "./components/MainIntro";
import TechStack from "./components/TechStack";
import WorkExperience from "./components/WorkExperience";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-900 via-black to-black text-white">
      <MainIntro />
      <TechStack />
      <WorkExperience />
    </div>
  );
}

export default App;
