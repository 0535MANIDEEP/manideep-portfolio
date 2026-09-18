import { getSupabaseAdmin } from "@/lib/supabase";

export interface PortfolioData {
  profile: {
    name: string;
    heroTitle: string;
    headline: string;
    supportingCopy: string;
    availability: string;
    location: string;
    email: string;
    phone: string;
    linkedin: string;
    github: string;
    resumeLabel: string;
    resumeUrl: string;
    about: string;
    coreStack: string;
    contactCopy: string;
  };
  projects: {
    items: {
      name: string;
      summary: string;
      stack: string[];
      live: string;
      github: string;
      features: string[];
      engineering: string[];
    }[];
    additionalWork: {
      name: string;
      subtitle: string;
      description: string;
      github: string;
    };
  };
  experience: {
    items: {
      role: string;
      company: string;
      location: string;
      period: string;
      bullets: string[];
    }[];
  };
  education: {
    degree: string;
    school: string;
    years: string;
    cgpa: string;
  };
  skills: {
    coreStack: string;
    additionalWork: {
      name: string;
      subtitle: string;
      description: string;
      github: string;
    };
  };
  navigation: {
    links: { href: string; label: string }[];
  };
  contact: {
    heading: string;
    copy: string;
  };
}

export async function getPortfolio(): Promise<PortfolioData> {
  const supabase = getSupabaseAdmin();
  const { data } = await supabase
    .from("portfolio_sections")
    .select("section, data");

  const map: Record<string, unknown> = {};
  for (const row of data ?? []) {
    map[row.section] = row.data;
  }

  return map as unknown as PortfolioData;
}
