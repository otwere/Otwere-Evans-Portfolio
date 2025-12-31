import { FaCode, FaProjectDiagram, FaExternalLinkAlt } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import type { Project } from "../../types/project";
import { TechnologyIcon } from "./TechnologyIcon";
import { ProjectDescription } from "./ProjectDescription";
import { ProjectImage } from "./ProjectImage";
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

            {/* Image Container */}
            <ProjectImage image={project.image} title={project.title} category={project.category} />

            {/* Content */}
            <div className="p-5 sm:p-6">
                <h2 className="text-lg sm:text-lg font-bold text-slate-800 mb-2 line-clamp-2 group-hover:text-indigo-600 transition-colors duration-300">
                    {project.title}
                </h2>


                <ProjectDescription description={project.description} />

                {/* Technologies */}
                {project.technologies && (
                    <div className="mb-4 flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                            <div
                                key={tech}
                                className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-slate-100 text-xs text-slate-800"
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
                            className="group/btn inline-flex items-center gap-2 rounded-full bg-linear-to-r from-indigo-600 to-purple-600 px-4 sm:px-5 py-2 sm:py-2.5 text-sm font-semibold text-white transition-transform duration-300 md:hover:scale-95"
                        >
                            <span>View Live</span>
                            <FiExternalLink className="h-3 w-3 transition-transform duration-300 md:group-hover/btn:translate-x-1" />
                        </a>
                    ) : (
                        <button
                            type="button"
                            onClick={() => onOpenModal(project)}
                            className="group/btn inline-flex items-center gap-2 rounded-full bg-linear-to-r from-indigo-600 to-purple-600 px-4 sm:px-5 py-2 sm:py-2.5 text-sm font-semibold text-white transition-transform duration-300 md:hover:scale-95"
                        >
                            <span className="whitespace-nowrap">Request Code</span>
                            <FaCode className="h-3 w-3 transition-transform duration-300 md:group-hover/btn:translate-x-1" />
                        </button>
                    )}

                    <div className="flex items-center gap-2 text-sm text-slate-500">
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
                    </div>
                </div>
            </div>

            {/* Hover Effects */}
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-indigo-200 rounded-xl transition-all duration-500 pointer-events-none"></div>
        </div>
    );
});
