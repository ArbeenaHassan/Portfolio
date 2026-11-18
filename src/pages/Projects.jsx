"use client";

import { motion } from "framer-motion";
import { SocialLinks } from "../components/SocialLinks";
import { useTheme } from "next-themes";
import "react-vertical-timeline-component/style.min.css";
import { useState } from "react";

const projects = [
  {
    title: "Real-Time AI Technical Interview Platform",
    desc: "Built a full-stack, voice-based AI interview simulation platform that conducts real-time coding interviews using streaming audio, LLM reasoning, and dynamic voice synthesis. The system is split into independent services: a Next.js 14 frontend with an embedded Monaco Code Editor (multi-language support), an Express/Node.js session orchestration API, and a Python LiveKit agent. Features ultra-low latency bi-directional audio streaming via WebRTC, Deepgram STT, Cartesia TTS, Silero VAD with interruption handling, and automated evaluation engine scoring candidate competence and communication.",
    image: "/projects/interview-platform.png",
    tags: ["Next.js", "TypeScript", "Node.js", "Express", "Python", "LiveKit", "WebRTC", "Deepgram", "Cartesia"],
    link: "https://github.com/ArbeenaHassan/Real-Time-AI-Interview-Platform",
  },
  {
    title: "Distributed Event-Driven Video Processing Platform",
    desc: "Designed and implemented a distributed microservice system using FastAPI, Python, and React for video upload, enhancement, and metadata extraction. Integrated RabbitMQ for asynchronous worker task queuing and WebSockets for instant status updates, cutting processing latency by 40%. Implemented an intuitive UI with smooth upload and download experience, error recovery, and OpenCV video processing pipelines.",
    image: "/projects/video-processor.png",
    tags: ["FastAPI", "Python", "React", "RabbitMQ", "WebSockets", "OpenCV", "Microservices"],
    link: "https://github.com/ArbeenaHassan/Distributed-Event-Driven-Video-Processing-Pipeline",
  },
  {
    title: "AR-Based Interactive Encyclopedia",
    desc: "Developed an Android augmented reality encyclopedia application that projects interactive 3D content over 2D printed diagrams using Vuforia image targets, boosting information retention by ~35%. Integrated Unity and Vuforia SDK to recognize 20+ diagrams and trigger interactive 3D models, voiceovers, and animations in C#. Created and optimized 15+ low-poly educational 3D models in Blender, reducing render times by 40%. Awarded under KSCST 48th Series Student Project Programme (SPP) with state-level recognition and funding.",
    image: "/projects/AR_Encylopedia.jpeg",
    tags: ["Unity3D", "Vuforia", "C#", "Blender", "Android", "Augmented Reality", "KSCST State Award"],
    link: null,
  },
  {
    title: "AI-Powered Image Generator WebApp",
    desc: "Built a full-stack MERN web application integrating OpenAI's DALL-E 3 through custom RESTful Express APIs, achieving a 90% increase in integration efficiency. Architected a cutting-edge, responsive React user interface that boosted user retention by 25% and delivered a 30% faster load time with client caching. Engineered a robust backend in ExpressJS to handle prompt sanitization, rate-limiting, and server-side logic.",
    image: "/projects/chef-claude.png",
    tags: ["React", "Express.js", "Node.js", "MongoDB", "DALL-E 3", "REST APIs"],
    link: "https://github.com/ArbeenaHassan/AI-Image-Generator",
  },
  {
    title: "Phishing Website Detection WebApp",
    desc: "Developed a cybersecurity web application using Python and Flask to detect phishing websites with 96.8% accuracy using Random Forest machine learning algorithms. Engineered a user-friendly and responsive chatbot interface using HTML, CSS, and JavaScript. Implemented Google Gemini APIs to handle interactive chatbot inquiries, allowing users to verify URL legitimacy and analyze cyber threats in real time.",
    image: "/projects/news-aggregator.png",
    tags: ["Python", "Flask", "Random Forest", "Scikit-Learn", "Gemini API", "Cybersecurity"],
    link: "https://github.com/ArbeenaHassan/Phishing-Website-Detection",
  },
];

