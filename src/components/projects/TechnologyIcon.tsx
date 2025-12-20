import { FaCode, FaServer } from "react-icons/fa";
import {
    SiTypescript,
    SiReact,
    SiNextdotjs,
    SiTailwindcss,
    SiVite,
} from "react-icons/si";
import type { JSX } from "react";

export const TechnologyIcon = ({ tech }: { tech: string }) => {
    const icons: { [key: string]: JSX.Element } = {
        React: <SiReact className="h-4 w-4 text-cyan-500" />,
        TypeScript: <SiTypescript className="h-4 w-4 text-blue-600" />,
        "Next.js": <SiNextdotjs className="h-4 w-4 text-slate-900" />,
        Tailwind: <SiTailwindcss className="h-4 w-4 text-cyan-400" />,
        "Tailwind CSS": <SiTailwindcss className="h-4 w-4 text-cyan-400" />,
        Vite: <SiVite className="h-4 w-4 text-purple-500" />,
        "Node.js": <FaServer className="h-4 w-4 text-green-600" />,
        MongoDB: <FaServer className="h-4 w-4 text-green-500" />,
        Express: <FaServer className="h-4 w-4 text-gray-600" />,
        Stripe: <FaServer className="h-4 w-4 text-purple-600" />,
        "D3.js": <FaCode className="h-4 w-4 text-orange-500" />,
        Mapbox: <FaCode className="h-4 w-4 text-blue-400" />,
        PostgreSQL: <FaServer className="h-4 w-4 text-blue-700" />,
        NestJS: <SiNextdotjs className="h-4 w-4 text-red-500" />,
    };

    return icons[tech] || <FaCode className="h-4 w-4 text-slate-600" />;
};
