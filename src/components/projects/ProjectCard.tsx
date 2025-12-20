import { FaExternalLinkAlt, FaCode, FaProjectDiagram } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import type { Project } from "../../types/project";
import { TechnologyIcon } from "./TechnologyIcon";
import { memo } from "react";

type ProjectCardProps = {
    project: Project;
    index: number;
    onOpenModal: (project: Project) => void;
};

export const ProjectCard = memo(({ project, index, onOpenModal }: ProjectCardProps) => {
    return (
        <div
            className="group relative overflow-hidden rounded-2xl bg-white border border-slate-100 transition-all duration-500 md:hover:-translate-y-2"
            style={{ animationDelay: `${index * 100}ms` }}
        >
            {/* Category Badge */}
            {project.category && (
                <div className="absolute top-4 right-4 z-10">
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700 backdrop-blur-sm">
                        <FaProjectDiagram className="h-3 w-3" />
                        {project.category}
                    </span>
                </div>
            )}

            {/* Image Container */}
            <div className="relative h-48 sm:h-56 w-full overflow-hidden bg-gradient-to-r from-slate-50 to-slate-100">
                <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-700 md:group-hover:scale-110"
                    loading="lazy"
                    onError={(e) => {
                        e.currentTarget.src =
                            "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='225' viewBox='0 0 400 225'%3E%3Crect width='400' height='225' fill='%23f8fafc'/%3E%3Ctext x='50%25' y='50%25' font-family='Arial' font-size='16' fill='%2394a3b8' text-anchor='middle' dominant-baseline='middle'%3EProject Image%3C/text%3E%3C/svg%3E";
                    }}
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-white/60 via-transparent to-transparent opacity-0 md:group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>

            {/* Content */}
            <div className="p-5 sm:p-6">
                <h2 className="text-lg sm:text-lg font-bold text-slate-800 mb-2 line-clamp-2 group-hover:text-indigo-600 transition-colors duration-300">
                    {project.title}
                </h2>

                <div className="space-y-1 mb-3 text-sm text-slate-600">
                    {project.description.split('\n').map((line, i) => {
                        const trimmed = line.trim();
                        if (!trimmed) return <div key={i} className="h-1"></div>;

                        if (trimmed.startsWith('•') || trimmed.startsWith('-')) {
                            return (
                                <div key={i} className="flex items-start gap-2 pl-1 group/item hover:bg-slate-50 p-0.5 rounded-lg transition-colors -mx-1.5">
                                    <div className="mt-2 h-2 w-2 shrink-0 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 shadow-sm shadow-indigo-200 group-hover/item:scale-110 transition-transform"></div>
                                    <span className="flex-1 text-[16px]  leading-relaxed text-slate-600 font-normal">{trimmed.substring(1).trim()}</span>
                                </div>
                            );
                        }

                        if (trimmed.endsWith(':')) {
                            return (
                                <h3 key={i} className="font-bold text-base text-indigo-900 pt-0 pb-1">
                                    {trimmed}
                                </h3>
                            );
                        }

                        return <p key={i} className="text-[15px] leading-relaxed text-slate-600">{trimmed}</p>;
                    })}
                </div>

                {/* Technologies */}
                {project.technologies && (
                    <div className="mb-4 flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                            <div
                                key={tech}
                                className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-slate-100 text-xs text-slate-700"
                            >
                                <TechnologyIcon tech={tech} />
                                <span>{tech}</span>
                            </div>
                        ))}
                    </div>
                )}

                {/* Footer with button */}
                <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-slate-100">
                    {project.external ? (
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group/btn inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 px-4 sm:px-5 py-2 sm:py-2.5 text-sm font-semibold text-white transition-transform duration-300 md:hover:scale-95"
                        >
                            <span>View Live</span>
                            <FiExternalLink className="h-3 w-3 transition-transform duration-300 md:group-hover/btn:translate-x-1" />
                        </a>
                    ) : (
                        <button
                            type="button"
                            onClick={() => onOpenModal(project)}
                            className="group/btn inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 px-4 sm:px-5 py-2 sm:py-2.5 text-sm font-semibold text-white transition-transform duration-300 md:hover:scale-95"
                        >
                            <span className="whitespace-nowrap">Request Code</span>
                            <FaCode className="h-3 w-3 transition-transform duration-300 md:group-hover/btn:translate-x-1" />
                        </button>
                    )}

                    {/* <div className="flex items-center gap-2 text-sm text-slate-500">
                        {project.external ? (
                            <>
                                <FaExternalLinkAlt className="h-3 w-3" />
                                <span className="whitespace-nowrap"></span>
                            </>
                        ) : (
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 hover:text-indigo-600 transition-colors"
                            >
                                <FaExternalLinkAlt className="h-4 w-4" />
                                <span className="whitespace-nowrap">Live Project link</span>
                            </a>
                        )}
                    </div> */}
                </div>
            </div>

            {/* Hover Effects */}
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-indigo-200 rounded-xl transition-all duration-500 pointer-events-none"></div>
        </div>
    );
});
