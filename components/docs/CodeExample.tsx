import { CodeBlock } from "./CodeBlock";
import type { CodeExample as CodeExampleType } from "@/types/docs";

type CodeExampleProps = {
  example: CodeExampleType;
};

export function CodeExample({ example }: CodeExampleProps) {
  return (
    <div className="space-y-2">
      {example.title && (
        <p className="text-sm font-medium text-slate-800">{example.title}</p>
      )}
      <CodeBlock code={example.code} language={example.language} />
    </div>
  );
}
