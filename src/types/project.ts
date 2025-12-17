export type Project = {
    title: string;
    description: string;
    image: string;
    link: string;
    external?: boolean;
    technologies?: string[];
    category?: string;
};

export type Currency = {
    code: string;
    symbol: string;
    name: string;
    flag?: string;
};