export default function ProjectsPage() {
  const { theme } = useTheme();
  const [expanded, setExpanded] = useState(null);

  return (
    <>
      <style jsx>{`
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        @keyframes shimmer-flow {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }

        @keyframes float-subtle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }

        .project-card {
          transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
          position: relative;
          // overflow: hidden;
        }

        .project-card::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 1rem;
          padding: 2px;
          background: linear-gradient(45deg, transparent, rgba(59, 130, 246, 0.6), transparent);
          background-size: 200% 200%;
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          opacity: 0;
          transition: opacity 0.5s ease;
          animation: shimmer-flow 3s linear infinite;
          pointer-events: none;   /* 🔥 This fixes Read More */

        }

        .project-card:hover::before {
          opacity: 1;
        }

        .project-card:hover {
          transform: translateY(-12px) scale(1.02);
          box-shadow: 0 25px 60px -15px rgba(59, 130, 246, 0.5),
                      0 15px 40px -10px rgba(139, 92, 246, 0.4);
        }

        .project-card:hover .project-image {
          transform: scale(1.1);
        }

        .project-image {
          transition: transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .tag-item {
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
          position: relative;
        }

        .tag-item::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 9999px;
          background: linear-gradient(135deg, rgba(255,255,255,0.1), transparent);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .tag-item:hover::before {
          opacity: 1;
        }

        .tag-item:hover {
          transform: scale(1.15) translateY(-2px);
          box-shadow: 0 4px 12px rgba(99, 102, 241, 0.4);
        }

        .gradient-text {
          background: linear-gradient(
            90deg,
            #3b82f6 0%,
            #8b5cf6 25%,
            #ec4899 50%,
            #8b5cf6 75%,
            #3b82f6 100%
          );
          background-size: 200% auto;
          -webkit-background-clip: text;
          background-clip: text;
          animation: shimmer-flow 3s linear infinite;
        }

        .link-hover {
          position: relative;
          transition: all 0.3s ease;
        }

        .link-hover::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 2px;
          background: currentColor;
          transition: width 0.3s ease;
        }

        .link-hover:hover::after {
          width: 100%;
        }

        .link-hover:hover {
          transform: translateX(4px);
        }
      `}</style>

      {/* Projects Section */}
      <section className="min-h-screen px-6 py-24 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-zinc-900 dark:via-zinc-900 dark:to-zinc-800 transition-colors duration-500 relative overflow-hidden">
        {/* Animated background decorations */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 dark:bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500/10 dark:bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-6xl mx-auto relative z-10"
        >
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-14 text-center tracking-tight"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="gradient-text text-transparent">My Projects</span>
          </motion.h2>

          <div className="grid gap-12 md:grid-cols-2">
            {projects.map((p, i) => {
              const isOpen = expanded === i;

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="project-card bg-white dark:bg-zinc-900 text-gray-800 dark:text-white border border-gray-200 dark:border-zinc-700 rounded-2xl shadow-lg"
                >
                  <div className="overflow-hidden">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="project-image w-full h-52 object-cover object-top"
                    />
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                      {p.title}
                    </h3>

<div className="relative">
  <motion.p
    initial={false}
    animate={{
      maxHeight: isOpen ? 500 : 72,   // px values work smoother than tailwind strings
      opacity: isOpen ? 1 : 0.85,
    }}
transition={{
  type: "spring",
  stiffness: 65,
  damping: 26,
  mass: 1.3,
}}

    className="text-gray-600 dark:text-gray-300 mb-3 leading-relaxed overflow-hidden"
  >
    {p.desc}
  </motion.p>

  {!isOpen && (
    <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white dark:from-zinc-900 to-transparent pointer-events-none" />
  )}
</div>

<button
  type="button"
  onClick={() => setExpanded(prev => (prev === i ? null : i))}
  className="text-blue-600 dark:text-blue-400 font-semibold hover:text-blue-700 dark:hover:text-blue-300 focus:outline-none mb-4 transition-all duration-300 hover:underline cursor-pointer"
>
  {isOpen ? "Show less ↑" : "Read more →"}
</button>

                    <div className="flex flex-wrap gap-2 mb-5">
                      {p.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="tag-item px-3 py-1.5 text-sm bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900/50 dark:to-purple-900/50 text-indigo-700 dark:text-indigo-300 rounded-full shadow-sm font-medium cursor-default"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-wrap items-center gap-4">
                      {p.live_link && (
                        <a
                          href={p.live_link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="link-hover text-green-600 dark:text-green-400 font-semibold inline-flex items-center gap-1"
                        >
                          Live Demo →
                        </a>
                      )}
                      {p.link ? (
                        <a
                          href={p.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="link-hover text-indigo-600 dark:text-indigo-400 font-semibold inline-flex items-center gap-1"
                        >
                          View Project →
                        </a>
                      ) : (
                        <span className="text-xs sm:text-sm font-semibold text-purple-600 dark:text-purple-400 bg-purple-100 dark:bg-purple-950/60 px-3 py-1 rounded-full border border-purple-200 dark:border-purple-800">
                          📱 Mobile AR App • KSCST State Award
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </section>
    
      <SocialLinks />
    </>
  );
}