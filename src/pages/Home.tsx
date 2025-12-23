import { SEO } from "../components/SEO";

export default function Home() {
  return (
    <>
      <SEO
        title="Home"
        description="Welcome to Otwere Evans' portfolio. Experienced Software Developer specializing in 
        modern Front-end Development,using React.js,TypeScript,Tailwindcss, and creating high-performance web App experiences."
      />
      <section id="home" className="animate-enter min-h-full flex items-center justify-start pt-64 pb-10 md:pt-64 bg-slate-50 px-6">
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
