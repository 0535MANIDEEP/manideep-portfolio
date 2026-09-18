import { portfolio } from "@/data/portfolio";

export function Experience() {
  return (
    <section id="experience" className="py-16 sm:py-20 px-4 border-t border-[#e7e5e4]">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-2xl font-bold tracking-tight text-[#1c1917]">
          Experience
        </h2>

        <div className="mt-8 space-y-8">
          {portfolio.experience.map((exp) => (
            <article key={exp.role + exp.company}>
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                <div>
                  <h3 className="text-base font-semibold text-[#1c1917]">
                    {exp.role}
                  </h3>
                  <p className="text-sm text-[#78716c]">
                    {exp.company} · {exp.location}
                  </p>
                </div>
                <p className="text-sm text-[#a8a29e] whitespace-nowrap">
                  {exp.period}
                </p>
              </div>
              <ul className="mt-3 space-y-1.5">
                {exp.bullets.map((bullet) => (
                  <li key={bullet} className="text-sm text-[#1c1917] flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#a8a29e] shrink-0" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
