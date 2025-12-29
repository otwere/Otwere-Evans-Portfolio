import { FaCalendar } from 'react-icons/fa';

type TimelineCardProps = {
    date: string;
    orgImg: string;
    org: string;
    role: string;
    location?: string;
    bullets: string[];
    accent?: string; // Not effectively used in the previous complex UI but kept if we want to customize borders/etc
};

export default function TimelineCard({ date, orgImg, org, role, location, bullets }: TimelineCardProps) {
    return (
        <div className="relative pl-8">
            {/* Timeline Node */}
            <div className="absolute -left-[9px] top-0 h-5 w-5 rounded-full border-4 border-white bg-indigo-500 ring-2 ring-indigo-100"></div>

            <div className="group relative overflow-hidden rounded-xl border border-slate-200/50 bg-white p-6 transition-all duration-300 hover:scale-[1.02] hover:border-indigo-200 hover:shadow-none hover:shadow-indigo-100/40">
                {/* Floating elements */}
                <div className="absolute -top-6 -right-6 h-12 w-12 rounded-full bg-gradient-to-br from-indigo-400 to-purple-400"></div>
                <div className="absolute -bottom-6 -left-6 h-12 w-12 rounded-full bg-gradient-to-br from-cyan-400 to-blue-400"></div>

                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 rounded-full bg-indigo-50 px-3 py-1">
                        <FaCalendar className="h-3 w-3 text-indigo-600" />
                        <span className="text-sm font-medium text-indigo-600">{date}</span>
                    </div>
                    {location && (
                        <span className="inline-flex items-center rounded-xl bg-indigo-50 px-3 py-1 text-sm font-medium text-indigo-600">
                            {location}
                        </span>
                    )}
                </div>

                <div className="mt-4 flex items-center gap-4">
                    <div className="relative">
                        <img src={orgImg} alt={org} className="h-12 w-12 rounded-xl object-cover" />
                    </div>
                    <div>
                        <h3 className="font-bold text-slate-800">{org}</h3>
                        <p className="text-sm font-medium text-indigo-600">{role}</p>
                    </div>
                </div>

                {bullets.length > 0 && (
                    <ul className="mt-4 space-y-2 pl-4">
                        {bullets.map((bullet, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm text-slate-600">
                                <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-400"></div>
                                <span className='font-normal text-[16px]'>{bullet}</span>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}
