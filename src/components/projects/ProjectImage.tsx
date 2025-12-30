import { memo } from 'react';

type ProjectImageProps = {
    image: string;
    title: string;
    category?: string;
};

export const ProjectImage = memo(({ image, title }: ProjectImageProps) => {
    return (
        <div className="relative h-48 sm:h-56 w-full overflow-hidden bg-linear-to-r from-slate-50 to-slate-100">
            <img
                src={image}
                alt={title}
                className="h-full w-full object-cover transition-transform duration-700 md:group-hover:scale-110"
                loading="lazy"
                onError={(e) => {
                    e.currentTarget.src =
                        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='225' viewBox='0 0 400 225'%3E%3Crect width='400' height='225' fill='%23f8fafc'/%3E%3Ctext x='50%25' y='50%25' font-family='Arial' font-size='16' fill='%2394a3b8' text-anchor='middle' dominant-baseline='middle'%3EProject Image%3C/text%3E%3C/svg%3E";
                }}
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-white/60 via-transparent to-transparent opacity-0 md:group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>
    );
});
