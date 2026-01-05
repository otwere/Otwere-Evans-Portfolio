import { useEffect, useState } from "react";

export default function BackToTop() {
  const [show, setShow] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      setProgress(height > 0 ? (y / height) * 100 : 0);
      setShow(y > 10);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = () => {
    if (window.scrollY > 5) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const el = document.getElementById("about");
      el?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <button
      aria-label="Back to top"
      onClick={handleClick}
      style={
        { ["--progress" as string]: `${progress}%` } as React.CSSProperties
      }
      className={`back-to-top fixed bottom-6 right-6 z-50 flex h-11 w-11 items-center justify-center rounded-full text-white transition-all duration-300 ${
        show ? "opacity-100 show" : "opacity-0"
      } accent-bg shadow-sm`}
    >
      ↑
    </button>
  );
}
