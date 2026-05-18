import Link from "next/link";
import { HomeNavbar } from "@/components/home/HomeNavbar";
import { WorkflowDiagram } from "@/components/docs/WorkflowDiagram";
import { DOC_NAV, FIRST_DOC_SLUG } from "@/content/navigation";

const WORKFLOW = [
  { label: "Problem understanding" },
  { label: "Design" },
  { label: "Architecture" },
  { label: "Development" },
  { label: "API integration" },
  { label: "Security" },
  { label: "Testing" },
  { label: "Release" },
  { label: "Monitoring" },
  { label: "Improvement" },
];

const LEARNING_AREAS = [
  {
    title: "Getting started",
    slugs: ["start-here", "adopt-this-playbook", "mobile-engineering-2026"],
  },
  {
    title: "Stack & architecture",
    slugs: ["recommended-stack", "clean-architecture", "folder-structure"],
  },
  {
    title: "Design & UX",
    slugs: ["design-workflow", "figma-and-figma-ai", "reusable-components"],
  },
  {
    title: "Backend & data",
    slugs: ["api-integration", "authentication-and-authorization", "state-management"],
  },
  {
    title: "Quality & delivery",
    slugs: [
      "security-checklist",
      "testing-checklist",
      "git-workflow",
      "cicd-and-release-management",
    ],
  },
];

const REUSE_POINTS = [
  "One workflow for every React Native or cross-platform project",
  "Checklists you can paste into PR templates and release notes",
  "Phased adoption plan for startups, agencies, and in-house teams",
  "Fork-friendly: customize branding, keep the engineering standard",
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <HomeNavbar />

      <section className="border-b border-slate-200 bg-gradient-to-b from-white to-slate-50 dark:border-slate-800 dark:from-slate-900 dark:to-slate-950">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-28">
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-600">
            Universal mobile engineering playbook
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Build mobile apps as secure engineering systems — not just screens
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            MobilityForge teaches developers and teams how to plan, design, build, secure,
            test, release, and maintain real-world cross-platform apps. Use it on any
            product, at any company — the workflow stays the same.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href={`/docs/${FIRST_DOC_SLUG}`}
              className="inline-flex items-center rounded-lg bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-700"
            >
              Start here
            </Link>
            <Link
              href="/docs/adopt-this-playbook"
              className="inline-flex items-center rounded-lg border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-50"
            >
              Adopt for your company
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="text-2xl font-bold text-slate-900">What is MobilityForge?</h2>
        <p className="mt-4 max-w-3xl leading-7 text-slate-600">
          A hosted documentation platform that turns mobile engineering standards into
          practical guides: stack, design, architecture, API patterns, security and testing
          checklists, Git workflow, CI/CD, monitoring, and team collaboration. Originally
          built for apprenticeship programs; designed so any organization can reuse it.
        </p>
      </section>

      <section className="border-y border-slate-200 bg-white py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-slate-900">Built to reuse</h2>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2">
            {REUSE_POINTS.map((item) => (
              <li
                key={item}
                className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700"
              >
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-slate-600">
            See <Link href="/docs/adopt-this-playbook" className="font-medium text-brand-600 hover:text-brand-700">Adopt This Playbook</Link> and{" "}
            <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs">CUSTOMIZE.md</code> in the repo for white-label steps.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="text-2xl font-bold text-slate-900">Core engineering workflow</h2>
        <p className="mt-2 text-slate-600">Every serious mobile project should follow this path.</p>
        <div className="mt-8">
          <WorkflowDiagram steps={WORKFLOW} />
        </div>
      </section>

      <section className="border-t border-slate-200 bg-white py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-slate-900">Main learning areas</h2>
          <p className="mt-2 text-slate-600">{DOC_NAV.length} guides across the full delivery lifecycle.</p>
          <div className="mt-8 grid gap-8 md:grid-cols-2">
            {LEARNING_AREAS.map((area) => (
              <section key={area.title} className="rounded-xl border border-slate-200 p-5">
                <h3 className="font-semibold text-slate-900">{area.title}</h3>
                <ul className="mt-3 space-y-2">
                  {area.slugs.map((slug) => {
                    const doc = DOC_NAV.find((d) => d.slug === slug);
                    if (!doc) return null;
                    return (
                      <li key={slug}>
                        <Link
                          href={`/docs/${slug}`}
                          className="text-sm text-brand-600 hover:text-brand-700"
                        >
                          {doc.title} →
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </section>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 text-center sm:px-6">
        <h2 className="text-2xl font-bold text-slate-900">Ready to build the right way?</h2>
        <p className="mt-3 text-slate-600">
          Begin with Start Here, then open the guide that matches your current sprint.
        </p>
        <Link
          href={`/docs/${FIRST_DOC_SLUG}`}
          className="mt-8 inline-flex rounded-lg bg-brand-600 px-6 py-3 text-sm font-semibold text-white hover:bg-brand-700"
        >
          Open the playbook
        </Link>
      </section>

      <footer className="border-t border-slate-200 py-8 text-center text-sm text-slate-500">
        MobilityForge — reusable mobile engineering playbook
      </footer>
    </div>
  );
}
