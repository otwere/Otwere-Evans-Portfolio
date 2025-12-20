import { useState, useCallback } from "react";
import { projects } from "../data/projectsData";
import { SEO } from "../components/SEO";
import type { Project } from "../types/project";
import { ProjectCard } from "../components/projects/ProjectCard";
import { RequestModal } from "../components/projects/RequestModal";

export default function Projects() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const openModal = useCallback((p: Project) => {
    setSelectedProject(p);
    setModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setModalOpen(false);
    setSelectedProject(null);
  }, []);

  return (
    <>
      <SEO
        title="Featured Projects"
        description="Explore my portfolio of web development projects, including Hospital Management Systems, School Information Systems, and E-commerce platforms using React and TypeScript."
        keywords="Web Development Projects, React Portfolio, TypeScript, Source Code, Frontend Projects"
      />
      <section
        id="projects"
        className="animate-enter relative overflow-hidden bg-linear-to-b from-slate-50 to-slate-100 px-0 sm:px-6 py-16 sm:py-24"
      >
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-indigo-500 to-transparent"></div>
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-linear-to-r from-indigo-200/10 to-purple-200/10 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-gradient-to-r from-cyan-200/10 to-blue-200/10 blur-3xl"></div>

        <div className="relative mx-auto w-full max-w-fit">
          {/* Header */}
          <div className="mb-12 text-center">
            <div className="inline-flex items-center gap-2">
              <div className="h-1 w-8 sm:w-16 rounded-full bg-gradient-to-r from-transparent via-indigo-500 to-transparent"></div>
              <h1 className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-3xl sm:text-3xl font-bold text-transparent">
                Featured Projects
              </h1>
              <div className="h-1 w-8 sm:w-16 rounded-full bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={index}
                onOpenModal={openModal}
              />
            ))}
          </div>
        </div>

        <RequestModal
          isOpen={modalOpen}
          project={selectedProject}
          onClose={closeModal}
        />


      </section>
    </>
  );
}