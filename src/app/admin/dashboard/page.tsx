"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";

interface PortfolioData {
  [key: string]: unknown;
}

export default function AdminDashboard() {
  const [portfolio, setPortfolio] = useState<PortfolioData>({});
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [saveMsg, setSaveMsg] = useState("");
  const [activeTab, setActiveTab] = useState("profile");
  const router = useRouter();

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      if (!data.session) {
        router.push("/admin");
        return;
      }
      fetchPortfolio();
    });
  }, [router]);

  async function fetchPortfolio() {
    const res = await fetch("/api/portfolio");
    const data = await res.json();
    setPortfolio(data);
    setLoading(false);
  }

  async function saveSection(section: string) {
    setSaving(true);
    setSaveMsg("");
    const res = await fetch("/api/portfolio", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ section, data: portfolio[section] }),
    });
    const result = await res.json();
    setSaving(false);
    setSaveMsg(result.ok ? "Saved!" : "Error: " + result.error);
    setTimeout(() => setSaveMsg(""), 3000);
  }

  function updateField(section: string, field: string, value: unknown) {
    setPortfolio((prev) => ({
      ...prev,
      [section]: { ...(prev[section] as Record<string, unknown>), [field]: value },
    }));
  }

  function updateArrayItem(section: string, arrayField: string, index: number, field: string, value: unknown) {
    const sectionData = portfolio[section] as Record<string, unknown>;
    const arr = [...(sectionData[arrayField] as Record<string, unknown>[])];
    arr[index] = { ...arr[index], [field]: value };
    updateField(section, arrayField, arr);
  }

  function addArrayItem(section: string, arrayField: string, template: Record<string, unknown>) {
    const sectionData = portfolio[section] as Record<string, unknown>;
    const arr = [...(sectionData[arrayField] as Record<string, unknown>[]), template];
    updateField(section, arrayField, arr);
  }

  function removeArrayItem(section: string, arrayField: string, index: number) {
    const sectionData = portfolio[section] as Record<string, unknown>;
    const arr = (sectionData[arrayField] as Record<string, unknown>[]).filter((_, i) => i !== index);
    updateField(section, arrayField, arr);
  }

  async function handleLogout() {
    await supabase.auth.signOut();
    router.push("/admin");
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#fafaf9]">
        <p className="text-sm text-[#78716c]">Loading...</p>
      </div>
    );
  }

  const tabs = [
    { id: "profile", label: "Profile" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "education", label: "Education" },
    { id: "skills", label: "Skills" },
    { id: "navigation", label: "Navigation" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <div className="min-h-screen bg-[#fafaf9]">
      <header className="border-b border-[#e7e5e4] bg-white sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between">
          <h1 className="text-sm font-semibold text-[#1c1917]">Portfolio Admin</h1>
          <div className="flex items-center gap-3">
            {saveMsg && <span className="text-xs text-[#78716c]">{saveMsg}</span>}
            <a href="/" target="_blank" className="text-xs text-[#78716c] hover:text-[#1c1917]">
              View site
            </a>
            <button onClick={handleLogout} className="text-xs text-[#78716c] hover:text-[#1c1917]">
              Logout
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-4 py-6">
        {/* Tabs */}
        <div className="flex gap-1 mb-6 overflow-x-auto pb-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-3 py-1.5 text-xs font-medium rounded-md whitespace-nowrap transition-colors ${
                activeTab === tab.id
                  ? "bg-[#1c1917] text-[#fafaf9]"
                  : "text-[#78716c] hover:bg-[#f5f5f4]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Profile Tab */}
        {activeTab === "profile" && (
          <Section title="Profile" onSave={() => saveSection("profile")} saving={saving}>
            <Field label="Name" value={(portfolio.profile as Record<string, unknown>)?.name as string} onChange={(v) => updateField("profile", "name", v)} />
            <Field label="Hero Title" value={(portfolio.profile as Record<string, unknown>)?.heroTitle as string} onChange={(v) => updateField("profile", "heroTitle", v)} />
            <Field label="Headline" value={(portfolio.profile as Record<string, unknown>)?.headline as string} onChange={(v) => updateField("profile", "headline", v)} textarea />
            <Field label="Supporting Copy" value={(portfolio.profile as Record<string, unknown>)?.supportingCopy as string} onChange={(v) => updateField("profile", "supportingCopy", v)} textarea />
            <Field label="Availability" value={(portfolio.profile as Record<string, unknown>)?.availability as string} onChange={(v) => updateField("profile", "availability", v)} />
            <Field label="Location" value={(portfolio.profile as Record<string, unknown>)?.location as string} onChange={(v) => updateField("profile", "location", v)} />
            <Field label="Email" value={(portfolio.profile as Record<string, unknown>)?.email as string} onChange={(v) => updateField("profile", "email", v)} />
            <Field label="Phone" value={(portfolio.profile as Record<string, unknown>)?.phone as string} onChange={(v) => updateField("profile", "phone", v)} />
            <Field label="LinkedIn URL" value={(portfolio.profile as Record<string, unknown>)?.linkedin as string} onChange={(v) => updateField("profile", "linkedin", v)} />
            <Field label="GitHub URL" value={(portfolio.profile as Record<string, unknown>)?.github as string} onChange={(v) => updateField("profile", "github", v)} />
            <Field label="Resume Label" value={(portfolio.profile as Record<string, unknown>)?.resumeLabel as string} onChange={(v) => updateField("profile", "resumeLabel", v)} />
            <Field label="Resume URL (mailto:)" value={(portfolio.profile as Record<string, unknown>)?.resumeUrl as string} onChange={(v) => updateField("profile", "resumeUrl", v)} />
            <Field label="About" value={(portfolio.profile as Record<string, unknown>)?.about as string} onChange={(v) => updateField("profile", "about", v)} textarea />
            <Field label="Core Stack" value={(portfolio.profile as Record<string, unknown>)?.coreStack as string} onChange={(v) => updateField("profile", "coreStack", v)} />
            <Field label="Contact Message" value={(portfolio.profile as Record<string, unknown>)?.contactCopy as string} onChange={(v) => updateField("profile", "contactCopy", v)} textarea />
          </Section>
        )}

        {/* Projects Tab */}
        {activeTab === "projects" && (
          <Section title="Projects" onSave={() => saveSection("projects")} saving={saving}>
            {((portfolio.projects as Record<string, unknown>)?.items as Record<string, unknown>[])?.map((project, i) => (
              <div key={i} className="border border-[#e7e5e4] rounded-lg p-4 mb-4 space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-semibold text-[#1c1917]">Project {i + 1}</h3>
                  <button onClick={() => removeArrayItem("projects", "items", i)} className="text-xs text-red-500 hover:text-red-700">Remove</button>
                </div>
                <Field label="Name" value={project.name as string} onChange={(v) => updateArrayItem("projects", "items", i, "name", v)} />
                <Field label="Summary" value={project.summary as string} onChange={(v) => updateArrayItem("projects", "items", i, "summary", v)} textarea />
                <Field label="Stack (comma-separated)" value={(project.stack as string[])?.join(", ")} onChange={(v) => updateArrayItem("projects", "items", i, "stack", v.split(",").map((s: string) => s.trim()))} />
                <Field label="Live URL" value={project.live as string} onChange={(v) => updateArrayItem("projects", "items", i, "live", v)} />
                <Field label="GitHub URL" value={project.github as string} onChange={(v) => updateArrayItem("projects", "items", i, "github", v)} />
                <Field label="Features (one per line)" value={(project.features as string[])?.join("\n")} onChange={(v) => updateArrayItem("projects", "items", i, "features", v.split("\n").filter(Boolean))} textarea />
                <Field label="Engineering (one per line)" value={(project.engineering as string[])?.join("\n")} onChange={(v) => updateArrayItem("projects", "items", i, "engineering", v.split("\n").filter(Boolean))} textarea />
              </div>
            ))}
            <button onClick={() => addArrayItem("projects", "items", { name: "New Project", summary: "", stack: [], live: "", github: "", features: [], engineering: [] })} className="text-xs text-[#78716c] hover:text-[#1c1917] border border-dashed border-[#d6d3d1] rounded-md px-3 py-2 w-full">
              + Add project
            </button>
          </Section>
        )}

        {/* Experience Tab */}
        {activeTab === "experience" && (
          <Section title="Experience" onSave={() => saveSection("experience")} saving={saving}>
            {((portfolio.experience as Record<string, unknown>)?.items as Record<string, unknown>[])?.map((exp, i) => (
              <div key={i} className="border border-[#e7e5e4] rounded-lg p-4 mb-4 space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-semibold text-[#1c1917]">Experience {i + 1}</h3>
                  <button onClick={() => removeArrayItem("experience", "items", i)} className="text-xs text-red-500 hover:text-red-700">Remove</button>
                </div>
                <Field label="Role" value={exp.role as string} onChange={(v) => updateArrayItem("experience", "items", i, "role", v)} />
                <Field label="Company" value={exp.company as string} onChange={(v) => updateArrayItem("experience", "items", i, "company", v)} />
                <Field label="Location" value={exp.location as string} onChange={(v) => updateArrayItem("experience", "items", i, "location", v)} />
                <Field label="Period" value={exp.period as string} onChange={(v) => updateArrayItem("experience", "items", i, "period", v)} />
                <Field label="Bullets (one per line)" value={(exp.bullets as string[])?.join("\n")} onChange={(v) => updateArrayItem("experience", "items", i, "bullets", v.split("\n").filter(Boolean))} textarea />
              </div>
            ))}
            <button onClick={() => addArrayItem("experience", "items", { role: "", company: "", location: "", period: "", bullets: [] })} className="text-xs text-[#78716c] hover:text-[#1c1917] border border-dashed border-[#d6d3d1] rounded-md px-3 py-2 w-full">
              + Add experience
            </button>
          </Section>
        )}

        {/* Education Tab */}
        {activeTab === "education" && (
          <Section title="Education" onSave={() => saveSection("education")} saving={saving}>
            <Field label="Degree" value={(portfolio.education as Record<string, unknown>)?.degree as string} onChange={(v) => updateField("education", "degree", v)} />
            <Field label="School" value={(portfolio.education as Record<string, unknown>)?.school as string} onChange={(v) => updateField("education", "school", v)} />
            <Field label="Years" value={(portfolio.education as Record<string, unknown>)?.years as string} onChange={(v) => updateField("education", "years", v)} />
            <Field label="CGPA" value={(portfolio.education as Record<string, unknown>)?.cgpa as string} onChange={(v) => updateField("education", "cgpa", v)} />
          </Section>
        )}

        {/* Skills Tab */}
        {activeTab === "skills" && (
          <Section title="Skills & Additional Work" onSave={() => saveSection("skills")} saving={saving}>
            <Field label="Core Stack (comma-separated)" value={(portfolio.skills as Record<string, unknown>)?.coreStack as string} onChange={(v) => updateField("skills", "coreStack", v)} />
            <Field label="Additional Work Name" value={((portfolio.skills as Record<string, unknown>)?.additionalWork as Record<string, unknown>)?.name as string} onChange={(v) => { const aw = ((portfolio.skills as Record<string, unknown>)?.additionalWork as Record<string, unknown>) || {}; updateField("skills", "additionalWork", { ...aw, name: v }); }} />
            <Field label="Additional Work Subtitle" value={((portfolio.skills as Record<string, unknown>)?.additionalWork as Record<string, unknown>)?.subtitle as string} onChange={(v) => { const aw = ((portfolio.skills as Record<string, unknown>)?.additionalWork as Record<string, unknown>) || {}; updateField("skills", "additionalWork", { ...aw, subtitle: v }); }} />
            <Field label="Additional Work Description" value={((portfolio.skills as Record<string, unknown>)?.additionalWork as Record<string, unknown>)?.description as string} onChange={(v) => { const aw = ((portfolio.skills as Record<string, unknown>)?.additionalWork as Record<string, unknown>) || {}; updateField("skills", "additionalWork", { ...aw, description: v }); }} textarea />
            <Field label="Additional Work GitHub" value={((portfolio.skills as Record<string, unknown>)?.additionalWork as Record<string, unknown>)?.github as string} onChange={(v) => { const aw = ((portfolio.skills as Record<string, unknown>)?.additionalWork as Record<string, unknown>) || {}; updateField("skills", "additionalWork", { ...aw, github: v }); }} />
          </Section>
        )}

        {/* Navigation Tab */}
        {activeTab === "navigation" && (
          <Section title="Navigation Links" onSave={() => saveSection("navigation")} saving={saving}>
            {((portfolio.navigation as Record<string, unknown>)?.links as Record<string, unknown>[])?.map((link, i) => (
              <div key={i} className="flex gap-2 items-end mb-2">
                <div className="flex-1">
                  <Field label="Label" value={link.label as string} onChange={(v) => updateArrayItem("navigation", "links", i, "label", v)} />
                </div>
                <div className="flex-1">
                  <Field label="Href" value={link.href as string} onChange={(v) => updateArrayItem("navigation", "links", i, "href", v)} />
                </div>
                <button onClick={() => removeArrayItem("navigation", "links", i)} className="text-xs text-red-500 hover:text-red-700 pb-2">Remove</button>
              </div>
            ))}
            <button onClick={() => addArrayItem("navigation", "links", { label: "New", href: "#" })} className="text-xs text-[#78716c] hover:text-[#1c1917] border border-dashed border-[#d6d3d1] rounded-md px-3 py-2 w-full">
              + Add link
            </button>
          </Section>
        )}

        {/* Contact Tab */}
        {activeTab === "contact" && (
          <Section title="Contact & Footer" onSave={() => saveSection("contact")} saving={saving}>
            <Field label="Contact Heading" value={(portfolio.contact as Record<string, unknown>)?.heading as string} onChange={(v) => updateField("contact", "heading", v)} />
            <Field label="Contact Copy" value={(portfolio.contact as Record<string, unknown>)?.copy as string} onChange={(v) => updateField("contact", "copy", v)} textarea />
          </Section>
        )}
      </div>
    </div>
  );
}

