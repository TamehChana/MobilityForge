import type { StepFlowItem } from "@/types/docs";

type WorkflowDiagramProps = {
  steps: StepFlowItem[];
  title?: string;
};

export function WorkflowDiagram({ steps, title }: WorkflowDiagramProps) {
  return (
    <section className="rounded-2xl border border-outline bg-surface-container p-6 dark:border-[#3c4043] dark:bg-[#28292a]">
      {title && (
        <p className="mb-4 text-sm font-medium text-on-surface dark:text-[#e3e3e3]">{title}</p>
      )}
      <div className="flex flex-col gap-3 md:flex-row md:flex-wrap md:items-center">
        {steps.map((step, i) => (
          <span key={step.label} className="flex items-center gap-2">
            <span className="rounded-full bg-surface px-4 py-2 text-sm font-medium text-on-surface shadow-elevation-1 ring-1 ring-outline dark:bg-[#1e1f20] dark:text-[#e3e3e3] dark:ring-[#3c4043]">
              {step.label}
            </span>
            {i < steps.length - 1 && (
              <span className="hidden text-on-surface-muted md:inline" aria-hidden>
                /
              </span>
            )}
          </span>
        ))}
      </div>
    </section>
  );
}
