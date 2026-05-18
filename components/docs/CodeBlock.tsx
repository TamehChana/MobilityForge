"use client";

import { CopyButton } from "./CopyButton";

type CodeBlockProps = {
  code: string;
  language?: string;
};

export function CodeBlock({ code, language = "typescript" }: CodeBlockProps) {
  return (
    <div className="group relative">
      <div className="absolute right-2 top-2 z-10 opacity-0 transition-opacity group-hover:opacity-100">
        <CopyButton text={code} label="Copy code" />
      </div>
      <pre className="overflow-x-auto rounded-xl border border-slate-700/50 bg-slate-900 p-4 pr-24 text-[13px] leading-6 text-slate-100 shadow-inner dark:border-slate-600">
        <code className="font-mono" data-language={language}>
          {code}
        </code>
      </pre>
    </div>
  );
}
