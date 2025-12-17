import { useRef, useEffect, type RefObject } from "react";
import type { Project } from "../../types/project";
import { useRequestForm } from "../../hooks/useRequestForm";
import { RequestModalHeader } from "./modal/RequestModalHeader";
import { ProjectSnippet } from "./modal/ProjectSnippet";
import { RequestForm } from "./modal/RequestForm";

type RequestModalProps = {
    isOpen: boolean;
    project: Project | null;
    onClose: () => void;
};

export const RequestModal = ({ isOpen, project, onClose }: RequestModalProps) => {
    const modalRef = useRef<HTMLDivElement>(null);
    const formRef = useRef<HTMLFormElement>(null) as RefObject<HTMLFormElement>;
    const formLogic = useRequestForm(project, onClose);

    // Reset and Scroll Logic
    useEffect(() => {
        if (!isOpen) {
            formLogic.handlers.resetForm();
        } else {
            // Reset scroll relative to modal container first
            modalRef.current?.scrollTo(0, 0);

            // Auto-scroll to form inputs, keeping sticky header visible
            setTimeout(() => {
                formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
            }, 100);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div
            ref={modalRef}
            className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm animate-fadeIn"
        >
            <div className="flex min-h-full items-center justify-center p-0 sm:p-4">
                <div
                    className="relative w-full h-full sm:h-auto max-w-3xl rounded-none sm:rounded-xl bg-white border-0 sm:border border-slate-200 animate-slideUp shadow-none sm:shadow-xl flex flex-col min-h-screen sm:min-h-0 sm:max-h-[90vh]"
                    onClick={(e) => e.stopPropagation()}
                >
                    <RequestModalHeader
                        title={project?.title ?? "Unknown Project"}
                        onClose={onClose}
                    />
                    <ProjectSnippet project={project} />
                    <RequestForm
                        formLogic={formLogic}
                        onClose={onClose}
                        forwardedRef={formRef}
                    />
                </div>
            </div>
        </div>
    );
};
