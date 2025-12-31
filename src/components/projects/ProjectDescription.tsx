import { memo } from 'react';

type ProjectDescriptionProps = {
    description: string;
};

export const ProjectDescription = memo(({ description }: ProjectDescriptionProps) => {
    return (
        <div className="space-y-1 mb-3 text-sm text-slate-600">
            {description.split('\n').map((line, i) => {
                const trimmed = line.trim();
                if (!trimmed) return <div key={i} className="h-1"></div>;

                if (trimmed.startsWith('•') || trimmed.startsWith('-')) {
                    return (
                        <div key={i} className="flex items-start gap-2 pl-1 group/item hover:bg-slate-50 p-0.5 rounded-lg transition-colors -mx-1.5">
                            <div className="mt-2 h-2 w-2 shrink-0 rounded-full bg-linear-to-br from-indigo-500 to-purple-500 shadow-sm shadow-indigo-200 group-hover/item:scale-110 transition-transform"></div>
                            <span className="flex-1 text-[16px] leading-relaxed text-slate-600 font-normal">{trimmed.substring(1).trim()}</span>
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
    );
});
