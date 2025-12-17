import { FaGithub } from "react-icons/fa";
import type { Project } from "../../../types/project";

type ProjectSnippetProps = {
    project: Project | null;
};

export const ProjectSnippet = ({ project }: ProjectSnippetProps) => {
    return (
        <div className="px-6 py-4 bg-slate-50/80 border-b border-slate-100">
            <div className="flex items-center gap-3">
                <img
                    src={project?.image}
                    alt={project?.title || "Project Thumbnail"}
                    className="h-12 w-24 rounded-md object-cover border border-slate-200"
                    onError={(e) => {
                        e.currentTarget.src =
                            "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 48 48'%3E%3Crect width='48' height='48' fill='%23e0e7ff' rx='8'/%3E%3Cpath fill='%23818cf8' d='M24 16a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm0 12a8 8 0 1 1 0-16 8 8 0 0 1 0 16z'/%3E%3C/svg%3E";
                    }}
                />
                <div>
                    <h3 className="font-semibold text-slate-800 text-sm line-clamp-1">
                        {project?.title}
                    </h3>
                    <div className="flex items-center gap-2 mt-1">
                        <FaGithub className="h-3 w-3 text-slate-500" />
                        <span className="text-xs text-slate-600">GitHub Repository</span>
                    </div>
                </div>
            </div>
        </div>
    );
};
