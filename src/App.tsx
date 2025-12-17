import { BrowserRouter, Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { RiMenuLine } from "react-icons/ri";
import type { Section } from "./hooks/useSection";
import Aside from "./components/Aside";
import BackToTop from "./components/BackToTop";
import { useEffect, useRef, useState } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import { SidebarProvider, useSidebar } from "./context/SidebarContext";
import "./App.css";

function AppShell() {
  const navigate = useNavigate();
  const location = useLocation();
  const { isOpen, isCollapsed, toggleOpen, closeMobile } = useSidebar();
  const [routeLoading, setRouteLoading] = useState(false);
  const mainRef = useRef<HTMLElement>(null);

  const pathToSection = (pathname: string): Section => {
    if (pathname.includes("/about")) return "about";
    if (pathname.includes("/projects")) return "projects";
    if (pathname.includes("/contact")) return "contact";
    return "home";
  };
  const section = pathToSection(location.pathname);

  // Detect route changes and show a short loading overlay
  useEffect(() => {
    const id = requestAnimationFrame(() => setRouteLoading(true));
    return () => cancelAnimationFrame(id);
  }, [location.key]);

  useEffect(() => {
    // End loading after a small delay to avoid flicker and allow assets to settle
    const t = setTimeout(() => setRouteLoading(false), 1000);
    return () => clearTimeout(t);
  }, [location.key]);

  return (
    <div className="smooth-scroll font-poppins min-h-screen bg-slate-50 text-slate-900">
      {/* Mobile header toggle button */}
      <button
        aria-label="Toggle Menu"
        aria-expanded={isOpen}
        aria-controls="site-drawer"
        className="fixed left-4 top-4 z-30 rounded-lg border border-slate-200/50 bg-white/80 backdrop-blur-md p-2.5 text-slate-700 md:hidden hover:bg-white transition-colors"
        onClick={toggleOpen}
      >
        <RiMenuLine className="h-5 w-5" />
      </button>

      <Aside
        current={section}
        onNavigate={(s) => {
          const to =
            s === "home" ? "/" : s === "about" ? "/about" : s === "projects" ? "/projects" : "/contact";
          navigate(to);
          closeMobile();
        }}
      />

      <main
        ref={mainRef}
        className={`transition-all duration-300 md:ml-0 ${isCollapsed ? "md:pl-20" : "md:pl-80"}`}
        onClick={() => {
          if (isOpen) closeMobile();
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <BackToTop />

      {/* Route transition loader overlay */}
      {routeLoading && (
        <div className="route-loader-overlay" aria-live="polite" aria-busy="true">
          <div className="route-loader"></div>
        </div>
      )}
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <SidebarProvider>
        <AppShell />
      </SidebarProvider>
    </BrowserRouter>
  );
}
