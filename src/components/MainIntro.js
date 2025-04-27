import React from "react";

const MainIntro = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4">
      <div className="flex flex-col md:flex-row items-center gap-8">
        <img
          src="profilephoto.jpg"
          alt="Akshat Patel"
          className="w-48 h-48 rounded-full border-4 border-white object-cover shadow-xl
          animate-fade-in-up delay-300
            transition-transform duration-200 ease-in-out
            hover:scale-105"
        />
        <div className="text-center md:text-left">
          <h1
            className="text-5xl md:text-6xl font-bold mb-4 font-playfair
              animate-fade-in-up delay-300
              hover:text-slate-200 "
          >
            Akshat Patel
          </h1>
          <p
            className="text-2xl md:text-3xl text-slate-300 font-poppins mb-6
              transition-all duration-500 ease-out animate-fade-in-up delay-300
              hover:translate-y-[-4px] hover:text-slate-100"
          >
            Software Engineer
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start animate-fade-in-up delay-300">
            <a
              href="https://www.linkedin.com/in/akshatpatel07/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2
                bg-[#0A66C2] hover:bg-[#004182]
                text-white font-poppins
                px-6 py-3 rounded-lg
                transition-colors duration-300 ease-in-out
                hover:scale-105"
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
              href="/AKSHAT_PATEL_RESUME.pdf"
              target="_blank"
              rel="noopener noreferrer"
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
              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-poppins px-6 py-3 rounded-lg transition-colors duration-300 ease-in-out
                hover:scale-105"
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
      </div>
    </section>
  );
};

export default MainIntro;
