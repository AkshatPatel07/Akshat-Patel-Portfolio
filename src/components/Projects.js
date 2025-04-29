import React from "react";

const Projects = ({id}) => {
  const projects = [
    {
      title: "Deep Learning based Video Colorization",
      details: [
        "Developed and implemented deep learning techniques such as CNN and GAN architectures to effectively colorize grayscale videos",
        "Leveraged Fréchet Inception Distance (FID) and Class-Dependent Classification (CDC) scores as evaluation metrics to optimize visual fidelity and output accuracy",
      ],
    },
    {
      title: "College Predictor using Machine Learning",
      details: [
        "Designed and built a web application using React for personalized college recommendations",
        "Implemented Linear Regression algorithm with historical cutoff data for accurate predictions",
        "Curated dataset of past four years' cutoffs for data-driven recommendations",
      ],
    },
    {
      title: "AWS Projects",
      details: [
        "Integrated AWS Cognito for secure authentication systems",
        "Developed file upload system to S3 via API Gateway",
        "Created chatbot using Amazon Lex",
        "Built video streaming service with S3, CloudFront, and React",
      ],
    },
  ];
  return (
    <section id={id} className="py-20 px-4 ">
      <h2 className="text-4xl font-bold text-center mb-16 font-playfair">
        Projects
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group bg-slate-800 rounded-xl p-6 hover:bg-slate-700 transition-all duration-300 hover:-translate-y-2 shadow-lg hover:shadow-xl"
          >
            <h3 className="text-2xl font-bold text-center font-playfair mb-4 text-emerald-400">
              {project.title}
            </h3>
            <ul className="space-y-4">
              {project.details.map((detail, i) => (
                <li
                  key={i}
                  className="text-slate-300 font-poppins text-sm leading-relaxed flex items-start"
                >
                  <span className="text-emerald-400 mr-2 mt-1">•</span>
                  {detail}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
