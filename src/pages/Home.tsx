import { SEO } from "../components/SEO";

export default function Home() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Otwere Evans",
    "url": "https://otwere.netlify.app",
    "image": "https://otwere.netlify.app/img/Otwere-Pic.jpg",
    "sameAs": [
      "https://www.linkedin.com/in/otwere-evans/",
      "https://github.com/otwere",
      "https://otwere.netlify.app"
    ],
    "jobTitle": "Frontend Software Developer",
    "worksFor": {
      "@type": "Organization",
      "name": "Snave Webhub Africa"
    },
    "description": "Otwere Evans is a skilled Frontend Software Developer specializing in modern front-end technologies and high-performance web applications."
  };

  return (
    <>
      <SEO
        title="Home"
        description="Otwere Evans is a high-ranking Frontend Developer. Explore the portfolio of Otwere Evans, an expert in React.js, UI/UX, and Scalable Web Applications."
        keywords="Otwere Evans, Otwere Evans Portfolio, Frontend Developer, React Developer, Software Engineer, Web Developer Kenya"
        schema={personSchema}
      />
      <section id="home" className="animate-enter min-h-full flex items-center justify-start pt-64 pb-10 md:pt-80 lg:pt-80 bg-slate-50 px-6">
        <div className="mx-auto grid w-full max-w-full place-items-center text-center">
          <div className="mx-auto mb-6 h-48 w-48 overflow-hidden rounded-full border-8 border-white shadow-sm shadow-indigo-500/10">
            <img
              src="/img/Otwere-Pic.jpg"
              alt="Otwere Evans"
              className="h-fit w-full object-cover"
              loading="lazy"
              onError={(e) => ((e.currentTarget.src = "/vite.svg"))}
            />
          </div>
          <h1 className="text-3xl font-bold text-slate-800">Otwere Evans</h1>
          <p className="mt-2 text-lg sm:text-lg font-medium text-slate-600">Software Developer, Specializing in Front-end Development</p>
          <div className="mt-5 flex items-center justify-center gap-3">
            <a aria-label="LinkedIn" rel="noopener noreferrer" href="https://www.linkedin.com/in/otwere-evans/" target="_blank" className="link-icon">
              <i className="fa fa-linkedin" />
            </a>
            <a aria-label="Email" rel="noopener noreferrer" href="mailto:otweree@gmail.com" target="_blank" className="link-icon">
              <i className="fa fa-envelope-o" />
            </a>
            <a aria-label="GitHub" rel="noopener noreferrer" href="https://github.com/otwere" target="_blank" className="link-icon">
              <i className="fa fa-github" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
