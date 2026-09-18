interface FooterProps {
  name: string;
  email: string;
  linkedin: string;
  github: string;
}

export function Footer({ name, email, linkedin, github }: FooterProps) {
  return (
    <footer className="border-t border-[#e7e5e4] py-8 px-4">
      <div className="mx-auto max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-[#78716c]">
        <p>&copy; {name}. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a href={github} target="_blank" rel="noopener noreferrer" className="hover:text-[#1c1917] transition-colors">GitHub</a>
          <a href={linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-[#1c1917] transition-colors">LinkedIn</a>
          <a href={`mailto:${email}`} className="hover:text-[#1c1917] transition-colors">Email</a>
        </div>
      </div>
    </footer>
  );
}
