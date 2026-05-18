import type { DocPageContent } from "@/types/docs";
import { getDocToc } from "@/lib/doc-toc";
import { PageHeader } from "./PageHeader";
import { PageIntro } from "./PageIntro";
import { SectionCard } from "./SectionCard";
import { InfoBox } from "./InfoBox";
import { WarningBox } from "./WarningBox";
import { MistakeList } from "./MistakeList";
import { Checklist } from "./Checklist";
import { WorkflowDiagram } from "./WorkflowDiagram";
import { CodeExample } from "./CodeExample";
import { Breadcrumbs } from "./Breadcrumbs";
import { PrevNextNav } from "./PrevNextNav";
import { KeyTakeaways } from "./KeyTakeaways";
import { RelatedLinks } from "./RelatedLinks";
import { DocTableOfContents } from "./DocTableOfContents";

type DocPageProps = {
  page: DocPageContent;
  slug: string;
};

function SectionHeading({
  id,
  children,
}: {
  id: string;
  children: React.ReactNode;
}) {
  return (
    <h2
      id={id}
      className="scroll-mt-28 text-lg font-semibold text-slate-900 dark:text-slate-100"
    >
      {children}
    </h2>
  );
}

export function DocPage({ page, slug }: DocPageProps) {
  const toc = getDocToc(page);

  return (
    <div className="xl:grid xl:grid-cols-[minmax(0,1fr)_220px] xl:gap-10">
      <article className="doc-prose min-w-0 space-y-10">
        <Breadcrumbs slug={slug} />
        <PageHeader title={page.title} description={page.description} />

        <section id="overview" className="scroll-mt-28 space-y-4">
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
            Overview
          </p>
          <PageIntro>{page.intro}</PageIntro>
        </section>

        <section id="why-it-matters" className="scroll-mt-28">
          <InfoBox title="Why it matters">{page.whyItMatters}</InfoBox>
        </section>

        {page.keyTakeaways && page.keyTakeaways.length > 0 && (
          <section id="key-takeaways" className="scroll-mt-28">
            <KeyTakeaways items={page.keyTakeaways} />
          </section>
        )}

        {page.workflow && page.workflow.length > 0 && (
          <section id="workflow" className="scroll-mt-28 space-y-3">
            <SectionHeading id="workflow-heading">Workflow</SectionHeading>
            <WorkflowDiagram steps={page.workflow} title="Step-by-step flow" />
          </section>
        )}

        <section id="how-to-apply" className="scroll-mt-28 space-y-4">
          <SectionHeading id="how-to-apply-heading">
            How to apply it on your project
          </SectionHeading>
          <div className="space-y-4">
            {page.howToApply.map((section) => (
              <SectionCard key={section.heading} heading={section.heading} body={section.body} />
            ))}
          </div>
        </section>

        {page.codeExamples && page.codeExamples.length > 0 && (
          <section id="examples" className="scroll-mt-28 space-y-4">
            <SectionHeading id="examples-heading">Examples</SectionHeading>
            {page.codeExamples.map((example, i) => (
              <CodeExample key={`${example.title ?? "ex"}-${i}`} example={example} />
            ))}
          </section>
        )}

        <section id="common-mistakes" className="scroll-mt-28">
          <WarningBox title="Common mistakes">
            <MistakeList items={page.commonMistakes} />
          </WarningBox>
        </section>

        <section id="checklist" className="scroll-mt-28 space-y-3">
          <SectionHeading id="checklist-heading">Checklist</SectionHeading>
          <Checklist groups={page.checklist} />
        </section>

        {page.relatedSlugs && page.relatedSlugs.length > 0 && (
          <section id="related" className="scroll-mt-28">
            <RelatedLinks slugs={page.relatedSlugs} />
          </section>
        )}

        <PrevNextNav slug={slug} />
      </article>

      <DocTableOfContents items={toc} />
    </div>
  );
}
