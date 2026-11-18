// src/pages/About.jsx
import { motion } from "framer-motion";
import { FaGraduationCap, FaBriefcase, FaAward, FaBook, FaCertificate, FaShieldAlt } from "react-icons/fa";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { useTheme } from "next-themes";

export default function About() {
    const { theme } = useTheme();
    const gradientFill = theme === "dark" ? "url(#darkGradient)" : "url(#lightGradient)";

  return (
    <>
      <style jsx>{`
        @keyframes text-shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }

        @keyframes float-up-down {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        @keyframes gradient-flow {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        @keyframes glow-pulse {
          0%, 100% { 
            box-shadow: 0 0 20px rgba(59, 130, 246, 0.3),
                        0 0 40px rgba(139, 92, 246, 0.2);
          }
          50% { 
            box-shadow: 0 0 30px rgba(59, 130, 246, 0.5),
                        0 0 60px rgba(139, 92, 246, 0.4);
          }
        }

        .text-gradient-shimmer {
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
          animation: text-shimmer 3s linear infinite;
        }

        .gradient-bg-flow {
          background-size: 200% 200%;
          animation: gradient-flow 8s ease infinite;
        }

        .timeline-card-glow {
          transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
          position: relative;
        }

        .timeline-card-glow::before {
          content: '';
          position: absolute;
          inset: -2px;
          border-radius: inherit;
          padding: 2px;
          background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.3), transparent);
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .timeline-card-glow:hover::before {
          opacity: 1;
        }

        .timeline-card-glow:hover {
          transform: scale(1.02) translateY(-5px);
          box-shadow: 0 20px 60px -10px rgba(59, 130, 246, 0.4),
                      0 10px 30px -5px rgba(139, 92, 246, 0.3);
        }

        .about-text-highlight {
          position: relative;
          display: inline-block;
          transition: all 0.3s ease;
        }

        .about-text-highlight:hover {
          transform: scale(1.05);
          text-shadow: 0 0 20px currentColor;
        }
      `}</style>

      <section className="min-h-screen px-6 py-24 bg-gradient-to-br from-gray-100 to-blue-50 dark:from-zinc-900 dark:to-zinc-800 flex items-center justify-center">
        <motion.div
          className="max-w-4xl text-center relative"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Animated background decoration */}
          <div className="absolute -top-20 -left-20 w-40 h-40 bg-blue-500/10 dark:bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-purple-500/10 dark:bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

          <motion.h2 
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="text-gradient-shimmer">About Me</span>
          </motion.h2>

          <motion.p 
            className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed tracking-wide mb-6 text-center sm:text-justify"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            I am a <span className="about-text-highlight font-semibold text-blue-600 dark:text-blue-400">Software Engineer</span> with 1+ year of experience designing and coding microservices and REST APIs in <span className="about-text-highlight font-medium text-indigo-600 dark:text-indigo-400">Node.js, TypeScript, and SAP CAPM</span> on PostgreSQL for an enterprise client (<span className="about-text-highlight font-medium text-purple-600 dark:text-purple-400">Nestlé, via IBM</span>), delivering production-grade solutions that went live across 10+ plants.
          </motion.p>

          <motion.p 
            className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed tracking-wide mb-8 text-center sm:text-justify"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            My work spans <span className="about-text-highlight font-medium text-blue-600 dark:text-blue-400">real-time interview platforms using WebRTC and AI agents</span>, distributed event-driven video pipelines with RabbitMQ and WebSockets, and Web3 smart contracts. I take pride in building software that is <span className="about-text-highlight font-medium text-indigo-600 dark:text-indigo-400">scalable, resilient, and testable</span>. I am also a <span className="about-text-highlight font-medium text-purple-600 dark:text-purple-400">first-author Springer publication researcher</span> and a <span className="about-text-highlight font-medium text-emerald-600 dark:text-emerald-400">KSCST State-Level Award winner</span>.
          </motion.p>

          {/* Quick Highlight Badges */}
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-8 text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="p-4 rounded-2xl bg-white/80 dark:bg-zinc-800/80 border border-gray-200/80 dark:border-zinc-700/80 shadow-sm backdrop-blur-sm">
              <div className="text-2xl mb-2 text-blue-500"><FaBriefcase /></div>
              <h4 className="font-bold text-gray-900 dark:text-white text-sm">Enterprise Impact</h4>
              <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">10+ Nestlé plants live via IBM with 9+ CSAT</p>
            </div>
            <div className="p-4 rounded-2xl bg-white/80 dark:bg-zinc-800/80 border border-gray-200/80 dark:border-zinc-700/80 shadow-sm backdrop-blur-sm">
              <div className="text-2xl mb-2 text-purple-500"><FaAward /></div>
              <h4 className="font-bold text-gray-900 dark:text-white text-sm">State-Level Award</h4>
              <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">KSCST 48th Series SPP winner for AR app</p>
            </div>
            <div className="p-4 rounded-2xl bg-white/80 dark:bg-zinc-800/80 border border-gray-200/80 dark:border-zinc-700/80 shadow-sm backdrop-blur-sm">
              <div className="text-2xl mb-2 text-indigo-500"><FaBook /></div>
              <h4 className="font-bold text-gray-900 dark:text-white text-sm">Springer Publication</h4>
              <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">First-author on Real-Time Object Detection (ICMIB-24)</p>
            </div>
            <div className="p-4 rounded-2xl bg-white/80 dark:bg-zinc-800/80 border border-gray-200/80 dark:border-zinc-700/80 shadow-sm backdrop-blur-sm">
              <div className="text-2xl mb-2 text-emerald-500"><FaCertificate /></div>
              <h4 className="font-bold text-gray-900 dark:text-white text-sm">Certified Professional</h4>
              <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">AWS Cloud Practitioner • Claude Architect • SAP CAP</p>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Timeline Section */}
      <section className="px-6 py-24 bg-gray-100 dark:bg-zinc-900 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-purple-500/5 dark:bg-purple-500/10 rounded-full blur-3xl" />

        <motion.h2 
          className="text-4xl font-extrabold mb-16 text-center relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 gradient-bg-flow">
            My Journey
          </span>
        </motion.h2>

        <VerticalTimeline lineColor={theme === "dark" ? "#3b82f6" : "#60a5fa"}>
          {/* IBM Nestlé Account */}
          <VerticalTimelineElement
            contentStyle={{ 
              background: "#2563eb", 
              color: "#fff",
              boxShadow: "0 10px 40px -10px rgba(37, 99, 235, 0.5)"
            }}
            contentArrowStyle={{ borderRight: "7px solid #2563eb" }}
            iconStyle={{ 
              background: "#2563eb", 
              color: "#fff",
              boxShadow: "0 0 0 4px rgba(37, 99, 235, 0.2), 0 0 20px rgba(37, 99, 235, 0.4)"
            }}
            icon={<FaBriefcase />}
            date="Aug 2025 – Oct 2026"
            className="timeline-card-glow"
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="vertical-timeline-element-title text-white font-bold text-xl">
                Backend Developer – Node.js
              </h3>
              <h4 className="vertical-timeline-element-subtitle text-white/90 font-medium mt-1">
                IBM (Nestlé Account) • Coimbatore, India
              </h4>
              <ul className="text-white/90 mt-3 list-disc list-inside space-y-1.5 text-sm sm:text-base leading-relaxed">
                <li>Designed and coded microservices and Node.js/SAP CAPM REST APIs on PostgreSQL for Nestlé’s “Line & Labour” enterprise app, live across 10+ plants.</li>
                <li>Built services for authorization, approvals, and mass updates, plus synchronized master recipes between PostgreSQL and SAP ECC.</li>
                <li>Built mobile-facing APIs for on-the-go material requisition approvals with real-time SAP ECC synchronization.</li>
                <li>Moved SAP ECC calls from UI to Node.js layer and added pagination for plants with thousands of records, boosting performance and reliability.</li>
                <li>Fixed SonarQube quality gates, managed SAP BTP releases, and maintained a 9+ CSAT score across AOA, AMS, and EUR zones.</li>
              </ul>
              <div className="mt-3 text-xs text-white/80 font-mono">
                Tech Stack: Node.js, SAP CAP, PostgreSQL, Snowflake, Azure, ServiceNow, REST APIs, SAP ECC, SonarQube, SAP BTP
              </div>
            </motion.div>
          </VerticalTimelineElement>

          {/* Splitmoon Studios */}
          <VerticalTimelineElement
            contentStyle={{ 
              background: "#7c3aed", 
              color: "#fff",
              boxShadow: "0 10px 40px -10px rgba(124, 58, 237, 0.5)"
            }}
            contentArrowStyle={{ borderRight: "7px solid #7c3aed" }}
            iconStyle={{ 
              background: "#7c3aed", 
              color: "#fff",
              boxShadow: "0 0 0 4px rgba(124, 58, 237, 0.2), 0 0 20px rgba(124, 58, 237, 0.4)"
            }}
            icon={<FaBriefcase />}
            date="Mar 2025 – Jun 2025"
            className="timeline-card-glow"
          >
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="vertical-timeline-element-title text-white font-bold text-xl">
                Blockchain Developer Intern
              </h3>
              <h4 className="vertical-timeline-element-subtitle text-white/90 font-medium mt-1">
                Splitmoon Studios • Delhi, India
              </h4>
              <ul className="text-white/90 mt-3 list-disc list-inside space-y-1.5 text-sm sm:text-base leading-relaxed">
                <li>Built and tested Solidity smart contracts on Ethereum and Polygon.</li>
                <li>Contributed APIs and Web3 integrations to an in-house AI agent platform in a cross-functional agile team.</li>
                <li>Analyzed on-chain transaction data with Dune Analytics to derive usage patterns and performance metrics.</li>
              </ul>
              <div className="mt-3 text-xs text-white/80 font-mono">
                Tech Stack: Solidity, Hardhat, Dune Analytics, REST APIs, Web3
              </div>
            </motion.div>
          </VerticalTimelineElement>

          {/* Connecting Dreams Foundation _VOIS */}
          <VerticalTimelineElement
            contentStyle={{ 
              background: "#0891b2", 
              color: "#fff",
              boxShadow: "0 10px 40px -10px rgba(8, 145, 178, 0.5)"
            }}
            contentArrowStyle={{ borderRight: "7px solid #0891b2" }}
            iconStyle={{ 
              background: "#0891b2", 
              color: "#fff",
              boxShadow: "0 0 0 4px rgba(8, 145, 178, 0.2), 0 0 20px rgba(8, 145, 178, 0.4)"
            }}
            icon={<FaBriefcase />}
            date="Oct 2024 – Nov 2024"
            className="timeline-card-glow"
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="vertical-timeline-element-title text-white font-bold text-xl">
                Data Analytics Intern
              </h3>
              <h4 className="vertical-timeline-element-subtitle text-white/90 font-medium mt-1">
                Connecting Dreams Foundation _VOIS • Remote
              </h4>
              <ul className="text-white/90 mt-3 list-disc list-inside space-y-1.5 text-sm sm:text-base leading-relaxed">
                <li>Developed practical data analysis skills using AI and LLMs, working on case studies in agriculture and science & technology.</li>
                <li>Attended weekly masterclasses and executed hands-on data projects to analyze complex datasets and extract actionable insights.</li>
                <li>Completed specialized coursework on the _VOIS for Tech platform tackling real-world data challenges.</li>
              </ul>
              <div className="mt-3 text-xs text-white/80 font-mono">
                Tech Stack: Python, Data Analytics, LLMs, AI Data Modeling
              </div>
            </motion.div>
          </VerticalTimelineElement>

          {/* Cybersecurity Council */}
          <VerticalTimelineElement
            contentStyle={{ 
              background: "#059669", 
              color: "#fff",
              boxShadow: "0 10px 40px -10px rgba(5, 150, 105, 0.5)"
            }}
            contentArrowStyle={{ borderRight: "7px solid #059669" }}
            iconStyle={{ 
              background: "#059669", 
              color: "#fff",
              boxShadow: "0 0 0 4px rgba(5, 150, 105, 0.2), 0 0 20px rgba(5, 150, 105, 0.4)"
            }}
            icon={<FaShieldAlt />}
            date="Nov 2023 – Dec 2023"
            className="timeline-card-glow"
          >
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="vertical-timeline-element-title text-white font-bold text-xl">
                Cybersecurity Intern
              </h3>
              <h4 className="vertical-timeline-element-subtitle text-white/90 font-medium mt-1">
                National Institute of Cybersecurity Council • Hyderabad, India
              </h4>
              <ul className="text-white/90 mt-3 list-disc list-inside space-y-1.5 text-sm sm:text-base leading-relaxed">
                <li>Completed an intensive cybersecurity training program covering threat defense, protocols, and analysis tools with 100% completion.</li>
                <li>Enabled real-time URL analysis by integrating a user-friendly interface where users input URLs to verify legitimacy and prevent phishing.</li>
                <li>Gained deep insights into government-affiliated cybersecurity infrastructure and security compliance measures.</li>
              </ul>
              <div className="mt-3 text-xs text-white/80 font-mono">
                Tech Stack: Cybersecurity, Threat Analysis, URL Verification, Python
              </div>
            </motion.div>
          </VerticalTimelineElement>

          {/* Education */}
          <VerticalTimelineElement
            contentStyle={{ 
              background: "#0284c7", 
              color: "#fff",
              boxShadow: "0 10px 40px -10px rgba(2, 132, 199, 0.5)"
            }}
            contentArrowStyle={{ borderRight: "7px solid #0284c7" }}
            iconStyle={{ 
              background: "#0284c7", 
              color: "#fff",
              boxShadow: "0 0 0 4px rgba(2, 132, 199, 0.2), 0 0 20px rgba(2, 132, 199, 0.4)"
            }}
            icon={<FaGraduationCap />}
            date="Dec 2021 – June 2025"
            className="timeline-card-glow"
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="vertical-timeline-element-title text-white font-bold text-xl">
                B.E. in Computer Science & Engineering
              </h3>
              <h4 className="vertical-timeline-element-subtitle text-white/90 font-medium mt-1">
                Global Academy of Technology • Bengaluru, India • CGPA: 9.17
              </h4>
              <p className="text-white/90 mt-3 text-sm sm:text-base leading-relaxed">
                Bachelor of Engineering in Computer Science and Engineering with First Class with Distinction (9.17 CGPA).
              </p>
              <div className="mt-2.5 p-2.5 rounded-lg bg-white/10 border border-white/20 text-xs sm:text-sm text-white/95">
                🏆 <strong>KSCST State-Level Award (48th Student Project Programme):</strong> State-level recognition and funding for developing an AR mobile encyclopedia application using Unity, Vuforia, and C#.
              </div>
            </motion.div>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </section>

      {/* Elegant SVG Section Separator */}
      <div className="relative -mt-16">
        <motion.svg
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="w-full"
          viewBox="0 0 1440 150"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="lightGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#e0e7ff" />
              <stop offset="100%" stopColor="#c7d2fe" />
            </linearGradient>
            <linearGradient id="darkGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1e293b" />
              <stop offset="100%" stopColor="#0f172a" />
            </linearGradient>
          </defs>
          <motion.path
            fill={gradientFill}
            d="M0,96L60,101.3C120,107,240,117,360,117.3C480,117,600,107,720,90.7C840,75,960,53,1080,64C1200,75,1320,117,1380,138.7L1440,160L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
            fillOpacity="1"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
        </motion.svg>
      </div>
    </>
  );
}