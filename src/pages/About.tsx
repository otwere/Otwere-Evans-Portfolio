import { FaDownload, FaGraduationCap, FaBriefcase } from "react-icons/fa";
import { SEO } from "../components/SEO";
import {
  personalBlobs,
  skillsData,
  educationData,
  experienceData,
} from "../data/aboutData";
import TimelineCard from "../components/TimelineCard";

export default function About() {
  return (
    <>
      <SEO
        title="About Me"
        description="Learn more about Otwere Evans, Front-End Software Developer from Nairobi, Kenya. Explore my skills, education, and professional journey."
        keywords="About Otwere Evans, Software Developer Bio, Skills, Education, Experience"
      />
      <section
        id="about"
        className="animate-enter relative overflow-hidden bg-slate-50 px-2 py-20"
      >
        {/* Decorative elements */}
        <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-linear-to-r from-indigo-300/20 to-purple-300/20 blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-linear-to-r from-cyan-300/20 to-blue-300/20 blur-3xl"></div>

        <div className="relative mx-auto w-full max-w-full">
          {/* Header with animation */}
          <div className="mb-12 text-center">
            <div className="inline-flex items-center gap-2">
              <div className="h-px w-12 bg-linear-to-r from-transparent via-indigo-500 to-transparent"></div>
              <h1 className="bg-linear-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-3xl sm:text-3xl font-bold text-transparent">
                About Me
              </h1>
              <div className="h-px w-12 bg-linear-to-r from-transparent via-purple-500 to-transparent"></div>
            </div>
          </div>

          {/* Main Content Card */}
          <div className="relative mb-12 overflow-hidden rounded-xl bg-white/80 backdrop-blur-sm p-8 shadow-none shadow-indigo-100/50 border border-white/20 mx-6">
            {/* Floating elements */}
            <div className="absolute -top-6 -right-6 h-12 w-12 rounded-full bg-linear-to-br from-indigo-400 to-purple-400"></div>
            <div className="absolute -bottom-6 -left-6 h-12 w-12 rounded-full bg-linear-to-br from-cyan-400 to-blue-400"></div>

            <p className="relative text-lg leading-relaxed text-slate-800">
              I'm{" "}
              <strong className="font-bold text-indigo-600">
                Otwere Evans
              </strong>
              , Front-End Software Developer experienced in building
              high-performance user interfaces. I transform ideas into seamless
              digital experiences using React.js,TypeScript, Tailwindcss and
              Next.js to deliver exceptional interactions. I develop scalable,
              Performance optimization, consumer-centric applications using
              Agile methodologies. I contribute innovative solutions across
              startups and enterprises.
            </p>

            {/* Personal Info - Refined Blobs (Flex Layout) */}
            <div className="mt-8 flex flex-wrap justify-center gap-x-4 gap-y-2 lg:gap-x-48">
              {/* Defs for gradients - shared across all blobs */}
              <svg className="absolute h-0 w-0">
                <defs>
                  <linearGradient
                    id="grad1"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop
                      offset="0%"
                      style={{ stopColor: "#4f46e5", stopOpacity: 0.95 }}
                    />
                    <stop
                      offset="100%"
                      style={{ stopColor: "#6366f1", stopOpacity: 0.95 }}
                    />
                  </linearGradient>
                  <linearGradient
                    id="grad2"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop
                      offset="0%"
                      style={{ stopColor: "#2563eb", stopOpacity: 0.95 }}
                    />
                    <stop
                      offset="100%"
                      style={{ stopColor: "#3b82f6", stopOpacity: 0.95 }}
                    />
                  </linearGradient>
                  <linearGradient
                    id="grad3"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop
                      offset="0%"
                      style={{ stopColor: "#e11d48", stopOpacity: 0.95 }}
                    />
                    <stop
                      offset="100%"
                      style={{ stopColor: "#f43f5e", stopOpacity: 0.95 }}
                    />
                  </linearGradient>
                  <linearGradient
                    id="grad4"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop
                      offset="0%"
                      style={{ stopColor: "#ea580c", stopOpacity: 0.95 }}
                    />
                    <stop
                      offset="100%"
                      style={{ stopColor: "#f97316", stopOpacity: 0.95 }}
                    />
                  </linearGradient>
                </defs>
              </svg>

              {personalBlobs.map((item) => (
                <div
                  key={item.label}
                  className="group relative flex h-50 w-fit min-w-[240px] items-center justify-center px-8 transition-all duration-500 hover:scale-[1.05]"
                >
                  <svg
                    viewBox="0 0 200 200"
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute inset-x-0 inset-y-0 h-full w-full drop-shadow-none transition-all duration-1000 group-hover:rotate-3 select-none pointer-events-none"
                  >
                    <path
                      fill={`url(#${item.gradientId})`}
                      d={item.path}
                      transform="translate(100 100)"
                      className="transition-all duration-700 group-hover:saturate-150"
                    />
                  </svg>

                  <div className="relative z-10 flex flex-col items-center gap-2 text-white text-center">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-xl shadow-none border border-white/30 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 -mt-7 mb-2">
                      <span className="text-sm drop-shadow-none">
                        <item.icon />
                      </span>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                      <span className="text-[11px] font-black uppercase tracking-[0.2em] text-white/90 drop-shadow-none leading-none">
                        {item.label}
                      </span>
                      <span className="text-sm font-bold tracking-tight text-white drop-shadow-none">
                        {item.value}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="relative mt-10 text-center">
              <a
                href="https://docs.google.com/document/d/1Zs-ZkdMmcRVHlNIjNMsdxCwMAc2iSon8OHmKuxATSKk/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full bg-linear-to-r from-indigo-600 to-purple-600 px-8 py-3 font-semibold text-white  transition-all duration-300 hover:scale-95"
              >
                <span>Download CV</span>
                <FaDownload className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          {/* Skills Section */}
          <div className="mb-12 mx-4">
            <h2 className="mb-8 text-center text-3xl font-bold text-slate-800">
              Technical{" "}
              <span className="bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Expertise
              </span>
            </h2>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
              {skillsData.map((category) => (
                <div
                  key={category.title}
                  className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-none shadow-slate-200/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-none"
                >
                  <div className="absolute top-0 left-0 h-1 w-full bg-linear-to-r from-indigo-500 via-purple-500 to-indigo-500"></div>
                  <div className="mb-6 flex items-center gap-3">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-br ${category.gradient} text-white`}
                    >
                      <category.icon className="text-2xl" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-800">
                      {category.title}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="group/item flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1.5 shadow-none transition-all duration-300 hover:scale-105 hover:border-indigo-300 hover:shadow-none"
                      >
                        <div
                          className={`flex h-6 w-6 items-center justify-center rounded-full bg-linear-to-br ${category.gradient} text-white text-xs`}
                        >
                          <skill.icon />
                        </div>
                        <span className="text-sm font-medium text-slate-600 group-hover/item:text-slate-900">
                          {skill.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Experience */}
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {/* Education */}
            <div>
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-linear-to-br from-emerald-500 to-teal-500 text-white">
                  <FaGraduationCap className="h-6 w-6" />
                </div>
                <h2 className="text-2xl font-bold text-slate-800 ">
                  Education
                </h2>
              </div>

              <div className="relative ml-3 border-l-2 border-indigo-200 space-y-8 pb-8">
                {educationData.map((edu) => (
                  <TimelineCard key={edu.org} {...edu} />
                ))}
              </div>
            </div>

            {/* Experience */}
            <div className="lg:mx-4">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-linear-to-br from-orange-500 to-red-500 text-white">
                  <FaBriefcase className="h-6 w-6" />
                </div>
                <h2 className="text-2xl font-bold text-slate-800">
                  Experience
                </h2>
              </div>

              <div className="relative ml-3 border-l-2 border-indigo-200 space-y-8 pb-8">
                {experienceData.map((exp) => (
                  <TimelineCard key={exp.org} {...exp} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
