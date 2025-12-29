import { FaGithub, FaLinkedin, FaEnvelope, FaFileDownload } from 'react-icons/fa';

export const socialLinks = [
    {
        id: "linkedin",
        href: "https://www.linkedin.com/in/otwere-evans/",
        label: "LinkedIn Profile",
        icon: FaLinkedin,
        className: "link-icon",
        sidebarColor: "text-slate-400 group-hover:text-white"
    },
    {
        id: "email",
        href: "mailto:otweree@gmail.com",
        label: "Email",
        icon: FaEnvelope, 
        className: "link-icon",
        sidebarColor: "text-slate-400 group-hover:text-white"
    },
    {
        id: "github",
        href: "https://github.com/otwere",
        label: "GitHub Profile",
        icon: FaGithub,
        className: "link-icon",
        sidebarColor: "text-slate-400 group-hover:text-white"
    }
];

export const resumeLink = {
    id: "resume",
    href: "https://drive.google.com/file/d/1Sxf5ova67vlXEuBCC1Q_ZD54TOTq8Env/view?usp=drive_link",
    label: "Download CV",
    icon: FaFileDownload,
    sidebarColor: "text-indigo-300 group-hover:text-indigo-200",
    sidebarBg: "bg-linear-to-r from-indigo-500/20 to-purple-500/20 hover:from-indigo-500/30 hover:to-purple-500/30"
};
