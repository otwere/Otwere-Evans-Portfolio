import { FaCode, FaCogs, FaGlobe, FaDownload, FaCalendar, FaGraduationCap, FaBriefcase } from 'react-icons/fa';
import { SiJavascript, SiHtml5, SiRuby, SiTypescript, SiMongodb, SiMysql, SiNodedotjs, SiGraphql, SiReact, SiNextdotjs, SiTailwindcss, SiLinux, SiGithub, SiExpress } from 'react-icons/si';
import { RiMailLine, RiMapPinLine, RiUserLine, RiBookLine } from 'react-icons/ri';
import { IoServerOutline } from 'react-icons/io5';
import { MdDataObject, MdApi, MdSettings, MdBuild, MdLeaderboard, MdChat, MdUpdate, MdTimer } from 'react-icons/md';
import { SEO } from "../components/SEO";

export default function About() {
  return (
    <>
      <SEO
        title="About Me"
        description="Learn more about Otwere Evans, Front-End Software Developer from Nairobi, Kenya. Explore my skills, education, and professional journey."
        keywords="About Otwere Evans, Software Developer Bio, Skills, Education, Experience"
      />
      <section id="about" className="animate-enter relative overflow-hidden bg-slate-50 px-2 py-20">
        {/* Decorative elements */}
        <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-gradient-to-r from-indigo-300/20 to-purple-300/20 blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-gradient-to-r from-cyan-300/20 to-blue-300/20 blur-3xl"></div>

        <div className="relative mx-auto w-full max-w-full">
          {/* Header with animation */}
          <div className="mb-12 text-center">
            <div className="inline-flex items-center gap-2">
              <div className="h-px w-12 bg-gradient-to-r from-transparent via-indigo-500 to-transparent"></div>
              <h1 className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-3xl sm:text-3xl font-bold text-transparent">
                About Me
              </h1>
              <div className="h-px w-12 bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
            </div>
          </div>

          {/* Main Content Card */}
          <div className="relative mb-12 overflow-hidden rounded-xl bg-white/80 backdrop-blur-sm p-8 shadow-none shadow-indigo-100/50 border border-white/20">
            {/* Floating elements */}
            <div className="absolute -top-6 -right-6 h-12 w-12 rounded-full bg-gradient-to-br from-indigo-400 to-purple-400"></div>
            <div className="absolute -bottom-6 -left-6 h-12 w-12 rounded-full bg-gradient-to-br from-cyan-400 to-blue-400"></div>

            <p className="relative text-lg leading-relaxed text-slate-700">
              I'm <strong className="font-bold text-indigo-600">Otwere Evans</strong>, Front-End Software Developer experienced in building high-performance user interfaces.
              I transform ideas into seamless digital experiences using React.js, TypeScript,
              Tailwindcss and Next.js to deliver exceptional interactions.
              With a strong foundation in UI/UX and performance optimization, I develop scalable, consumer-centric applications using Agile methodologies.
              As I grow, I'm expanding into full-stack development to contribute innovative solutions across startups and enterprises.
            </p>

            {/* Personal Info - Refined Blobs (Flex Layout) */}
            <div className="mt-8 flex flex-wrap justify-center gap-x-4 gap-y-2 lg:gap-x-48">
              {/* Defs for gradients - shared across all blobs */}
              <svg className="absolute h-0 w-0">
                <defs>
                  <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: '#4f46e5', stopOpacity: 0.95 }} />
                    <stop offset="100%" style={{ stopColor: '#6366f1', stopOpacity: 0.95 }} />
                  </linearGradient>
                  <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: '#2563eb', stopOpacity: 0.95 }} />
                    <stop offset="100%" style={{ stopColor: '#3b82f6', stopOpacity: 0.95 }} />
                  </linearGradient>
                  <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: '#e11d48', stopOpacity: 0.95 }} />
                    <stop offset="100%" style={{ stopColor: '#f43f5e', stopOpacity: 0.95 }} />
                  </linearGradient>
                  <linearGradient id="grad4" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: '#ea580c', stopOpacity: 0.95 }} />
                    <stop offset="100%" style={{ stopColor: '#f97316', stopOpacity: 0.95 }} />
                  </linearGradient>
                </defs>
              </svg>

              {[
                {
                  icon: <RiUserLine />,
                  label: "Nationality",
                  value: "Kenyan",
                  gradient: "url(#grad1)",
                  path: "M44.7,-76.4C58.1,-69.2,69.2,-58.1,76.4,-44.7C83.7,-31.3,87.1,-15.7,85.8,-0.8C84.4,14.1,78.3,28.2,70.1,40.1C61.9,52,51.6,61.7,39.7,69.5C27.8,77.3,13.9,83.1,-0.5,83.9C-14.9,84.7,-29.8,80.5,-42.6,73.1C-55.4,65.7,-66,55.1,-74.6,42.4C-83.2,29.7,-89.7,14.9,-90.1,-0.2C-90.5,-15.3,-84.9,-30.6,-75,-43C-65.1,-55.4,-51,-64.8,-36.8,-71.6C-22.6,-78.4,-8.3,-82.6,3,-87.8C14.3,-93,28.6,-99.3,44.7,-76.4Z",
                },
                {
                  icon: <RiMapPinLine />,
                  label: "City",
                  value: "Nairobi, Kenya",
                  gradient: "url(#grad2)",
                  path: "M38.1,-63.4C49.1,-56.3,57.6,-45.3,64.2,-33.4C70.8,-21.5,75.4,-8.6,73.6,3.1C71.8,14.8,63.5,25.4,54.7,33.9C45.9,42.4,36.5,48.9,26,55.3C15.5,61.7,3.9,68.1,-8.5,69.5C-20.9,70.9,-34,67.3,-45.1,60C-56.2,52.7,-65.2,41.7,-71.2,29.3C-77.2,16.9,-80.2,3.1,-78.5,-9.7C-76.8,-22.5,-70.4,-34.3,-61.2,-44C-52,-53.7,-40,-61.3,-27.7,-67.6C-15.4,-73.9,-2.7,-78.9,10.6,-78.4C23.9,-77.9,32.4,-70.5,38.1,-63.4Z",
                },
                {
                  icon: <RiMailLine />,
                  label: "Mail",
                  value: "otweree@gmail.com",
                  gradient: "url(#grad3)",
                  path: "M43.7,-75.4C55.4,-67.7,62.8,-53.4,69.1,-39.8C75.4,-26.2,80.6,-13.1,80.5,-0.1C80.4,12.9,74.9,25.8,66.8,36.8C58.7,47.8,48,56.9,36,65.2C24,73.5,10.7,81.1,-2.9,86.1C-16.5,91.1,-30.3,93.5,-42.6,87.8C-54.9,82.1,-65.7,68.3,-72.4,54.1C-79.1,39.9,-81.7,25.3,-82.1,10.7C-82.5,-3.9,-80.7,-18.5,-75.1,-31.9C-69.5,-45.3,-60.1,-57.5,-48.1,-65C-36.1,-72.5,-21.5,-75.3,-5.7,-72C10.1,-68.7,21.9,-79.1,43.7,-75.4Z",
                },
                {
                  icon: <RiBookLine />,
                  label: "Hobbies",
                  value: "Tech Prodcast",
                  gradient: "url(#grad4)",
                  path: "M41.7,-73.1C53.7,-66.2,63.1,-53.5,69.4,-40.1C75.7,-26.7,78.9,-12.6,78.7,1.4C78.5,15.4,74.9,29.3,67.5,41.1C60.1,52.9,48.9,62.6,36.5,69.9C24.1,77.2,12.1,82,0.3,81.5C-11.5,81,-23,75.2,-34,68C-45,60.8,-55.5,52.2,-64.1,41.4C-72.7,30.6,-79.4,17.6,-82.4,3.4C-85.4,-10.8,-84.7,-26.2,-78.2,-39C-71.7,-51.8,-59.4,-62.1,-45.7,-68.2C-32,-74.3,-16,-76.3,-0.1,-76.1C15.8,-75.9,31.6,-73.5,41.7,-73.1Z",
                },
              ].map((item) => (
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
                      fill={item.gradient}
                      d={item.path}
                      transform="translate(100 100)"
                      className="transition-all duration-700 group-hover:saturate-150"
                    />
                  </svg>

                  <div className="relative z-10 flex flex-col items-center gap-2 text-white text-center">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-xl shadow-none border border-white/30 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 -mt-7 mb-2">
                      <span className="text-sm drop-shadow-none">{item.icon}</span>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                      <span className="text-[11px] font-black uppercase tracking-[0.2em] text-white/90 drop-shadow-none leading-none">{item.label}</span>
                      <span className="text-sm font-bold tracking-tight text-white drop-shadow-none">{item.value}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="relative mt-10 text-center">
              <a
                href="https://drive.google.com/file/d/1Sxf5ova67vlXEuBCC1Q_ZD54TOTq8Env/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-3 font-semibold text-white  transition-all duration-300 hover:scale-95"
              >
                <span>Download CV</span>
                <FaDownload className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          {/* Skills Section */}
          <div className="mb-12">
            <h2 className="mb-8 text-center text-3xl font-bold text-slate-800">
              Technical <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Expertise</span>
            </h2>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
              {[
                {
                  title: "Languages",
                  icon: <FaCode className="text-2xl" />,
                  skills: [
                    { name: "Javascript", icon: <SiJavascript /> },
                    { name: "HTML5 & CSS3", icon: <SiHtml5 /> },
                    { name: "Ruby", icon: <SiRuby /> },
                    { name: "Typescript", icon: <SiTypescript /> },
                    // { name: "Python", icon: <SiPython /> },
                    { name: "MongoDB, MySQL", icon: <div className="flex gap-1"><SiMongodb /><SiMysql /></div> },
                  ],
                  gradient: "from-indigo-500 to-blue-500"
                },
                {
                  title: "Frameworks & Tools",
                  icon: <FaGlobe className="text-2xl" />,
                  skills: [
                    { name: "NodeJS & Express.js", icon: <div className="flex gap-1"><SiNodedotjs /><SiExpress /></div> },
                    { name: "GraphQL", icon: <SiGraphql /> },
                    { name: "React.js | Next.js", icon: <div className="flex gap-1"><SiReact /><SiNextdotjs /></div> },
                    { name: "Tailwindcss", icon: <SiTailwindcss /> },
                    { name: "Linux", icon: <SiLinux /> },
                    { name: "Git & Github", icon: <SiGithub /> },
                  ],
                  gradient: "from-cyan-500 to-blue-500"
                },
                {
                  title: "Core Concepts",
                  icon: <FaCogs className="text-2xl" />,
                  skills: [
                    { name: "Data Structures & Algorithms", icon: <MdDataObject /> },
                    { name: "RESTful APIs", icon: <MdApi /> },
                    { name: "CI/CD", icon: <IoServerOutline /> },
                    { name: "OOP", icon: <MdBuild /> },
                    { name: "UI/UX Design Principles", icon: <MdSettings /> },
                    { name: "Agile Methodologies", icon: <MdLeaderboard /> },
                  ],
                  gradient: "from-purple-500 to-pink-500"
                },
                {
                  title: "Soft Skills",
                  icon: <FaBriefcase className="text-2xl" />,
                  skills: [
                    { name: "Problem Solving & Collaboration", icon: <div className="flex gap-1"><MdSettings /><MdLeaderboard /></div> },
                    { name: "Communication", icon: <MdChat /> },
                    { name: "Adaptability & Learning", icon: <MdUpdate /> },
                    { name: "Time Management", icon: <MdTimer /> },
                    // { name: "Mentorship & Leadership", icon: <MdRecordVoiceOver /> },
                  ],
                  gradient: "from-emerald-500 to-teal-500"
                }
              ].map((category) => (
                <div
                  key={category.title}
                  className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-none shadow-slate-200/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-none"
                >
                  <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500"></div>
                  <div className="mb-6 flex items-center gap-3">
                    <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${category.gradient} text-white`}>
                      {category.icon}
                    </div>
                    <h3 className="text-lg font-bold text-slate-800">{category.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="group/item flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1.5 shadow-none transition-all duration-300 hover:scale-105 hover:border-indigo-300 hover:shadow-none"
                      >
                        <div className={`flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br ${category.gradient} text-white text-xs`}>
                          {skill.icon}
                        </div>
                        <span className="text-sm font-medium text-slate-600 group-hover/item:text-slate-900">{skill.name}</span>
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
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-500 to-teal-500 text-white">
                  <FaGraduationCap className="h-6 w-6" />
                </div>
                <h2 className="text-2xl font-bold text-slate-800 ">Skill-UPS</h2>
              </div>

              <div className="relative ml-3 border-l-2 border-indigo-200 space-y-8 pb-8">
                {[
                  {
                    date: "May 2023 – July 2023",
                    orgImg: "/img/microverse.png",
                    org: "Microverse Inc",
                    role: "Front End Software Development",
                    bullets: [
                      "Learning algorithms, data structures, and front-end development",
                      "Responsive UI design, component-based architecture, and performance optimization",
                      "Remote pair-programming using GitHub and industry-standard git-flow",
                      "Daily standup's with international developers and collaboration",
                    ],
                    accent: "from-indigo-500 to-purple-500"
                  },
                  {
                    date: "Feb 2023 - Nov 2023",
                    orgImg: "/img/lakehub.jpg",
                    org: "Lakehub Academy",
                    role: "Frontend Software Development",
                    bullets: [],
                    accent: "from-blue-500 to-cyan-500"
                  },
                  {
                    date: "Feb 2021 - May 2021",
                    orgImg: "/img/freecodecamp_logo.svg",
                    org: "FreeCodeCamp",
                    role: "Front End Development",
                    bullets: ["Responsive Web Design"],
                    accent: "from-green-500 to-emerald-500"
                  },
                ].map((edu) => (
                  <div key={edu.org} className="relative pl-8">
                    {/* Timeline Node */}
                    <div className="absolute -left-[9px] top-0 h-5 w-5 rounded-full border-4 border-white bg-indigo-500 ring-2 ring-indigo-100"></div>

                    <div className="group relative overflow-hidden rounded-xl border border-slate-200/50 bg-white p-6 transition-all duration-300 hover:scale-[1.02] hover:border-indigo-200 hover:shadow-none hover:shadow-indigo-100/40">
                      {/* Floating elements */}
                      <div className="absolute -top-6 -right-6 h-12 w-12 rounded-full bg-gradient-to-br from-indigo-400 to-purple-400"></div>
                      <div className="absolute -bottom-6 -left-6 h-12 w-12 rounded-full bg-gradient-to-br from-cyan-400 to-blue-400"></div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 rounded-full bg-indigo-50 px-3 py-1">
                          <FaCalendar className="h-3 w-3 text-indigo-600" />
                          <span className="text-sm font-medium text-indigo-600">{edu.date}</span>
                        </div>
                      </div>
                      <div className="mt-4 flex items-center gap-4">
                        <div className="relative">
                          <img src={edu.orgImg} alt={edu.org} className="h-12 w-12 rounded-xl object-cover" />
                        </div>
                        <div>
                          <h3 className="font-bold text-slate-800">{edu.org}</h3>
                          <p className="text-sm font-medium text-indigo-600">{edu.role}</p>
                        </div>
                      </div>
                      {edu.bullets.length > 0 && (
                        <ul className="mt-4 space-y-2 pl-4">
                          {edu.bullets.map((bullet, bulletIdx) => (
                            <li key={bulletIdx} className="flex items-start gap-2 text-sm text-slate-600">
                              <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-400"></div>
                              <span className='font-normal text-[16px]'>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience */}
            <div>
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-orange-500 to-red-500 text-white">
                  <FaBriefcase className="h-6 w-6" />
                </div>
                <h2 className="text-2xl font-bold text-slate-800">Experience</h2>
              </div>

              <div className="relative ml-3 border-l-2 border-indigo-200 space-y-8 pb-8">
                {[
                  {
                    date: "Feb 2024 - Present",
                    orgImg: "/img/snavelogo.png",
                    org: "Snave Webhub Africa",
                    role: "Frontend Developer",
                    location: "Remote",
                    bullets: [
                      "Developed high-performance React applications with optimized rendering",
                      "Improved frontend performance with code-splitting and lazy loading",
                      "Integrated OAuth2 and SAML authentication systems",
                      "Led transition to modular component-based architecture",
                      "Mentored junior developers in React and TypeScript",
                    ],
                    accent: "from-indigo-500 to-purple-500"
                  },
                  {
                    date: "Oct 2023 – Dec 2023",
                    orgImg: "/img/microverse.png",
                    org: "Microverse Inc",
                    role: "Peer to Peer Code Reviewer",
                    location: "Remote",
                    bullets: [
                      "Peer-to-peer code reviews for front-end applications, focusing on React and Redux best practices",
                      "Collaborated daily with international developers to debug and optimize collaborative projects",
                      "Collaborated with developers on Git workflow and collaborative coding standards",
                      "Peer to peer technical discussions to solve complex front-end coding challenges",
                    ],
                    accent: "from-blue-500 to-cyan-500"
                  },
                  {
                    date: "Nov 2021 - June 2024",
                    orgImg: "/img/kadianga-logo.jpeg",
                    org: "Kadianga Electricals",
                    role: "Frontend Developer",
                    location: "Remote",
                    bullets: [
                      "Developed scalable EPR – POS and HR platform using React",
                      "Integrated payment and notification APIs",
                      "Optimized UI performance with advanced rendering",
                      "Built reusable, modular UI components",
                      "Automated frontend CI/CD pipelines",
                    ],
                    accent: "from-green-500 to-emerald-500"
                  },
                  {
                    date: "Oct 2021 - June 2023",
                    orgImg: "/img/Moscom-logo.png",
                    org: "Moscom Computer Systems",
                    role: "Frontend Developer",
                    location: "Kisumu, Kenya",
                    bullets: [
                      "Contributed to feature development using modern tech stack",
                      "Implemented responsive UI components and improved accessibility",
                      "Collaborated with UX/UI designers and product managers",
                      "Performed network troubleshooting and maintenance",
                    ],
                    accent: "from-orange-500 to-red-500"
                  },
                ].map((exp) => (
                  <div key={exp.org} className="relative pl-8">
                    {/* Timeline Node */}
                    <div className="absolute -left-[9px] top-0 h-5 w-5 rounded-full border-4 border-white bg-indigo-500 ring-2 ring-indigo-100"></div>

                    <div className="group relative overflow-hidden rounded-xl border border-slate-200/50 bg-white p-6 transition-all duration-300 hover:scale-[1.02] hover:border-indigo-200 hover:shadow-none">
                      {/* Floating elements */}
                      <div className="absolute -top-6 -right-6 h-12 w-12 rounded-full bg-gradient-to-br from-indigo-400 to-purple-400"></div>
                      <div className="absolute -bottom-6 -left-6 h-12 w-12 rounded-full bg-gradient-to-br from-cyan-400 to-blue-400"></div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 rounded-full bg-indigo-50 px-3 py-1">
                          <FaCalendar className="h-3 w-3 text-indigo-600" />
                          <span className="text-sm font-medium text-indigo-600">{exp.date}</span>
                        </div>
                        <span className="inline-flex items-center rounded-xl bg-indigo-50 px-3 py-1 text-sm font-medium text-indigo-600">
                          {exp.location}
                        </span>
                      </div>
                      <div className="mt-4 flex items-center gap-4">
                        <div className="relative">
                          <img src={exp.orgImg} alt={exp.org} className="h-12 w-12 rounded-xl object-cover" />
                        </div>
                        <div>
                          <h3 className="font-bold text-slate-800">{exp.org}</h3>
                          <p className="text-sm font-medium text-indigo-600">{exp.role}</p>
                        </div>
                      </div>
                      <ul className="mt-4 space-y-2 pl-4">
                        {exp.bullets.map((bullet, bulletIdx) => (
                          <li key={bulletIdx} className="flex items-start gap-2 text-sm text-slate-600">
                            <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-400"></div>
                            <span className='font-normal text-[16px]'>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
