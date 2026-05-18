import type { StepFlowItem } from "@/types/docs";

type WorkflowDiagramProps = {
  steps: StepFlowItem[];
  title?: string;
};

export function WorkflowDiagram({ steps, title }: WorkflowDiagramProps) {
  return (
    <section className="rounded-xl border border-slate-200 bg-slate-50 p-6">
      {title && <p className="mb-4 text-sm font-semibold text-slate-800">{title}</p>}
      <section className="flex flex-col gap-3 md:flex-row md:flex-wrap md:items-center">
        {steps.map((step, i) => (
          <span key={step.label} className="flex items-center gap-2">
            <span className="rounded-md bg-white px-3 py-2 text-sm font-medium text-slate-800 shadow-sm ring-1 ring-slate-200">
              {step.label}
            </span>
            {i < steps.length - 1 && (
              <span className="hidden text-slate-400 md:inline" aria-hidden>
                →
              </span>
            )}
          </span>
        ))}
      </section>
    </section>
  );
}