function Section({ title, children, onSave, saving }: { title: string; children: React.ReactNode; onSave: () => void; saving: boolean }) {
  return (
    <div className="bg-white rounded-lg border border-[#e7e5e4] p-5">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-[#1c1917]">{title}</h2>
        <button onClick={onSave} disabled={saving} className="rounded-md bg-[#1c1917] px-4 py-1.5 text-xs font-medium text-[#fafaf9] hover:bg-[#44403c] disabled:opacity-50 transition-colors">
          {saving ? "Saving..." : "Save"}
        </button>
      </div>
      <div className="space-y-4">{children}</div>
    </div>
  );
}

function Field({ label, value, onChange, textarea }: { label: string; value: string; onChange: (v: string) => void; textarea?: boolean }) {
  return (
    <div>
      <label className="block text-xs font-medium text-[#78716c] mb-1">{label}</label>
      {textarea ? (
        <textarea
          value={value || ""}
          onChange={(e) => onChange(e.target.value)}
          rows={3}
          className="w-full rounded-md border border-[#e7e5e4] bg-white px-3 py-2 text-sm text-[#1c1917] focus:outline-none focus:ring-2 focus:ring-[#a8a29e] resize-y"
        />
      ) : (
        <input
          type="text"
          value={value || ""}
          onChange={(e) => onChange(e.target.value)}
          className="w-full rounded-md border border-[#e7e5e4] bg-white px-3 py-2 text-sm text-[#1c1917] focus:outline-none focus:ring-2 focus:ring-[#a8a29e]"
        />
      )}
    </div>
  );
}
