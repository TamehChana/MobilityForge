import Link from "next/link";
import { HomeNavbar } from "@/components/home/HomeNavbar";
import { WorkflowDiagram } from "@/components/docs/WorkflowDiagram";
import { DOC_NAV, FIRST_DOC_SLUG, NAV_CATEGORIES } from "@/content/navigation";

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

const STATS = [
  { value: String(DOC_NAV.length), label: "Guides" },
  { value: String(NAV_CATEGORIES.length), label: "Categories" },
  { value: "100%", label: "Reusable" },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-surface dark:bg-[#131314]">
      <HomeNavbar />

      <section className="hero-mesh border-b border-outline dark:border-[#3c4043]">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:py-28">
          <p className="chip w-fit">Mobile engineering playbook</p>
          <h1 className="mt-6 max-w-4xl text-display text-ink sm:text-display-lg dark:text-[#e3e3e3]">
            Build mobile apps as secure engineering systems, not just screens
          </h1>
          <p className="mt-6 max-w-2xl text-body-lg text-ink-variant dark:text-[#c4c7c5]">
            MobilityForge teaches developers and teams how to plan, design, build, secure,
            test, release, and maintain real-world cross-platform apps. Use it on any
            product, at any company. The workflow stays the same.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link href={`/docs/${FIRST_DOC_SLUG}`} className="btn-primary">
              Start here
            </Link>
            <Link href="/docs/adopt-this-playbook" className="btn-outlined">
              Adopt for your company
            </Link>
          </div>
          <dl className="mt-14 grid grid-cols-3 gap-6 border-t border-outline pt-10 dark:border-[#3c4043] sm:max-w-lg">
            {STATS.map((stat) => (
              <div key={stat.label}>
                <dt className="text-3xl font-normal text-ink dark:text-[#e3e3e3]">
                  {stat.value}
                </dt>
                <dd className="mt-1 text-sm text-ink-muted">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
        <h2 className="text-headline text-ink dark:text-[#e3e3e3]">What is MobilityForge?</h2>
        <p className="mt-4 max-w-3xl text-body-lg text-ink-variant dark:text-[#c4c7c5]">
          A hosted documentation platform that turns mobile engineering standards into
          practical guides: stack, design, architecture, API patterns, security and testing
          checklists, Git workflow, CI/CD, monitoring, and team collaboration. Designed so
          any organization can reuse it on every project.
        </p>
      </section>

      <section className="bg-surface-dim py-16 dark:bg-[#1e1f20] lg:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-headline text-ink dark:text-[#e3e3e3]">Built to reuse</h2>
          <p className="mt-2 max-w-2xl text-ink-variant dark:text-[#c4c7c5]">
            One workflow, many products. Copy checklists into PRs and ship with confidence.
          </p>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2">
            {[
              "One workflow for every React Native or cross-platform project",
              "Checklists you can paste into PR templates and release notes",
              "Phased adoption plan for startups, agencies, and in-house teams",
              "Fork-friendly: customize branding, keep the engineering standard",
            ].map((item) => (
              <li key={item} className="surface-card-elevated flex gap-4 p-5">
                <span
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-700 dark:bg-[#394457] dark:text-[#8ab4f8]"
                  aria-hidden
                >
                  <CheckIcon />
                </span>
                <span className="text-sm leading-6 text-ink-variant dark:text-[#c4c7c5]">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
        <h2 className="text-headline text-ink dark:text-[#e3e3e3]">
          Core engineering workflow
        </h2>
        <p className="mt-2 text-ink-variant dark:text-[#c4c7c5]">
          Every serious mobile project should follow this path.
        </p>
        <div className="mt-8">
          <WorkflowDiagram steps={WORKFLOW} />
        </div>
      </section>

      <section className="border-t border-outline bg-surface-dim py-16 dark:border-[#3c4043] dark:bg-[#1e1f20] lg:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-headline text-ink dark:text-[#e3e3e3]">Main learning areas</h2>
          <p className="mt-2 text-ink-variant dark:text-[#c4c7c5]">
            {DOC_NAV.length} guides across the full delivery lifecycle.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {LEARNING_AREAS.map((area) => (
              <article key={area.title} className="surface-card-elevated p-6">
                <h3 className="text-title text-ink dark:text-[#e3e3e3]">{area.title}</h3>
                <ul className="mt-4 space-y-2">
                  {area.slugs.map((slug) => {
                    const doc = DOC_NAV.find((d) => d.slug === slug);
                    if (!doc) return null;
                    return (
                      <li key={slug}>
                        <Link
                          href={`/docs/${slug}`}
                          className="group flex items-center justify-between rounded-lg px-2 py-2 text-sm text-brand-600 transition-colors hover:bg-brand-50 dark:text-[#8ab4f8] dark:hover:bg-[#28292a]"
                        >
                          <span>{doc.title}</span>
                          <span
                            className="text-ink-muted opacity-0 transition-opacity group-hover:opacity-100"
                            aria-hidden
                          >
                            ›
                          </span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 text-center sm:px-6">
        <h2 className="text-headline text-ink dark:text-[#e3e3e3]">
          Ready to build the right way?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-ink-variant dark:text-[#c4c7c5]">
          Begin with Start Here, then open the guide that matches your current sprint.
        </p>
        <Link href={`/docs/${FIRST_DOC_SLUG}`} className="btn-primary mt-8">
          Open the playbook
        </Link>
      </section>

      <footer className="border-t border-outline py-10 text-center text-sm text-ink-muted dark:border-[#3c4043]">
        <p>MobilityForge. Mobile engineering playbook.</p>
      </footer>
    </div>
  );
}

function CheckIcon() {
  return (
    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
    </svg>
  );
}
