import { createContext, useContext, useState, useEffect, useCallback } from "react";
import type { ReactNode } from "react";

interface SidebarContextType {
    isOpen: boolean;
    isCollapsed: boolean;
    toggleOpen: () => void;
    closeMobile: () => void;
    toggleCollapse: () => void;
    setOpen: (open: boolean) => void;
}

const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

const STORAGE_KEY_COLLAPSED = "sidebar:collapsed";
const MOBILE_BREAKPOINT = 768;

export function SidebarProvider({ children }: { children: ReactNode }) {
    const [isOpen, setIsOpen] = useState(false);
    const [isCollapsed, setIsCollapsed] = useState(() => {
        // Lazy initialization for performance and SSR safety check
        if (typeof window === "undefined") return false;
        // Default to collapsed if saved user preference exists and on desktop
        const saved = localStorage.getItem(STORAGE_KEY_COLLAPSED);
        const isDesktop = window.matchMedia(`(min-width: ${MOBILE_BREAKPOINT}px)`).matches;
        return isDesktop && saved === "1";
    });

    // Handle collapsible persistence
    useEffect(() => {
        localStorage.setItem(STORAGE_KEY_COLLAPSED, isCollapsed ? "1" : "0");
    }, [isCollapsed]);

    // Handle screen resize to auto-reset states or enforce rules
    useEffect(() => {
        const media = window.matchMedia(`(min-width: ${MOBILE_BREAKPOINT}px)`);
        const handleResize = (e: MediaQueryListEvent | MediaQueryList) => {
            if (e.matches) {
                // Desktop: Ensure modal menu is closed
                setIsOpen(false);
            } else {
                // Mobile: Ensure sidebar is expanded (not collapsed mode) visually if shown
                // I typically don't persist collapse state on mobile, effectively ignored by CSS logic usually
            }
        };

        // Initial check
        handleResize(media);

        media.addEventListener("change", handleResize);
        return () => media.removeEventListener("change", handleResize);
    }, []);

    const toggleOpen = useCallback(() => setIsOpen((prev) => !prev), []);
    const closeMobile = useCallback(() => setIsOpen(false), []);

    const toggleCollapse = useCallback(() => {
        setIsCollapsed((prev) => !prev);
    }, []);

    const setOpen = useCallback((open: boolean) => setIsOpen(open), []);

    return (
        <SidebarContext.Provider
            value={{
                isOpen,
                isCollapsed,
                toggleOpen,
                closeMobile,
                toggleCollapse,
                setOpen,
            }}
        >
            {children}
        </SidebarContext.Provider>
    );
}

export function useSidebar() {
    const context = useContext(SidebarContext);
    if (context === undefined) {
        throw new Error("useSidebar must be used within a SidebarProvider");
    }
    return context;
}
