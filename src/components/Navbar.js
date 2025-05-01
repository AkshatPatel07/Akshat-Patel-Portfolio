import React from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav className="fixed w-full top-0 bg-gradient-to-b from-neutral-900 to-black z-50 shadow-xl">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <span className="text-white text-xl font-playfair cursor-pointer">
            <Link to="home" smooth={true} duration={500}>
              Akshat Patel
            </Link>
          </span>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="techstack"
              smooth={true}
              duration={500}
              className="text-slate-300 hover:text-white cursor-pointer font-poppins transition-colors"
            >
              Tech Stack
            </Link>
            <Link
              to="experience"
              smooth={true}
              duration={500}
              className="text-slate-300 hover:text-white cursor-pointer font-poppins transition-colors"
            >
              Experience
            </Link>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className="text-slate-300 hover:text-white cursor-pointer font-poppins transition-colors"
            >
              Projects
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="text-slate-300 hover:text-white cursor-pointer font-poppins transition-colors"
            >
              Contact
            </Link>
            <a
              href="/AKSHAT_PATEL_RESUME.pdf"
              download="Akshat_Patel_Resume.pdf"
              onClick={(e) => {
                setTimeout(() => {
                  const link = document.createElement("a");
                  link.href = "/AKSHAT_PATEL_RESUME.pdf";
                  link.download = "Akshat_Patel_Resume.pdf";
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }, 100);
              }}
              className="ml-4 bg-emerald-600 hover:bg-emerald-700 text-white font-poppins px-4 py-2 rounded-lg transition-colors"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
