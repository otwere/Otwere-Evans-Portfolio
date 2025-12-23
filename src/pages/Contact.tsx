import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin } from "react-icons/fa";
import { SEO } from "../components/SEO";

export default function Contact() {
  return (
    <>
      <SEO
        title="Contact"
        description="Get in touch with Otwere Evans for web development projects, collaborations, or inquiries. Contact via Email, LinkedIn, or WhatsApp."
      />
      <section
        id="contact"
        className="animate-enter flex flex-col items-center justify-start min-h-full pt-24 pb-10 md:pt-52 px-4 bg-slate-50"
      >
        <div className="w-full max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-12 sm:mb-16 text-center">
            <div className="inline-flex items-center gap-2 sm:gap-3 mb-0">
              <div className="h-px w-8 sm:w-16 bg-gradient-to-r from-transparent via-indigo-500 to-transparent"></div>
              <h2 className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-3xl sm:text-3xl font-bold text-transparent">
                Contact
              </h2>
              <div className="h-px w-8 sm:w-16 bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-8">

            {/* Email */}
            <div className="flex flex-col items-center gap-3">
              <FaEnvelope className="h-8 w-8 text-blue-600" />
              <a
                href="mailto:otweree@gmail.com"
                className="text-slate-600 hover:text-blue-600 transition-colors text-base sm:text-lg"
              >
                otweree@gmail.com
              </a>
            </div>

            {/* Location */}
            <div className="flex flex-col items-center gap-3">
              <FaMapMarkerAlt className="h-8 w-8 text-blue-600" />
              <span className="text-slate-600 text-base sm:text-lg">
                Nairobi, Kenya
              </span>
            </div>

            {/* Phone */}
            <div className="flex flex-col items-center gap-3">
              <FaPhone className="h-8 w-8 text-blue-600 rotate-90" />
              <div className="flex flex-wrapjustify-center text-center text-slate-600 text-base sm:text-lg">
                <a href="tel:+254700520008" className="hover:text-blue-600 transition-colors">+254 700 520 008</a>
                <span className="mx-2">|</span>
                <a href="tel:+254733443224" className="hover:text-blue-600 transition-colors">+254 733 443 224</a>
              </div>
            </div>

            {/* LinkedIn */}
            <div className="flex flex-col items-center gap-3">
              <FaLinkedin className="h-8 w-8 text-blue-600" />
              <a
                href="https://linkedin.com/in/otwere-evans"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 hover:text-blue-600 transition-colors text-base sm:text-lg text-center break-all"
              >
                linkedin.com/in/otwere-evans
              </a>
            </div>

          </div>

          {/* WhatsApp Button */}
          <div className="mt-16 sm:mt-24 text-center">
            <a
              href="https://wa.me/254733443224"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-10 rounded-full transition-all hover:shadow-sm hover:-translate-y-1"
            >
              WhatsApp Me
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
