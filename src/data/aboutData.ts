import { FaCode, FaCogs, FaGlobe, FaBriefcase } from 'react-icons/fa';
import { SiJavascript, SiHtml5, SiRuby, SiTypescript, SiMongodb, SiMysql, SiNodedotjs, SiGraphql, SiReact, SiNextdotjs, SiTailwindcss, SiLinux, SiGithub, SiExpress, SiJest } from 'react-icons/si';
import { RiMailLine, RiMapPinLine, RiUserLine, RiBookLine } from 'react-icons/ri';
import { IoServerOutline } from 'react-icons/io5';
import { MdDataObject, MdApi, MdSettings, MdBuild, MdLeaderboard, MdChat, MdUpdate, MdTimer } from 'react-icons/md';

export const personalBlobs = [
    {
        icon: RiUserLine,
        label: "Nationality",
        value: "Kenyan",
        gradientId: "grad1",
        path: "M44.7,-76.4C58.1,-69.2,69.2,-58.1,76.4,-44.7C83.7,-31.3,87.1,-15.7,85.8,-0.8C84.4,14.1,78.3,28.2,70.1,40.1C61.9,52,51.6,61.7,39.7,69.5C27.8,77.3,13.9,83.1,-0.5,83.9C-14.9,84.7,-29.8,80.5,-42.6,73.1C-55.4,65.7,-66,55.1,-74.6,42.4C-83.2,29.7,-89.7,14.9,-90.1,-0.2C-90.5,-15.3,-84.9,-30.6,-75,-43C-65.1,-55.4,-51,-64.8,-36.8,-71.6C-22.6,-78.4,-8.3,-82.6,3,-87.8C14.3,-93,28.6,-99.3,44.7,-76.4Z",
    },
    {
        icon: RiMapPinLine,
        label: "City",
        value: "Nairobi, Kenya",
        gradientId: "grad2",
        path: "M38.1,-63.4C49.1,-56.3,57.6,-45.3,64.2,-33.4C70.8,-21.5,75.4,-8.6,73.6,3.1C71.8,14.8,63.5,25.4,54.7,33.9C45.9,42.4,36.5,48.9,26,55.3C15.5,61.7,3.9,68.1,-8.5,69.5C-20.9,70.9,-34,67.3,-45.1,60C-56.2,52.7,-65.2,41.7,-71.2,29.3C-77.2,16.9,-80.2,3.1,-78.5,-9.7C-76.8,-22.5,-70.4,-34.3,-61.2,-44C-52,-53.7,-40,-61.3,-27.7,-67.6C-15.4,-73.9,-2.7,-78.9,10.6,-78.4C23.9,-77.9,32.4,-70.5,38.1,-63.4Z",
    },
    {
        icon: RiMailLine,
        label: "Mail",
        value: "otweree@gmail.com",
        gradientId: "grad3",
        path: "M43.7,-75.4C55.4,-67.7,62.8,-53.4,69.1,-39.8C75.4,-26.2,80.6,-13.1,80.5,-0.1C80.4,12.9,74.9,25.8,66.8,36.8C58.7,47.8,48,56.9,36,65.2C24,73.5,10.7,81.1,-2.9,86.1C-16.5,91.1,-30.3,93.5,-42.6,87.8C-54.9,82.1,-65.7,68.3,-72.4,54.1C-79.1,39.9,-81.7,25.3,-82.1,10.7C-82.5,-3.9,-80.7,-18.5,-75.1,-31.9C-69.5,-45.3,-60.1,-57.5,-48.1,-65C-36.1,-72.5,-21.5,-75.3,-5.7,-72C10.1,-68.7,21.9,-79.1,43.7,-75.4Z",
    },
    {
        icon: RiBookLine,
        label: "Hobbies",
        value: "Tech Prodcast",
        gradientId: "grad4",
        path: "M41.7,-73.1C53.7,-66.2,63.1,-53.5,69.4,-40.1C75.7,-26.7,78.9,-12.6,78.7,1.4C78.5,15.4,74.9,29.3,67.5,41.1C60.1,52.9,48.9,62.6,36.5,69.9C24.1,77.2,12.1,82,0.3,81.5C-11.5,81,-23,75.2,-34,68C-45,60.8,-55.5,52.2,-64.1,41.4C-72.7,30.6,-79.4,17.6,-82.4,3.4C-85.4,-10.8,-84.7,-26.2,-78.2,-39C-71.7,-51.8,-59.4,-62.1,-45.7,-68.2C-32,-74.3,-16,-76.3,-0.1,-76.1C15.8,-75.9,31.6,-73.5,41.7,-73.1Z",
    },
];

export const skillsData = [
    {
        title: "Languages",
        icon: FaCode,
        skills: [
            { name: "Javascript", icon: SiJavascript },
            { name: "HTML5 & CSS3", icon: SiHtml5 },
            { name: "Ruby", icon: SiRuby },
            { name: "Typescript", icon: SiTypescript },
            { name: "MongoDB", icon: SiMongodb },
            { name: "MySQL", icon: SiMysql },
        ],
        gradient: "from-indigo-500 to-blue-500"
    },
    {
        title: "Frameworks & Tools",
        icon: FaGlobe,
        skills: [
            { name: "NodeJS", icon: SiNodedotjs },
            { name: "Express.js", icon: SiExpress },
            { name: "GraphQL", icon: SiGraphql },
            { name: "React.js", icon: SiReact },
            { name: "Next.js", icon: SiNextdotjs },
            { name: "Tailwindcss", icon: SiTailwindcss },
            { name: "Linux", icon: SiLinux },
            { name: "Git & Github", icon: SiGithub },
        ],
        gradient: "from-cyan-500 to-blue-500"
    },
    {
        title: "Core Concepts",
        icon: FaCogs,
        skills: [
            { name: "Data Structures & Algorithms", icon: MdDataObject },
            { name: "RESTful APIs", icon: MdApi },
            { name: "CI/CD", icon: IoServerOutline },
            { name: "OOP", icon: MdBuild },
            { name: "UI/UX Design Principles", icon: MdSettings },
            { name: "Agile Methodologies", icon: MdLeaderboard },
            { name: "Jest", icon: SiJest },
        ],
        gradient: "from-purple-500 to-pink-500"
    },
    {
        title: "Soft Skills",
        icon: FaBriefcase,
        skills: [
            { name: "Problem Solving", icon: MdSettings },
            { name: "Collaboration", icon: MdLeaderboard },
            { name: "Communication", icon: MdChat },
            { name: "Adaptability & Learning", icon: MdUpdate },
            { name: "Time Management", icon: MdTimer },
        ],
        gradient: "from-emerald-500 to-teal-500"
    }
];

export const educationData = [
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
];

export const experienceData = [
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
];
