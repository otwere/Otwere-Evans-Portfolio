import { FaCode } from "react-icons/fa";

type RequestModalHeaderProps = {
    title: string;
    onClose: () => void;
};

export const RequestModalHeader = ({ title, onClose }: RequestModalHeaderProps) => {
    return (
        <div className="sticky top-0 z-20 px-4 sm:px-6 py-4 bg-white/80 backdrop-blur-md border-b border-slate-100 rounded-t-2xl sm:rounded-t-xl transition-all">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 shadow-lg shadow-indigo-500/20">
                        <FaCode className="h-5 w-5 text-white" />
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-slate-800 tracking-tight">
                            Request Source Code
                        </h3>
                        <p className="text-xs font-medium text-slate-500 truncate max-w-[205px]">{title}</p>
                    </div>
                </div>
                <button
                    type="button"
                    aria-label="Close"
                    className="group relative flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-500 transition-all hover:bg-rose-100 hover:text-rose-500"
                    onClick={onClose}
                >
                    <span className="text-lg transition-transform group-hover:rotate-90">×</span>
                </button>
            </div>
        </div>
    );
};
