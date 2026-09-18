import { portfolio } from "@/data/portfolio";

export function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-20 px-4 border-t border-[#e7e5e4]">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-2xl font-bold tracking-tight text-[#1c1917]">
          Get in touch
        </h2>
        <p className="mt-2 text-sm text-[#78716c] leading-relaxed max-w-xl">
          {portfolio.contactCopy}
        </p>

        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <a
            href={`mailto:${portfolio.email}`}
            className="inline-flex items-center justify-center rounded-md bg-[#1c1917] px-4 py-2.5 text-sm font-medium text-[#fafaf9] hover:bg-[#44403c] transition-colors"
          >
            Email me
          </a>
          <a
            href={portfolio.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md border border-[#e7e5e4] px-4 py-2.5 text-sm font-medium text-[#1c1917] hover:bg-[#f5f5f4] transition-colors"
          >
            LinkedIn
            <svg className="ml-1.5 h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
          <a
            href={portfolio.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md border border-[#e7e5e4] px-4 py-2.5 text-sm font-medium text-[#1c1917] hover:bg-[#f5f5f4] transition-colors"
          >
            GitHub
            <svg className="ml-1.5 h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
