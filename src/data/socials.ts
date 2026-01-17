import type { IconType } from "react-icons";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaFileDownload,
} from "react-icons/fa";

export interface SocialLink {
  id: string;
  href: string;
  label: string;
  icon: IconType;
  className?: string;
  sidebarColor: string;
  sidebarBg?: string;
}

export const socialLinks: SocialLink[] = [
  {
    id: "linkedin",
    href: "https://www.linkedin.com/in/otwere-evans/",
    label: "LinkedIn Profile",
    icon: FaLinkedin,
    className: "link-icon",
    sidebarColor: "text-slate-400 group-hover:text-white",
  },
  {
    id: "email",
    href: "mailto:otweree@gmail.com",
    label: "Email",
    icon: FaEnvelope,
    className: "link-icon",
    sidebarColor: "text-slate-400 group-hover:text-white",
  },
  {
    id: "github",
    href: "https://github.com/otwere",
    label: "GitHub Profile",
    icon: FaGithub,
    className: "link-icon",
    sidebarColor: "text-slate-400 group-hover:text-white",
  },
];

export const resumeLink: SocialLink = {
  id: "resume",
  href: "https://docs.google.com/document/d/1Zs-ZkdMmcRVHlNIjNMsdxCwMAc2iSon8OHmKuxATSKk/edit?usp=sharing",
  label: "Download CV",
  icon: FaFileDownload,
  sidebarColor: "text-indigo-300 group-hover:text-indigo-200",
  sidebarBg:
    "bg-linear-to-r from-indigo-500/20 to-purple-500/20 hover:from-indigo-500/30 hover:to-purple-500/30",
};
