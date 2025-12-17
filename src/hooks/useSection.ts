import { useState, useCallback } from "react";

export type Section = "home" | "about" | "projects" | "contact";

export function useSection(initial: Section = "home") {
  const [section, setSection] = useState<Section>(initial);
  const isActive = useCallback((s: Section) => section === s, [section]);
  const navigate = useCallback((s: Section) => setSection(s), []);
  return { section, isActive, navigate };
}

