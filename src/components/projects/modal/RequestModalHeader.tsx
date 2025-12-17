import { FaCode } from "react-icons/fa";

type RequestModalHeaderProps = {
    title: string;
    onClose: () => void;
};

export const RequestModalHeader = ({ title, onClose }: RequestModalHeaderProps) => {
    return (
        <div className="px-6 py-4 top-0 z-20 bg-gray-200 rounded-md">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-500">
                        <FaCode className="h-5 w-5 text-white" />
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold text-blue-600">
                            Request Source Code
                        </h3>
                        <p className="text-sm font-medium text-slate-600 -mt-1">{title}</p>
                    </div>
                </div>
                <button
                    type="button"
                    aria-label="Close"
                    className="p-2 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
                    onClick={onClose}
                >
                    <span className="text-xl">×</span>
                </button>
            </div>
        </div>
    );
};
