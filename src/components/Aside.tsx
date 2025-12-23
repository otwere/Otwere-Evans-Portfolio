import { useEffect, useRef, memo } from "react";
import type { Section } from "../hooks/useSection";
import { useSidebar } from "../context/SidebarContext";
import { FaHome, FaUser, FaProjectDiagram, FaEnvelope, FaGithub, FaLinkedin, FaFileDownload } from 'react-icons/fa';
import { SiTypescript, SiReact, SiNextdotjs, SiTailwindcss, SiNodedotjs, SiExpress } from 'react-icons/si';
import { RiCloseLine, RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';

// --- Configuration ---

const NAV_ITEMS = [
  { id: "home", label: "Home", icon: FaHome },
  { id: "about", label: "About", icon: FaUser },
  { id: "projects", label: "Projects", icon: FaProjectDiagram },
  { id: "contact", label: "Contact", icon: FaEnvelope },
] as const;

const SOCIAL_LINKS = [
  {
    id: "github",
    href: "https://github.com/otwere",
    label: "GitHub Profile",
    icon: FaGithub,
    colorClass: "text-slate-400 group-hover:text-white"
  },
  {
    id: "linkedin",
    href: "https://www.linkedin.com/in/otwere-evans/",
    label: "LinkedIn Profile",
    icon: FaLinkedin,
    colorClass: "text-slate-400 group-hover:text-white"
  },
  {
    id: "resume",
    href: "https://drive.google.com/file/d/1Sxf5ova67vlXEuBCC1Q_ZD54TOTq8Env/view?usp=drive_link",
    label: "Download CV",
    icon: FaFileDownload,
    colorClass: "text-indigo-300 group-hover:text-indigo-200",
    bgClass: "bg-linear-to-r from-indigo-500/20 to-purple-500/20 hover:from-indigo-500/30 hover:to-purple-500/30"
  },
];

const TECH_BADGES = [
  { icon: SiReact, label: "React.js", color: "text-cyan-500" },
  { icon: SiTypescript, label: "TypeScript", color: "text-blue-600" },
  { icon: SiNextdotjs, label: "Next.js", color: "text-slate-900" },
  { icon: SiTailwindcss, label: "Tailwindcss", color: "text-cyan-400" },
  { icon: SiNodedotjs, label: "Node.js", color: "text-green-500" },
  { icon: SiExpress, label: "Express.js", color: "text-slate-500" },
];

// --- Sub-Components ---

const UserProfile = memo(({ collapsed, onNavigate }: { collapsed: boolean; onNavigate: (s: Section) => void }) => (
  <header className={`pt-12 pb-8 relative ${collapsed ? 'px-0' : ''}`}>
    <div className="absolute -top-4 -right-4 h-20 w-20 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-full blur-2xl"></div>
    <div className={`relative ${collapsed ? 'flex justify-center' : ''}`}>
      <button
        onClick={() => onNavigate("home")}
        className={`inline-flex items-center gap-3 group text-left ${collapsed ? 'flex-col' : ''}`}
      >
        <div className="relative">
          <div className={`${collapsed ? 'h-12 w-10 mt-2' : 'h-12 w-12'} rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center transition-all duration-300 group-hover:scale-95 shadow-indigo-500/20`}>
            <span className="text-lg font-bold text-white">OE</span>
          </div>
        </div>
        {!collapsed && (
          <div className="flex flex-col leading-tight">
            <h1 className="text-2xl font-bold tracking-tight text-slate-900">
              Otwere Evans
            </h1>

            <p className="-mt-1 text-xs sm:text-sm font-medium text-slate-500 whitespace-nowrap">
              Frontend Software Developer
            </p>
          </div>

        )}
      </button>
    </div>
    <div className="border-b border-slate-200 mt-2.5"></div>

    {!collapsed && (
      <div className="my-2 pb-2 overflow-hidden w-full relative">
        {/* Gradient Masks for smooth fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-4 bg-gradient-to-r from-slate-50 to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-4 bg-gradient-to-l from-slate-50 to-transparent z-10"></div>

        <div className="animate-marquee gap-3">
          {[...TECH_BADGES, ...TECH_BADGES, ...TECH_BADGES, ...TECH_BADGES].map((badge, i) => (
            <TechBadge key={`badge-${i}`} icon={badge.icon} label={badge.label} color={badge.color} />
          ))}
        </div>
        <div className="border-b border-slate-200 mt-2"></div>
      </div>
    )}
  </header>

));


const TechBadge = ({ icon: Icon, label, color }: { icon: any; label: string; color: string }) => (
  <div className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-full bg-white border border-slate-200  transition-transform hover:scale-105">
    <Icon className={`h-3.5 w-3.5 ${color}`} />
    <span className="text-xs text-slate-600">{label}</span>
  </div>
);

const NavItem = memo(({
  item,
  isActive,
  collapsed,
  onClick
}: {
  item: typeof NAV_ITEMS[number];
  isActive: boolean;
  collapsed: boolean;
  onClick: () => void;
}) => {
  const Icon = item.icon;
  return (
    <li>
      <button
        className={`group relative flex items-center  ${collapsed ? 'justify-center px-3' : 'gap-4 px-4'} w-full py-3 text-left transition-all duration-300 rounded-lg ${isActive
          ? "bg-indigo-50 text-indigo-700"
          : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
          }`}
        aria-current={isActive ? "page" : undefined}
        title={item.label}
        onClick={onClick}
      >
        <div className={`transition-transform duration-300 ${isActive ? "scale-110 text-indigo-600" : "text-slate-400 group-hover:text-indigo-600"}`}>
          <Icon className="h-5 w-5" />
        </div>
        {!collapsed && <span className="font-semibold  capitalize text-sm">{item.id}</span>}
        {isActive && (
          <div className={`absolute ${collapsed ? 'top-2 right-2' : 'right-4'} h-1.5 w-1.5 rounded-full bg-indigo-500 animate-pulse`}></div>
        )}
        {!collapsed && !isActive && (
          <div className="absolute left-14 w-0 h-5 border-l border-slate-200 group-hover:border-slate-300 transition-colors"></div>
        )}
      </button>
    </li>
  );
});

// --- Main Component ---

type Props = {
  current: Section;
  onNavigate: (s: Section) => void;
};

export default function Sidebar({ current, onNavigate }: Props) {
  const { isOpen, isCollapsed, closeMobile, toggleCollapse } = useSidebar();
  const asideRef = useRef<HTMLElement>(null);

  // Focus trap and keyboard navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") closeMobile();
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [isOpen, closeMobile]);

  return (
    <>
      <div
        className={`fixed inset-0 z-10 bg-slate-50 backdrop-blur-sm transition-opacity md:hidden ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        onClick={closeMobile}
        aria-hidden="true"
      />

      <aside
        id="site-drawer"
        ref={asideRef}
        aria-hidden={!isOpen}
        aria-label="Site navigation"
        className={`fixed left-0 top-0 z-20 h-full w-72 ${isCollapsed ? "md:w-20" : "md:w-80"} bg-slate-50 border-r border-slate-200 transition-all duration-300 ease-out transform md:translate-x-0 ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="absolute inset-0 overflow-y-auto p-4 md:p-6 scrollbar-thin scrollbar-thumb-slate-200 scrollbar-track-transparent">
          {/* Mobile Close Button */}
          <button
            className="absolute right-3 top-3 z-30 md:hidden rounded-lg p-2 hover:bg-slate-200  transition-colors"
            onClick={closeMobile}
            aria-label="Close navigation"
          >
            <RiCloseLine className="h-5 w-5 text-slate-500" />
          </button>

          {/* Desktop Collapse Toggle */}
          <button
            type="button"
            aria-pressed={isCollapsed}
            aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
            className="hidden md:flex absolute top-6 right-4 items-center justify-center w-8 h-8 rounded-full bg-white/90 border border-slate-200 text-slate-400 hover:text-slate-900 hover:bg-slate-100 hover:border-slate-300 transition-all duration-200 hover:scale-105 z-10"
            onClick={toggleCollapse}
          >
            {isCollapsed ? <RiArrowRightSLine className="h-4 w-4" /> : <RiArrowLeftSLine className="h-4 w-4" />}
          </button>

          <UserProfile collapsed={isCollapsed} onNavigate={onNavigate} />

          {/* Navigation Items */}
          <nav className="mt-6">
            {!isCollapsed && (
              <div className="mb-3 px-2">
                <h2 className="text-xs font-semibold uppercase tracking-wider text-slate-400">Navigation</h2>
              </div>
            )}
            <ul className="space-y-1.5">
              {NAV_ITEMS.map((item) => (
                <NavItem
                  key={item.id}
                  item={item}
                  isActive={current === item.id}
                  collapsed={isCollapsed}
                  onClick={() => {
                    onNavigate(item.id);
                    closeMobile();
                  }}
                />
              ))}
            </ul>
          </nav>

          {/* Connect Section */}
          <div className={`mt-10 ${isCollapsed ? 'px-0' : ''}`}>
            {!isCollapsed && (
              <div className="mb-3 px-2">
                <h2 className="text-xs font-semibold uppercase tracking-wider text-slate-400">Connect</h2>
              </div>
            )}
            <div className={`flex ${isCollapsed ? 'flex-col gap-2 px-2' : 'gap-3 px-2'}`}>
              {SOCIAL_LINKS.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group ${isCollapsed ? 'p-3' : 'p-3.5'} rounded-xl bg-white border border-slate-200 text-center  hover:bg-slate-50 transition-all duration-300 hover:scale-95`}
                    aria-label={link.label}
                    title={link.label}
                  >
                    <Icon className={`mx-auto h-5 w-5 transition-colors text-slate-400 group-hover:text-slate-600`} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Footer */}
          {!isCollapsed && (
            <footer className="mt-12 px-2">
              <div className="pt-5 border-t border-slate-200">
                <p className="text-sm font-medium text-slate-600 text-center">
                  © {new Date().getFullYear()} Otwere Evans
                </p>
              </div>
            </footer>
          )}
        </div>

        {/* Accent Line */}
        <div className="absolute top-0 bottom-0 right-0 w-px bg-gradient-to-b from-transparent via-slate-200 to-transparent"></div>
      </aside>
    </>
  );
}
