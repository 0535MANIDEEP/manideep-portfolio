interface HeroProps {
  profile: {
    headline: string;
    supportingCopy: string;
    availability: string;
    email: string;
    linkedin: string;
    github: string;
  };
}

export function Hero({ profile }: HeroProps) {
  return (
    <section className="py-20 sm:py-28 px-4">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1c1917] leading-tight">
          {profile.headline}
        </h1>
        <p className="mt-4 text-base sm:text-lg text-[#78716c] leading-relaxed max-w-2xl">
          {profile.supportingCopy}
        </p>
        <p className="mt-3 text-sm text-[#78716c]">{profile.availability}</p>

        <div className="mt-8 flex flex-col sm:flex-row items-start gap-3">
          <a href="#work" className="inline-flex items-center rounded-md bg-[#1c1917] px-4 py-2 text-sm font-medium text-[#fafaf9] hover:bg-[#44403c] transition-colors">
            View live projects
          </a>
          <a href={`mailto:${profile.email}`} className="inline-flex items-center rounded-md border border-[#e7e5e4] px-4 py-2 text-sm font-medium text-[#1c1917] hover:bg-[#f5f5f4] transition-colors">
            Email me
          </a>
        </div>

        <div className="mt-6 flex items-center gap-4">
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="text-sm text-[#78716c] hover:text-[#1c1917] underline underline-offset-2 transition-colors">
            GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="text-sm text-[#78716c] hover:text-[#1c1917] underline underline-offset-2 transition-colors">
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
