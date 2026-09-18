import { portfolio } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="border-t border-[#e7e5e4] py-8 px-4">
      <div className="mx-auto max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-[#78716c]">
        <p>&copy; {portfolio.name}. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a
            href={portfolio.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#1c1917] transition-colors"
          >
            GitHub
          </a>
          <a
            href={portfolio.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#1c1917] transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${portfolio.email}`}
            className="hover:text-[#1c1917] transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
