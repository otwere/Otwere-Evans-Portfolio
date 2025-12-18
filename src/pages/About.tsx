import { FaCode, FaCogs, FaGlobe, FaDownload, FaCalendar, FaGraduationCap, FaBriefcase } from 'react-icons/fa';
import { SiJavascript, SiHtml5, SiRuby, SiTypescript, SiPython, SiMongodb, SiMysql, SiNodedotjs, SiGraphql, SiReact, SiNextdotjs, SiTailwindcss, SiLinux, SiGithub, SiExpress } from 'react-icons/si';
import { RiMailLine, RiMapPinLine, RiUserLine, RiBookLine } from 'react-icons/ri';
import { IoServerOutline } from 'react-icons/io5';
import { MdDataObject, MdApi, MdSettings, MdBuild, MdLeaderboard, MdChat, MdUpdate, MdTimer, MdRecordVoiceOver } from 'react-icons/md';
import { SEO } from "../components/SEO";

export default function About() {
  return (
    <>
      <SEO
        title="About Me"
        description="Learn more about Otwere Evans, Front-End Software Developer from Nairobi, Kenya. Explore my skills, education, and professional journey."
        keywords="About Otwere Evans, Software Developer Bio, Skills, Education, Experience"
      />
      <section id="about" className="animate-enter relative overflow-hidden bg-linear-to-br from-slate-50 via-white to-indigo-50/30 px-2 py-20">
        {/* Decorative elements */}
        <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-gradient-to-r from-indigo-300/20 to-purple-300/20 blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-gradient-to-r from-cyan-300/20 to-blue-300/20 blur-3xl"></div>

        <div className="relative mx-auto w-full max-w-408">
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
              I'm <strong className="font-bold text-indigo-600">Otwere Evans</strong>,Front-End Software Developer dedicated to building high-performance user interfaces. I transform ideas into seamless digital experiences using React, TypeScript, and Next.js to deliver exceptional interactions. With a strong foundation in UI/UX and performance optimization, I develop scalable, consumer-centric applications using Agile methodologies. As I grow, I'm expanding into full-stack development to contribute innovative solutions across startups and enterprises.
            </p>

            {/* Personal Info Grid */}
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {[
                { icon: <RiUserLine className="text-sm" />, label: "Nationality", value: "Kenyan" },
                { icon: <RiMapPinLine className="text-sm" />, label: "City", value: "Nairobi, Kenya" },
                { icon: <RiMailLine className="text-sm" />, label: "Mail", value: "otweree@gmail.com" },
                { icon: <RiBookLine className="text-sm" />, label: "Hobbies", value: "Reading Books & Tech Documentaries" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="group/item flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 shadow-none transition-all duration-300 hover:scale-95 hover:border-indigo-300 hover:shadow-none hover:shadow-indigo-100"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 text-white shadow-none">
                    {item.icon}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 leading-tight">{item.label}:</span>
                    <span className="text-sm font-semibold text-slate-700 leading-tight group-hover/item:text-indigo-600 transition-colors">{item.value}</span>
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
                <h2 className="text-2xl font-bold text-slate-800">Education</h2>
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
                          {/* <div className={`absolute -bottom-1 -right-1 h-4 w-4 rounded-full bg-gradient-to-br ${edu.accent}`}></div> */}
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
                    role: "Student Code Reviewer",
                    location: "Remote",
                    bullets: [
                      "Conducted peer-to-peer code reviews for front-end applications, focusing on React and Redux best practices",
                      "Collaborated daily with international developers to debug and optimize collaborative projects",
                      "Collaborated with developers on Git workflow and collaborative coding standards",
                      "Facilitated technical discussions to solve complex front-end coding challenges",
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

                    <div className="group relative overflow-hidden rounded-xl border border-slate-200/50 bg-white p-6 transition-all duration-300 hover:scale-95 hover:border-indigo-200 hover:shadow-none">
                      {/* Floating elements */}
                      <div className="absolute -top-6 -right-6 h-12 w-12 rounded-full bg-gradient-to-br from-indigo-400 to-purple-400"></div>
                      <div className="absolute -bottom-6 -left-6 h-12 w-12 rounded-full bg-gradient-to-br from-cyan-400 to-blue-400"></div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 rounded-full bg-indigo-50 px-3 py-1">
                          <FaCalendar className="h-3 w-3 text-indigo-600" />
                          <span className="text-sm font-medium text-indigo-600">{exp.date}</span>
                        </div>
                        <span className="inline-flex items-center rounded-xl bg-indigo-50 px-3 py-1 text-sm font-semibold text-indigo-600">
                          {exp.location}
                        </span>
                      </div>
                      <div className="mt-4 flex items-center gap-4">
                        <div className="relative">
                          <img src={exp.orgImg} alt={exp.org} className="h-12 w-12 rounded-xl object-cover" />
                          {/* <div className={`absolute -bottom-1 -right-1 h-4 w-4 rounded-full bg-gradient-to-br ${exp.accent}`}></div> */}
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
