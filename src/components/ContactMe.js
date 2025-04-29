import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const ContactMe = ({id}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        formData,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setSuccess(true);
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setSuccess(false), 3000);
      })
      .catch((err) => {
        setError("Failed to send message. Please try again.");
        console.error(err);
      })
      .finally(() => setLoading(false));
  };

  return (
    <section id={id} className="py-20 px-4">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 font-playfair">
          Contact Me
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-slate-300 font-poppins mb-2">
              Your Name
            </label>
            <input
              type="text"
              required
              className="w-full bg-slate-800 rounded-lg p-3 text-white focus:ring-2 focus:ring-emerald-400 outline-none"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
          </div>

          <div>
            <label className="block text-slate-300 font-poppins mb-2">
              Your Email
            </label>
            <input
              type="email"
              required
              className="w-full bg-slate-800 rounded-lg p-3 text-white focus:ring-2 focus:ring-emerald-400 outline-none"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>

          <div>
            <label className="block text-slate-300 font-poppins mb-2">
              Message
            </label>
            <textarea
              required
              rows="4"
              className="w-full bg-slate-800 rounded-lg p-3 text-white focus:ring-2 focus:ring-emerald-400 outline-none"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-between">
            <button
              type="submit"
              disabled={loading}
              className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white font-poppins px-8 py-3 rounded-lg transition-colors duration-300 disabled:opacity-50"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {/* Resume Button */}
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
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-700 hover:bg-slate-600 text-white font-poppins px-8 py-3 rounded-lg transition-colors duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              My Resume
            </a>
          </div>

          {success && (
            <p className="text-emerald-400 text-center mt-4">
              Message sent successfully! Thanks for contacting me, I'll reply
              back soon.
            </p>
          )}
          {error && <p className="text-red-400 text-center mt-4">{error}</p>}
        </form>
      </div>
    </section>
  );
};

export default ContactMe;
