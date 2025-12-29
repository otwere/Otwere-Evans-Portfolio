import { Helmet } from 'react-helmet-async';

type SEOProps = {
    title: string;
    description: string;
    keywords?: string;
    image?: string;
    url?: string;
    type?: string;
    schema?: any;
};

import { SITE_URL } from "../data/site";

export const SEO = ({
    title,
    description,
    keywords,
    image = "/img/Otwere-Pic.jpg",
    url = SITE_URL,
    type = "website",
    schema
}: SEOProps) => {
    const siteTitle = "Otwere Evans | Portfolio";
    const fullTitle = title === "Home" ? siteTitle : `${title} | Otwere Evans - Portfolio`;

    return (
        <Helmet>
            {/* Standard Metadata */}
            <title>{fullTitle}</title>
            <meta name="description" content={description} />
            {keywords && <meta name="keywords" content={keywords} />}

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={type} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
            <meta property="og:url" content={url} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />

            {/* Structured Data */}
            {schema && (
                <script type="application/ld+json">
                    {JSON.stringify(schema)}
                </script>
            )}
        </Helmet>
    );
};
