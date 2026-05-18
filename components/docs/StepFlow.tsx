import type { StepFlowItem } from "@/types/docs";

type StepFlowProps = {
  steps: StepFlowItem[];
};

export function StepFlow({ steps }: StepFlowProps) {
  return (
    <ol className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
      {steps.map((step, index) => (
        <li key={step.label} className="flex items-center gap-2 text-sm">
          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-100 text-xs font-semibold text-brand-700">
            {index + 1}
          </span>
          <span className="font-medium text-slate-800">{step.label}</span>
          {index < steps.length - 1 && (
            <span className="hidden text-slate-400 sm:inline" aria-hidden>
              →
            </span>
          )}
        </li>
      ))}
    </ol>
  );
}
